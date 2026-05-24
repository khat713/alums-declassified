import { NextRequest, NextResponse } from 'next/server';

const VOICE_ID = 'nPczCjzI2devNBz1zQrb';
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW = 60 * 60 * 1000;

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const rateData = rateLimitMap.get(ip);

  if (rateData) {
    if (now < rateData.resetTime) {
      if (rateData.count >= RATE_LIMIT) {
        return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
      }
      rateData.count++;
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
  }

  // Validate input
  const body = await req.json();
  const { text } = body;

  if (!text || typeof text !== 'string' || text.length > 500) {
    return NextResponse.json({ error: 'Invalid text' }, { status: 400 });
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/stream`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
          'Accept': 'audio/mpeg',
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_turbo_v2',
          voice_settings: {
            stability: 0.4,
            similarity_boost: 0.85,
            style: 0.6,
            use_speaker_boost: true,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error }, { status: response.status });
    }

    const audioBuffer = await response.arrayBuffer();

    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate speech' }, { status: 500 });
  }
}

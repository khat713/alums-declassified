'use client';

interface LessonVideoProps {
  title: string;
  /** Length hint shown on the placeholder, e.g. "~3 min". */
  length?: string;
  /** Loom/YouTube embed URL. When provided, the video renders instead of the placeholder. */
  embedUrl?: string;
  /** Optional one-line description of what the video covers. */
  description?: string;
}

export function LessonVideo({ title, length, embedUrl, description }: LessonVideoProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
          padding: '2px 8px', borderRadius: '100px', background: 'rgba(13,124,126,0.12)', color: '#0d7c7e',
        }}>
          ▶ Lesson Video
        </span>
        <span style={{ fontWeight: 700, fontSize: '0.95rem' }} className="dark:text-white text-[#1b2537]">{title}</span>
        {length && (
          <span style={{ fontSize: '0.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: '100px', background: 'rgba(0,0,0,0.06)', color: '#9ca3af' }}>{length}</span>
        )}
      </div>

      {embedUrl ? (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '12px', overflow: 'hidden', background: '#000' }}>
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          />
        </div>
      ) : (
        <div style={{
          position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '12px', overflow: 'hidden',
          border: '1.5px dashed rgba(13,124,126,0.35)', background: 'rgba(13,124,126,0.04)',
        }}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', textAlign: 'center', padding: '1.5rem' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(13,124,126,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#0d7c7e', fontSize: '1.4rem', marginLeft: '4px' }}>▶</span>
            </div>
            <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.05rem', fontWeight: 700, color: '#0d7c7e', margin: 0 }}>{title}</p>
            {description && (
              <p className="dark:text-white/55 text-[#6b7280]" style={{ fontSize: '0.85rem', lineHeight: 1.5, maxWidth: '460px', margin: 0 }}>{description}</p>
            )}
            <p style={{ fontSize: '0.75rem', margin: 0, color: '#9ca3af', fontStyle: 'italic' }}>
              Lesson video coming soon. Paste the Loom embed URL into <code>embedUrl</code> to activate. Captions and transcript required.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

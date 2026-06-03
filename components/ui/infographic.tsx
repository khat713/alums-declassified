'use client';
import { useState } from 'react';

interface InfographicProps {
  title: string;
  /** Path to the exported PNG, e.g. "module-1-infographic.png" (served from /public/infographics/). */
  filename: string;
  /** Alt text describing the infographic content in words (WCAG requirement). */
  alt?: string;
  /** One-line description of what the infographic shows. */
  description?: string;
  /** When true, the PNG renders and a download button activates. */
  active?: boolean;
}

const basePath = process.env.NODE_ENV === 'production' ? '/alums-declassified' : '';

export function Infographic({ title, filename, alt, description, active = false }: InfographicProps) {
  const [hovered, setHovered] = useState(false);
  const src = `${basePath}/infographics/${filename}`;

  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
          padding: '2px 8px', borderRadius: '100px', background: 'rgba(99,102,241,0.12)', color: '#4f46e5',
        }}>
          🖼 Infographic
        </span>
        <span style={{ fontWeight: 700, fontSize: '0.95rem' }} className="dark:text-white text-[#1b2537]">{title}</span>
        <span style={{ fontSize: '0.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: '100px', background: 'rgba(0,0,0,0.06)', color: '#9ca3af' }}>PNG</span>
      </div>

      {active ? (
        <div>
          <img
            src={src}
            alt={alt || title}
            style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', display: 'block', marginBottom: '0.6rem' }}
          />
          <a
            href={src}
            download
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              background: hovered ? '#4338ca' : '#4f46e5', color: '#fff', padding: '8px 20px', borderRadius: '8px',
              fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px',
              transition: 'background 0.15s',
            }}
            aria-label={`Download ${title} infographic`}
          >
            ↓ Download PNG
          </a>
        </div>
      ) : (
        <div style={{
          borderRadius: '12px', border: '1.5px dashed rgba(99,102,241,0.35)', background: 'rgba(99,102,241,0.04)',
          padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '0.75rem', textAlign: 'center', minHeight: '180px',
        }}>
          <span style={{ fontSize: '2rem', lineHeight: 1 }}>🖼</span>
          <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.05rem', fontWeight: 700, color: '#4f46e5', margin: 0 }}>{title}</p>
          {description && (
            <p className="dark:text-white/55 text-[#6b7280]" style={{ fontSize: '0.85rem', lineHeight: 1.5, maxWidth: '460px', margin: 0 }}>{description}</p>
          )}
          <p style={{ fontSize: '0.75rem', margin: 0, color: '#9ca3af', fontStyle: 'italic' }}>
            Canva infographic coming soon. Export as PNG to /public/infographics/{filename}, add alt text, then set active. WCAG: no meaning by color alone.
          </p>
        </div>
      )}
    </div>
  );
}

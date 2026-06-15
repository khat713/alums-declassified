'use client';

interface InfographicProps {
  title: string;
  filename: string;
  alt?: string;
  active?: boolean;
}

const basePath = process.env.NODE_ENV === 'production' ? '/alums-declassified' : '';

export function Infographic({ title, filename, alt, active = false }: InfographicProps) {
  const src = `${basePath}/infographics/${filename}`;
  const isPDF = filename.endsWith('.pdf');

  if (!active) {
    return (
      <div style={{
        borderRadius: '12px', border: '1.5px dashed rgba(99,102,241,0.35)', background: 'rgba(99,102,241,0.04)',
        padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', gap: '0.75rem', textAlign: 'center', minHeight: '180px', marginBottom: '1rem',
      }}>
        <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.05rem', fontWeight: 700, color: '#4f46e5', margin: 0 }}>{title}</p>
        <p style={{ fontSize: '0.75rem', margin: 0, color: '#9ca3af', fontStyle: 'italic' }}>Infographic coming soon.</p>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
          padding: '2px 8px', borderRadius: '100px', background: 'rgba(99,102,241,0.12)', color: '#4f46e5',
        }}>
          Infographic
        </span>
        <span style={{ fontWeight: 700, fontSize: '0.95rem' }} className="dark:text-white text-[#1b2537]">{title}</span>
      </div>

      {isPDF ? (
        <div>
          <iframe
            src={src}
            title={alt || title}
            width="100%"
            height="600"
            style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', display: 'block', marginBottom: '0.6rem' }}
          />
          <a
            href={src}
            download
            style={{
              background: '#4f46e5', color: '#fff', padding: '8px 20px', borderRadius: '8px',
              fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex',
              alignItems: 'center', gap: '6px',
            }}
            aria-label={`Download ${title} infographic`}
          >
            ↓ Download PDF
          </a>
        </div>
      ) : (
        <div>
          <img
            src={src}
            alt={alt || title}
            style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', display: 'block', marginBottom: '0.6rem' }}
          />
          <a
            href={src}
            download
            style={{
              background: '#4f46e5', color: '#fff', padding: '8px 20px', borderRadius: '8px',
              fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex',
              alignItems: 'center', gap: '6px',
            }}
            aria-label={`Download ${title} infographic`}
          >
            ↓ Download PNG
          </a>
        </div>
      )}
    </div>
  );
}

'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0f172a 100%)', borderTop: '1px solid rgba(13,124,126,0.15)', marginTop: '5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #0d7c7e, #d97706, #0d7c7e)', opacity: 0.6 }} />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 800, fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>🎓 Alum&apos;s Declassified</p>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '260px' }}>A free seven-week college survival guide built specifically for first-generation students. No tuition. No gatekeeping.</p>
          </div>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Course</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[['About', '/about'], ['Start Here', '/start-here'], ['Modules', '/modules'], ['Assignments', '/assignments'], ['Tech Help', '/tech-help']].map(([label, href]) => (
                <Link key={href} href={href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0d7c7e'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Modules</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[['College Expectations', '/module-1'], ['Campus Resources', '/module-2'], ['Financial Literacy', '/module-3'], ['Academic Success', '/module-5'], ['Career Preparation', '/module-6'], ['Emotional Resilience', '/module-7']].map(([label, href]) => (
                <Link key={href} href={href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#d97706'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >{label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '3rem', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.82rem' }}>© 2025 Alum&apos;s Declassified · Free for all first-generation students</p>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.78rem' }}>Built with care for every first-gen student who deserved better information sooner.</p>
        </div>
      </div>
    </footer>
  );
}

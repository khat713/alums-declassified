'use client';
import { useState } from 'react';

interface DocumentDownloadProps {
  title: string;
  description?: string;
  filename: string;
  type?: 'lesson' | 'activity' | 'assessment' | 'model' | 'template';
  active?: boolean;
}

const typeConfig = {
  lesson:     { bg: 'rgba(13,124,126,0.08)',  border: 'rgba(13,124,126,0.3)',  badge: 'rgba(13,124,126,0.15)',  label: 'Lesson',         icon: '📄' },
  activity:   { bg: 'rgba(217,119,6,0.08)',   border: 'rgba(217,119,6,0.3)',   badge: 'rgba(217,119,6,0.15)',   label: 'Activity',       icon: '✏️' },
  assessment: { bg: 'rgba(99,102,241,0.08)',  border: 'rgba(99,102,241,0.3)',  badge: 'rgba(99,102,241,0.15)', label: 'Assessment',     icon: '📝' },
  model:      { bg: 'rgba(239,68,68,0.08)',   border: 'rgba(239,68,68,0.3)',   badge: 'rgba(239,68,68,0.15)',  label: 'Model Response', icon: '⭐' },
  template:   { bg: 'rgba(34,197,94,0.08)',   border: 'rgba(34,197,94,0.3)',   badge: 'rgba(34,197,94,0.15)',  label: 'Template',       icon: '📋' },
};

const basePath = process.env.NODE_ENV === 'production' ? '/alums-declassified' : '';

export function DocumentDownload({
  title,
  description,
  filename,
  type = 'lesson',
  active = false,
}: DocumentDownloadProps) {
  const [hovered, setHovered] = useState(false);
  const cfg = typeConfig[type];
  const href = `${basePath}/documents/${filename}`;

  return (
    <div style={{
      border: `1.5px solid ${active ? cfg.border : 'rgba(0,0,0,0.1)'}`,
      borderRadius: '10px',
      background: active ? cfg.bg : 'rgba(0,0,0,0.02)',
      padding: '1rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '0.75rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', flex: 1 }}>
        <span style={{ fontSize: '1.6rem', lineHeight: 1, flexShrink: 0 }}>{cfg.icon}</span>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 700, fontSize: '0.95rem' }} className="dark:text-white text-[#1b2537]">
              {title}
            </span>
            <span style={{
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const,
              padding: '2px 8px', borderRadius: '100px',
              background: active ? cfg.badge : 'rgba(0,0,0,0.06)',
              color: active ? '#1b2537' : '#9ca3af',
            }}>
              {cfg.label}
            </span>
            <span style={{
              fontSize: '0.68rem', fontWeight: 600, padding: '2px 8px', borderRadius: '100px',
              background: 'rgba(0,0,0,0.06)', color: '#9ca3af',
            }}>PDF</span>
          </div>
          {description && (
            <p style={{ fontSize: '0.825rem', lineHeight: 1.5, margin: 0 }} className="dark:text-white/55 text-[#6b7280]">
              {description}
            </p>
          )}
          {!active && (
            <p style={{ fontSize: '0.75rem', margin: '4px 0 0', color: '#9ca3af', fontStyle: 'italic' }}>
              Add {filename} to /public/documents/ to activate this download.
            </p>
          )}
        </div>
      </div>

      {active ? (
        <a
          href={href}
          download
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: hovered ? '#096163' : '#0d7c7e',
            color: '#ffffff',
            padding: '8px 20px',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '0.875rem',
            textDecoration: 'none',
            flexShrink: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'background 0.15s',
          }}
          aria-label={`Download ${title}`}
        >
          ↓ Download
        </a>
      ) : (
        <button
          disabled
          style={{
            background: 'rgba(0,0,0,0.06)',
            color: '#9ca3af',
            padding: '8px 20px',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '0.875rem',
            border: 'none',
            cursor: 'not-allowed',
            flexShrink: 0,
          }}
          aria-label="Download not yet available"
          aria-disabled="true"
        >
          Coming Soon
        </button>
      )}
    </div>
  );
}

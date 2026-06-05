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
  lesson:     { bg: 'rgba(13,124,126,0.08)',  border: 'rgba(13,124,126,0.3)',  badge: 'rgba(13,124,126,0.15)',  label: 'Lesson' },
  activity:   { bg: 'rgba(217,119,6,0.08)',   border: 'rgba(217,119,6,0.3)',   badge: 'rgba(217,119,6,0.15)',   label: 'Activity' },
  assessment: { bg: 'rgba(99,102,241,0.08)',  border: 'rgba(99,102,241,0.3)',  badge: 'rgba(99,102,241,0.15)',  label: 'Assessment' },
  model:      { bg: 'rgba(239,68,68,0.08)',   border: 'rgba(239,68,68,0.3)',   badge: 'rgba(239,68,68,0.15)',   label: 'Model Response' },
  template:   { bg: 'rgba(34,197,94,0.08)',   border: 'rgba(34,197,94,0.3)',   badge: 'rgba(34,197,94,0.15)',   label: 'Template' },
};

const isPdf = (filename: string) => filename.toLowerCase().endsWith('.pdf');

// On GitHub Pages the site is at khat713.github.io/alums-declassified
const PRODUCTION_ORIGIN = 'https://khat713.github.io';
const basePath = process.env.NODE_ENV === 'production' ? '/alums-declassified' : '';

function getPreviewSrc(filename: string): string {
  const filePath = `${basePath}/documents/${filename}`;
  if (isPdf(filename)) {
    return `${filePath}#toolbar=1&navpanes=0`;
  }
  // .docx — use Google Docs viewer with the full public URL
  const fullUrl = `${PRODUCTION_ORIGIN}${basePath}/documents/${encodeURIComponent(filename)}`;
  return `https://docs.google.com/viewer?url=${fullUrl}&embedded=true`;
}

export function DocumentDownload({
  title,
  description,
  filename,
  type = 'lesson',
  active = false,
}: DocumentDownloadProps) {
  const [hovered, setHovered] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const cfg = typeConfig[type];
  const href = `${basePath}/documents/${filename}`;
  const ext = filename.split('.').pop()?.toUpperCase() ?? 'DOC';

  return (
    <div style={{ marginBottom: '0.75rem' }}>
      {/* Header card */}
      <div style={{
        border: `1.5px solid ${active ? cfg.border : 'rgba(0,0,0,0.1)'}`,
        borderRadius: previewOpen ? '10px 10px 0 0' : '10px',
        background: active ? cfg.bg : 'rgba(0,0,0,0.02)',
        padding: '1rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', flex: 1 }}>
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
              }}>{ext}</span>
            </div>
            {description && (
              <p style={{ fontSize: '0.825rem', lineHeight: 1.5, margin: 0 }} className="dark:text-white/55 text-[#6b7280]">
                {description}
              </p>
            )}
            {!active && (
              <p style={{ fontSize: '0.75rem', margin: '4px 0 0', color: '#9ca3af', fontStyle: 'italic' }}>
                Upload {filename} to /public/documents/ to activate.
              </p>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0, alignItems: 'center' }}>
          {active && (
            <button
              onClick={() => setPreviewOpen(o => !o)}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(13,124,126,0.12)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(13,124,126,0.06)')}
              style={{
                background: 'rgba(13,124,126,0.06)',
                color: '#0d7c7e',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.875rem',
                border: '1.5px solid rgba(13,124,126,0.25)',
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}
              aria-expanded={previewOpen}
              aria-label={previewOpen ? 'Hide preview' : 'Preview document'}
            >
              {previewOpen ? '▲ Hide' : '▼ Preview'}
            </button>
          )}

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
              }}
              aria-label="Download not yet available"
              aria-disabled="true"
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>

      {/* Inline preview panel */}
      {active && previewOpen && (
        <div style={{
          border: `1.5px solid ${cfg.border}`,
          borderTop: 'none',
          borderRadius: '0 0 10px 10px',
          overflow: 'hidden',
          background: '#f5f5f5',
        }}>
          <iframe
            src={getPreviewSrc(filename)}
            title={`Preview: ${title}`}
            style={{ width: '100%', height: '620px', border: 'none', display: 'block' }}
            aria-label={`Document preview of ${title}`}
          />
        </div>
      )}
    </div>
  );
}

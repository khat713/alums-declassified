'use client';
import { useState } from 'react';

interface AssessmentSubmitButtonProps {
  formUrl?: string;
  label?: string;
}

export function AssessmentSubmitButton({
  formUrl,
  label = "Submit Assignment →",
}: AssessmentSubmitButtonProps) {
  const [open, setOpen] = useState(false);

  if (!formUrl) {
    return (
      <div className="mt-3 w-full border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[6px] py-[10px] px-5 text-center text-[0.85rem] text-[#8d9db5] dark:text-[#64748b]">
        Submission form coming soon — check back before your deadline.
      </div>
    );
  }

  const embedUrl = formUrl.replace('?usp=dialog', '') + '?embedded=true';

  return (
    <div className="mt-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-[#0d7c7e] hover:bg-[#096163] text-white font-semibold text-[0.88rem] px-5 py-[10px] rounded-[6px] transition-colors"
      >
        {open ? '▲ Hide Submission Form' : label}
      </button>
      {open && (
        <div className="mt-3">
          <iframe
            src={embedUrl}
            width="100%"
            height="620"
            style={{ border: 'none', borderRadius: '10px', display: 'block' }}
            title="Assignment submission form"
          >
            Loading form…
          </iframe>
          <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }} className="text-[#5a6a82] dark:text-[#94a3b8]">
            Having trouble with the form?{' '}
            <a href={formUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0d7c7e', fontWeight: 600 }}>
              Open it directly →
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

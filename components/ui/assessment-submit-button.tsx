'use client';
import { toast } from '@/components/ui/toast-notification';

export function AssessmentSubmitButton() {
  return (
    <button
      onClick={() => toast('✓ Assessment submitted! Move on to the next module when ready.', 'success')}
      className="mt-3 w-full bg-[#0d7c7e] hover:bg-[#096163] text-white font-semibold text-[0.88rem] px-5 py-[10px] rounded-[6px] transition-colors"
    >
      Submit Assessment →
    </button>
  );
}

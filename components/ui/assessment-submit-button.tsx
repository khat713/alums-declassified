interface AssessmentSubmitButtonProps {
  formUrl?: string;
  label?: string;
}

export function AssessmentSubmitButton({
  formUrl,
  label = "Submit Assignment →",
}: AssessmentSubmitButtonProps) {
  if (!formUrl) {
    return (
      <div className="mt-3 w-full border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[6px] py-[10px] px-5 text-center text-[0.85rem] text-[#8d9db5] dark:text-[#64748b]">
        Submission form coming soon — check back before your deadline.
      </div>
    );
  }

  return (
    <a
      href={formUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 w-full bg-[#0d7c7e] hover:bg-[#096163] text-white font-semibold text-[0.88rem] px-5 py-[10px] rounded-[6px] transition-colors no-underline hover:no-underline flex items-center justify-center"
    >
      {label}
    </a>
  );
}

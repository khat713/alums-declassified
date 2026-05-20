import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-[10px] text-[0.82rem]">
      <div className="container mx-auto px-4">
        {items.map((item, i) => (
          <span key={i}>
            {i < items.length - 1 ? (
              <>
                {item.href ? (
                  <Link href={item.href} className="text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] hover:underline">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#5a6a82] dark:text-[#94a3b8]">{item.label}</span>
                )}
                <span className="text-[#8d9db5] dark:text-[#64748b] mx-[6px]">/</span>
              </>
            ) : (
              <span className="text-[#1b2537] dark:text-[#e2e8f0] font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

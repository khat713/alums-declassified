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
    <div className="bg-white border-b border-[#dde2eb] py-[10px] text-[0.82rem]">
      <div className="container mx-auto px-4">
        {items.map((item, i) => (
          <span key={i}>
            {i < items.length - 1 ? (
              <>
                {item.href ? (
                  <Link href={item.href} className="text-[#5a6a82] hover:text-[#0d7c7e] hover:underline">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#5a6a82]">{item.label}</span>
                )}
                <span className="text-[#8d9db5] mx-[6px]">/</span>
              </>
            ) : (
              <span className="text-[#1b2537] font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

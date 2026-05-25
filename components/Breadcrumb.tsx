import Link from "next/link";
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-[10px] text-[0.82rem]">
      <ol className="container mx-auto px-4 list-none m-0 p-0 flex items-center flex-wrap">
        {items.map((item, i) => (
          <li key={i} className="flex items-center">
            {i < items.length - 1 ? (
              <>
                {item.href ? (
                  <Link href={item.href} className="text-[#4a5568] dark:text-[#94a3b8] hover:text-[#0d7c7e] hover:underline">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#4a5568] dark:text-[#94a3b8]">{item.label}</span>
                )}
                <ChevronRight size={12} style={{ color: '#4a5568', margin: '0 4px' }} aria-hidden="true" />
              </>
            ) : (
              <span className="text-[#1b2537] dark:text-[#e2e8f0] font-medium" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

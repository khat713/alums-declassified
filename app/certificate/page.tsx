import type { Metadata } from "next";
import Link from "next/link";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Certificate of Completion | Alum's Declassified",
};

const basePath = process.env.NODE_ENV === "production" ? "/alums-declassified" : "";
const certFile = "Certificate of Completion Alums Declassified.png";

export default function CertificatePage() {
  const certSrc = `${basePath}/images/${encodeURIComponent(certFile)}`;

  return (
    <main>
      <div className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-[10px] text-[0.82rem]">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] hover:underline">Home</Link>
          <span className="text-[#8d9db5] dark:text-[#64748b] mx-[6px]">/</span>
          <span className="text-[#1b2537] dark:text-[#e2e8f0] font-medium">Certificate of Completion</span>
        </div>
      </div>

      <section className="module-header border-b py-9 pb-7">
        <div className="container mx-auto px-4">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-2">
            <Award size={14} /> You did it
          </p>
          <h1
            className="text-[clamp(1.5rem,3vw,1.95rem)] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem] tracking-[-0.025em] leading-[1.2]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Certificate of Completion
          </h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] m-0 max-w-[600px]">
            You completed all seven modules and submitted your College Readiness Portfolio. Download your certificate below.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-12 max-w-[800px]">
        <div className="bg-white dark:bg-[#1e293b] rounded-[10px] border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)] overflow-hidden mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={certSrc}
            alt="Certificate of Completion — Alum's Declassified"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        <div className="flex justify-center">
          <a
            href={certSrc}
            download={certFile}
            className="bg-[#0d7c7e] text-white no-underline py-[12px] px-[32px] text-[0.95rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] transition-all"
          >
            Download Certificate →
          </a>
        </div>

        <div className="text-center mt-10">
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.88rem]">
            Share your achievement and tag us. You earned this.
          </p>
          <Link
            href="/"
            className="text-[#0d7c7e] text-[0.88rem] font-semibold hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

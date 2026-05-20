import type { Metadata } from "next";
import { AccordionItem } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Tech Help | Alum's Declassified",
};

export default function TechHelpPage() {
  return (
    <main>
      <section className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <h1
            className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem] tracking-[-0.025em] leading-[1.2]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tech Help
          </h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] m-0 max-w-[580px]">
            Something not working? Find your issue below or contact me directly.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="bg-[#eff8ff] dark:bg-[#0f2744] border-l-4 border-l-[#0d7c7e] rounded-r-[5px] py-[13px] px-[18px] mb-6">
          <p className="m-0 text-[0.9rem]">
            📧 <strong>Can&apos;t find your answer below?</strong> Email me at{" "}
            <a href="mailto:your-email@example.com" className="text-[#0d7c7e] font-semibold hover:underline">
              your-email@example.com
            </a>{" "}
            with a description of the problem, your device, and your browser. I
            respond within 48 hours on weekdays.
          </p>
        </div>

        {/* Common Issues */}
        <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">
            Common Issues
          </span>
          <h2
            className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Solve It Yourself — Common Problems
          </h2>

          <AccordionItem title="🎥 A video won't load or play">
            <ol className="ml-5 space-y-1">
              <li>Refresh the page (F5 or Ctrl+R).</li>
              <li>Try a different browser (Chrome or Firefox work best).</li>
              <li>Check that your internet connection is active.</li>
              <li>If it&apos;s a YouTube embed, try opening it directly on YouTube.</li>
              <li>If it&apos;s a Loom video, try opening the direct Loom link.</li>
              <li>Still stuck? Email me with your browser and device.</li>
            </ol>
          </AccordionItem>

          <AccordionItem title="🔗 A link is broken or leads to a 404 page">
            <ol className="ml-5 space-y-1">
              <li>Copy the URL from the broken link and paste it into a new tab.</li>
              <li>Check for any extra spaces or characters in the address bar.</li>
              <li>Go back to the home page and navigate from there.</li>
              <li>Email me the URL of the broken link so I can fix it.</li>
            </ol>
          </AccordionItem>

          <AccordionItem title="📝 A form or submission won't go through">
            <ol className="ml-5 space-y-1">
              <li>Make sure all required fields are filled in (look for red borders or asterisks).</li>
              <li>Try refreshing the page and re-entering your response.</li>
              <li>Try a different browser.</li>
              <li>If you&apos;re on a school or work network, try your personal wi-fi — some networks block form submissions.</li>
              <li>As a backup, email your completed response directly to me.</li>
            </ol>
          </AccordionItem>

          <AccordionItem title="📱 The site looks broken on my phone">
            <ol className="ml-5 space-y-1">
              <li>Make sure you&apos;re using an up-to-date browser (Chrome or Safari on mobile).</li>
              <li>Try rotating your phone to landscape mode for wider tables or content.</li>
              <li>If text is very small, use your browser&apos;s zoom feature.</li>
              <li>Clear your browser cache: Settings → Browser → Clear Cache.</li>
              <li>Email me and describe exactly what looks wrong — screenshot if possible.</li>
            </ol>
          </AccordionItem>

          <AccordionItem title="📄 I can't download or open a template file">
            <ol className="ml-5 space-y-1">
              <li>Right-click the download link and choose &ldquo;Save link as...&rdquo;</li>
              <li>If it&apos;s a Google Doc link, make sure you&apos;re signed into a Google account and click &ldquo;Make a copy.&rdquo;</li>
              <li>If you don&apos;t have Word, Google Docs opens .docx files for free.</li>
              <li>Email me and I&apos;ll send you the file directly.</li>
            </ol>
          </AccordionItem>
        </div>

        {/* Supported Browsers */}
        <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">
            Compatibility
          </span>
          <h2
            className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Supported Browsers &amp; Devices
          </h2>
          <table className="w-full border-collapse text-[0.875rem]">
            <thead>
              <tr>
                {["Browser / Device", "Status", "Notes"].map((h) => (
                  <th key={h} className="bg-[#f2f4f7] dark:bg-[#162032] text-[#5a6a82] dark:text-[#94a3b8] px-[14px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb] dark:border-[#334155]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Chrome (desktop & mobile)", "✅ Fully supported", "Recommended"],
                ["Firefox (desktop & mobile)", "✅ Fully supported", "—"],
                ["Safari (Mac & iPhone)", "✅ Fully supported", "—"],
                ["Edge", "✅ Fully supported", "—"],
                ["Internet Explorer", "❌ Not supported", "Use any modern browser instead"],
                ["Smartphone", "✅ All modules work on mobile", "No app download required"],
              ].map(([browser, status, notes], i) => (
                <tr key={i} className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]">
                  <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044] align-top">{browser}</td>
                  <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044] align-top">{status}</td>
                  <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044] align-top">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contact */}
        <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">
            Contact
          </span>
          <h2
            className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Still Stuck? Contact the Instructor
          </h2>
          <p>
            Email{" "}
            <a href="mailto:your-email@example.com" className="text-[#0d7c7e] font-bold hover:underline">
              your-email@example.com
            </a>{" "}
            with:
          </p>
          <ul className="ml-5 leading-[2]">
            <li>A description of what you were trying to do</li>
            <li>What happened instead</li>
            <li>Your device type (phone, laptop, tablet)</li>
            <li>Your browser and version if you know it</li>
          </ul>
          <p>
            I respond within <strong>48 hours on weekdays</strong>.
          </p>
          <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-center">
            📬 <strong>Optional: Embed a contact form here</strong>
            <br />
            <small>
              Google Form with fields: Name, Email, Issue Description, Device,
              Browser
            </small>
          </div>
        </div>
      </div>
    </main>
  );
}

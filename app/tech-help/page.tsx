import type { Metadata } from "next";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FadeIn } from "@/components/ui/fade-in";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Help | Alum's Declassified",
};

export default function TechHelpPage() {
  return (
    <main>
      <div style={{ position: 'relative', zIndex: 1 }}>
      <section className="module-header border-b py-9 pb-7">
        <div className="container mx-auto px-4">
          <h1
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: '0.4rem' }}
          >
            Tech Help
          </h1>
          <p style={{ fontSize: '0.97rem', margin: 0, maxWidth: '580px' }}>
            Something not working? Find your issue below or contact me directly.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <FadeIn delay={0}>
        <div className="bg-[#eff8ff] dark:bg-[#0f2744] border-l-4 border-l-[#0d7c7e] rounded-r-[5px] py-[13px] px-[18px] mb-6 flex items-start gap-[10px]">
          <Mail size={15} style={{ color: '#0d7c7e', marginTop: '2px', flexShrink: 0 }} />
          <p className="m-0 text-[0.9rem]">
            <strong>Can&apos;t find your answer below?</strong> Email me at{" "}
            <a href="mailto:your-email@example.com" className="text-[#0d7c7e] font-semibold hover:underline">
              your-email@example.com
            </a>{" "}
            with a description of the problem, your device, and your browser. I
            respond within 48 hours on weekdays.
          </p>
        </div>
        </FadeIn>

        {/* Common Issues */}
        <FadeIn delay={0.1}>
        <div className="content-block p-7 mb-5">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">
            Common Issues
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Solve It Yourself: Common Problems
          </h2>

          <Accordion type="single" collapsible={true}>
            <AccordionItem value="item-1">
              <AccordionTrigger>A video won&apos;t load or play</AccordionTrigger>
              <AccordionContent>
                <ol className="ml-5 space-y-1">
                  <li>Refresh the page (F5 or Ctrl+R).</li>
                  <li>Try a different browser (Chrome or Firefox work best).</li>
                  <li>Check that your internet connection is active.</li>
                  <li>If it&apos;s a YouTube embed, try opening it directly on YouTube.</li>
                  <li>If it&apos;s a Loom video, try opening the direct Loom link.</li>
                  <li>Still stuck? Email me with your browser and device.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>A link is broken or leads to a 404 page</AccordionTrigger>
              <AccordionContent>
                <ol className="ml-5 space-y-1">
                  <li>Copy the URL from the broken link and paste it into a new tab.</li>
                  <li>Check for any extra spaces or characters in the address bar.</li>
                  <li>Go back to the home page and navigate from there.</li>
                  <li>Email me the URL of the broken link so I can fix it.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>A form or submission won&apos;t go through</AccordionTrigger>
              <AccordionContent>
                <ol className="ml-5 space-y-1">
                  <li>Make sure all required fields are filled in (look for red borders or asterisks).</li>
                  <li>Try refreshing the page and re-entering your response.</li>
                  <li>Try a different browser.</li>
                  <li>If you&apos;re on a school or work network, try your personal wi-fi. Some networks block form submissions.</li>
                  <li>As a backup, email your completed response directly to me.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>The site looks broken on my phone</AccordionTrigger>
              <AccordionContent>
                <ol className="ml-5 space-y-1">
                  <li>Make sure you&apos;re using an up-to-date browser (Chrome or Safari on mobile).</li>
                  <li>Try rotating your phone to landscape mode for wider tables or content.</li>
                  <li>If text is very small, use your browser&apos;s zoom feature.</li>
                  <li>Clear your browser cache: Settings → Browser → Clear Cache.</li>
                  <li>Email me and describe exactly what looks wrong. Screenshot if possible.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>I can&apos;t download or open a template file</AccordionTrigger>
              <AccordionContent>
                <ol className="ml-5 space-y-1">
                  <li>Right-click the download link and choose &ldquo;Save link as...&rdquo;</li>
                  <li>If it&apos;s a Google Doc link, make sure you&apos;re signed into a Google account and click &ldquo;Make a copy.&rdquo;</li>
                  <li>If you don&apos;t have Word, Google Docs opens .docx files for free.</li>
                  <li>Email me and I&apos;ll send you the file directly.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        </FadeIn>

        {/* Supported Browsers */}
        <FadeIn delay={0.2}>
        <div className="content-block p-7 mb-5">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">
            Compatibility
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
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
                ["Chrome (desktop & mobile)", "Fully supported", "Recommended"],
                ["Firefox (desktop & mobile)", "Fully supported", "None"],
                ["Safari (Mac & iPhone)", "Fully supported", "None"],
                ["Edge", "Fully supported", "None"],
                ["Internet Explorer", "Not supported", "Use any modern browser instead"],
                ["Smartphone", "All modules work on mobile", "No app download required"],
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
        </FadeIn>

        {/* Contact */}
        <FadeIn delay={0.3}>
        <div className="content-block p-7 mb-5">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">
            Contact
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
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
            <strong>Optional: Embed a contact form here</strong>
            <br />
            <small>
              Google Form with fields: Name, Email, Issue Description, Device,
              Browser
            </small>
          </div>
        </div>
        </FadeIn>
      </div>
      </div>
    </main>
  );
}

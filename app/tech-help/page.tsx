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
            <a href="mailto:khat03@ad.unc.edu" className="text-[#0d7c7e] font-semibold hover:underline">
              khat03@ad.unc.edu
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
                <ul className="ml-5 space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#0d7c7e] font-bold">→</span>
                    <span>Refresh the page (F5 or Ctrl+R)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#0d7c7e] font-bold">→</span>
                    <span>Try a different browser (Chrome or Firefox work best)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#0d7c7e] font-bold">→</span>
                    <span>Check that your internet connection is active</span>
                  </li>
                  <li className="ml-0 mt-3 text-[0.9rem] font-semibold text-[#5a6a82] dark:text-[#94a3b8] mb-2">If the video is from an external source:</li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>YouTube embed → Try opening it directly on YouTube</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>Loom video → Try opening the direct Loom link</span>
                  </li>
                  <li className="mt-3 flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#d97706] font-bold">⚠</span>
                    <span className="text-[#d97706]"><strong>Still stuck?</strong> Email me with your browser and device.</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>A link is broken or leads to a 404 page</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-5 space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#0d7c7e] font-bold">→</span>
                    <span>Copy the URL from the broken link and paste it into a new tab</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#0d7c7e] font-bold">→</span>
                    <span>Check for any extra spaces or characters in the address bar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#0d7c7e] font-bold">→</span>
                    <span>Go back to the home page and navigate from there</span>
                  </li>
                  <li className="mt-3 flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#d97706] font-bold">⚠</span>
                    <span className="text-[#d97706]"><strong>Still broken?</strong> Email me the URL of the broken link so I can fix it.</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>A form or submission won&apos;t go through</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-5 space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#0d7c7e] font-bold">→</span>
                    <span>Make sure all required fields are filled in (look for red borders or asterisks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#0d7c7e] font-bold">→</span>
                    <span>Try refreshing the page and re-entering your response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#0d7c7e] font-bold">→</span>
                    <span>Try a different browser</span>
                  </li>
                  <li className="ml-0 mt-3 text-[0.9rem] font-semibold text-[#5a6a82] dark:text-[#94a3b8] mb-2">Network issues:</li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>If you&apos;re on a school or work network, try your personal wi-fi (some networks block form submissions)</span>
                  </li>
                  <li className="mt-3 flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#d97706] font-bold">⚠</span>
                    <span className="text-[#d97706]"><strong>Backup option:</strong> Email your completed response directly to me.</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>The site looks broken on my phone</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-5 space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#0d7c7e] font-bold">→</span>
                    <span>Make sure you&apos;re using an up-to-date browser (Chrome or Safari on mobile)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#0d7c7e] font-bold">→</span>
                    <span>Try rotating your phone to landscape mode for wider tables or content</span>
                  </li>
                  <li className="ml-0 mt-3 text-[0.9rem] font-semibold text-[#5a6a82] dark:text-[#94a3b8] mb-2">Display adjustments:</li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>If text is very small, use your browser&apos;s zoom feature</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>Clear your browser cache: <strong>Settings → Browser → Clear Cache</strong></span>
                  </li>
                  <li className="mt-3 flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#d97706] font-bold">⚠</span>
                    <span className="text-[#d97706]"><strong>Still broken?</strong> Email me and describe exactly what looks wrong. Screenshot if possible.</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>I can&apos;t download or open a template file</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-5 space-y-2 list-none">
                  <li className="ml-0 text-[0.9rem] font-semibold text-[#5a6a82] dark:text-[#94a3b8] mb-2">For direct downloads:</li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>Right-click the download link → choose &ldquo;Save link as...&rdquo;</span>
                  </li>
                  <li className="ml-0 mt-3 text-[0.9rem] font-semibold text-[#5a6a82] dark:text-[#94a3b8] mb-2">For Google Doc links:</li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">→</span>
                    <span>Make sure you&apos;re signed into a Google account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">→</span>
                    <span>Click &ldquo;Make a copy&rdquo;</span>
                  </li>
                  <li className="ml-0 mt-3 text-[0.9rem] font-semibold text-[#5a6a82] dark:text-[#94a3b8] mb-2">If you don&apos;t have Word:</li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>Google Docs opens .docx files for free</span>
                  </li>
                  <li className="mt-3 flex items-start gap-2">
                    <span className="flex-shrink-0 text-[#d97706] font-bold">⚠</span>
                    <span className="text-[#d97706]"><strong>Still can&apos;t access it?</strong> Email me and I&apos;ll send you the file directly.</span>
                  </li>
                </ul>
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
                ["Chrome (desktop & mobile)", "✅ Fully supported", "Recommended"],
                ["Firefox (desktop & mobile)", "✅ Fully supported", "None"],
                ["Safari (Mac & iPhone)", "✅ Fully supported", "None"],
                ["Edge", "✅ Fully supported", "None"],
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
        </FadeIn>

        {/* Privacy Policies */}
        <FadeIn delay={0.3}>
        <div className="content-block p-7 mb-5">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">
            Privacy &amp; Data
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Tool Privacy Policies
          </h2>
          <p className="text-[0.9rem] text-[#5a6a82] dark:text-[#94a3b8] mb-3">
            This course uses five external tools. Links to each tool&apos;s official privacy policy are below.
          </p>
          <ul className="ml-5 leading-[2]">
            {[
              { name: "GitHub Pages", url: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" },
              { name: "Zoom", url: "https://explore.zoom.us/en/privacy/" },
              { name: "Canva", url: "https://www.canva.com/policies/privacy-policy/" },
              { name: "Google Forms", url: "https://policies.google.com/privacy" },
              { name: "ElevenLabs", url: "https://elevenlabs.io/privacy" },
            ].map(({ name, url }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0d7c7e] font-semibold hover:underline"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </FadeIn>

        {/* Contact */}
        <FadeIn delay={0.4}>
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
            <a href="mailto:khat03@ad.unc.edu" className="text-[#0d7c7e] font-bold hover:underline">
              khat03@ad.unc.edu
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

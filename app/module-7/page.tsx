import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { ModuleStepper } from "@/components/ModuleStepper";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Module 7: Emotional Resilience | Alum's Declassified",
};

export default function Module7Page() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 7: Emotional Resilience" },
        ]}
      />

      <ModuleStepper currentStep={7} />

      <section className="bg-[#1b2537] text-white py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#7ec8ca] mb-2">
            Week 7 · Module 7
          </p>
          <h1
            className="text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold mb-3 tracking-[-0.025em] leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Emotional Resilience
          </h1>
          <p className="text-[#b8c5d6] text-[1rem] max-w-[640px] mb-5 leading-[1.6]">
            This one is different. Every other module gave you information you could look up. This one is about something that does not have a Wikipedia page: what it actually feels like to be first.
          </p>
          <div className="flex flex-wrap gap-4 text-[0.88rem]">
            <span className="bg-white/10 rounded-full px-4 py-[6px]">⏱ <strong>~45 minutes</strong></span>
            <span className="bg-white/10 rounded-full px-4 py-[6px]">💙 <strong>Assessment:</strong> Self-Care Plan + Reflection Essay</span>
            <span className="bg-white/10 rounded-full px-4 py-[6px]">🏆 <strong>75 points</strong></span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div>
            {/* Crisis Banner */}
            <div className="bg-[#fff8f0] border-l-4 border-l-[#c2680a] rounded-r-[5px] py-[13px] px-[18px] mb-5">
              <p className="m-0 text-[0.9rem]">
                📞 <strong>If you are in crisis right now:</strong> Call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline). Text <strong>HOME</strong> to <strong>741741</strong> (Crisis Text Line). Your campus counseling center also offers crisis walk-in hours — check their website.
              </p>
            </div>

            {/* Objectives */}
            <FadeIn delay={0}>
            <div id="objectives" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">
                Learning Objectives
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                By the End of This Module, You Will Be Able To:
              </h2>
              <ol className="ml-5 space-y-0" style={{ lineHeight: "2.1" }}>
                <li>Define imposter syndrome and describe at least two strategies for managing it during your first semester.</li>
                <li>Explain what code-switching is and articulate its emotional weight without framing it as a problem to be solved.</li>
                <li>Identify at least three concrete strategies for coping with homesickness and building belonging over time.</li>
                <li>Distinguish between normal college stress and signs that it is time to reach out for professional support.</li>
              </ol>
            </div>
            </FadeIn>

            {/* Lesson */}
            <FadeIn delay={0.1}>
            <div id="lesson" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">
                Instructional Content
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Module 7 Lesson
              </h2>
              <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] mb-4">
                The lesson for this module covers imposter syndrome, code-switching, homesickness, the difference between stress and crisis, and when and how to use campus counseling.
              </p>
              <Link
                href="/lesson-7"
                className="inline-block bg-[#c2345a] hover:bg-[#a01e40] text-white font-semibold text-[0.88rem] px-5 py-[9px] rounded-[6px] transition-colors"
              >
                Read the Lesson →
              </Link>

              <div className="mt-6">
                <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3">🧠 Normal Stress vs. When to Reach Out</h4>
                <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] min-h-[180px] flex flex-col items-center justify-center text-center">
                  🖼 <strong>Embed your Canva infographic here</strong>
                  <br />
                  <small>
                    Two-column: &ldquo;Normal College Stress&rdquo; vs. &ldquo;Time to Reach Out&rdquo;
                    <br />
                    Save as <code>images/module7-infographic.png</code>, then replace with:
                    <br />
                    <code>{`<img src="images/module7-infographic.png" alt="Normal stress vs. when to seek support" style="width:100%; border-radius:8px;" />`}</code>
                  </small>
                </div>
                <p className="text-[0.82rem] text-[#8d9db5] dark:text-[#64748b] mt-2">Normal college stress vs. signs it&apos;s time to reach out for support.</p>
              </div>
            </div>
            </FadeIn>

            {/* Activity */}
            <FadeIn delay={0.2}>
            <div id="activity" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fef3e2] text-[#c2680a]">
                Learning Activity
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Activity: Write a Letter to Future You
              </h2>
              <p className="text-[0.92rem] mb-3">Write a letter addressed to yourself at the end of your first college semester. This is not an assignment anyone else will read unless you choose to share it. It is for you.</p>
              <p className="text-[0.92rem] mb-3">In your letter, address all four of the following:</p>
              <ol className="ml-5 space-y-2 text-[0.92rem]">
                <li><strong>One thing you are scared of going into this semester</strong> — be specific. Not &ldquo;I am scared of failing&rdquo; but what specifically worries you: a particular subject, a social situation, a financial concern, something you have to figure out alone for the first time.</li>
                <li><strong>One thing you are proud of or excited about</strong> — something real that you are bringing with you. A skill, a value, a person, a reason you are doing this.</li>
                <li><strong>One piece of advice from this course that you want to remember</strong> — not a summary, but the one thing you do not want to lose track of by October.</li>
                <li><strong>One question you hope to have answered by the end of the semester</strong> — something you are still genuinely unsure about.</li>
              </ol>
              <p className="text-[0.92rem] mt-3">You can write this in a notes app, a document, or by hand. If you want to receive it back at the end of the semester, use the free tool below.</p>
              <div className="mt-4">
                <a
                  href="https://www.futureme.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-[#1b2537] text-[#1b2537] hover:bg-[#1b2537] hover:text-white font-semibold text-[0.88rem] px-5 py-[9px] rounded-[6px] transition-colors"
                >
                  Send to Future Me (FutureMe.org — free) →
                </a>
              </div>
              <p className="text-[0.82rem] text-[#8d9db5] dark:text-[#64748b] mt-3">FutureMe lets you write a letter and schedule it to be delivered to your own email on a future date. No account required. Your letter is private.</p>
            </div>
            </FadeIn>

            {/* Assessment */}
            <FadeIn delay={0.3}>
            <div id="assessment" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">
                Assessment
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Self-Care Plan + Reflection Essay — Assignment 7 (75 pts)
              </h2>
              <p className="text-[0.92rem] mb-4">Complete a two-part submission: a personal self-care plan and a 400–600 word reflection essay.</p>

              <div className="bg-[#f2f4f7] rounded-[6px] p-4 mb-4 text-[0.92rem]">
                <p className="font-bold mb-2">Part 1 — Self-Care Plan:</p>
                <ul className="ml-5 space-y-1">
                  <li>Three specific coping strategies you will use when things get hard (not vague — describe what you will actually do)</li>
                  <li>One campus support resource you have looked up — name, location, how to contact</li>
                  <li>One person in your life you can contact when things get hard — name and relationship only</li>
                </ul>
              </div>

              <div className="bg-[#f2f4f7] rounded-[6px] p-4 mb-4 text-[0.92rem]">
                <p className="font-bold mb-2">Part 2 — Reflection Essay Prompt (400–600 words):</p>
                <p>What are you most worried about going into your first college semester — and what do you already have going for you that will help you handle it? Address at least one specific concern from this module and connect it to at least one concrete strategy or resource. The rubric rewards specificity and honest engagement, not a particular emotional tone.</p>
              </div>

              <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-[1.4rem_1.5rem] text-[0.92rem]">
                <strong>Submission:</strong>
                <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-4 text-center mt-3">
                  📝 Create a Google Form with both parts, then replace with:
                  <br />
                  <code className="text-[0.82rem]">{`<a href="YOUR_GOOGLE_FORM_LINK" target="_blank">Submit Self-Care Plan + Reflection Essay →</a>`}</code>
                </div>
                <p className="mt-3 text-[0.85rem] text-[#8d9db5]">Rubric: Exemplary = specific coping strategies, real resource with contact info, essay addresses both halves with honest detail and ties to module content. Proficient = all parts complete with relevant specifics. Emerging = vague or missing parts. Incomplete = missing.</p>
              </div>
            </div>
            </FadeIn>

            {/* Model Response */}
            <FadeIn delay={0.4}>
            <div id="model" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">
                Model Response
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Example Reflection Essay — See What Proficient Looks Like
              </h2>
              <p className="font-bold text-[0.92rem] mb-3">Example Reflection Essay — a student named Alex:</p>
              <blockquote className="border-l-[3px] border-l-[#0d7c7e] pl-4 my-4 text-[#2e3f5c] dark:text-[#94a3b8] space-y-3 text-[0.92rem]">
                <p>The thing I am most worried about going into my first semester is not the coursework. It is the feeling I already have when I walk into certain rooms: that everyone else knows something I do not. I noticed it at orientation when other students were talking to professors like it was easy, asking questions I would not have known to ask. I felt like there was a whole set of rules for how college works that they already understood and I was still trying to learn. This course named it as imposter syndrome, and that helped — having a word for it made it feel less like a personal deficiency and more like something documented and common. But I am still worried that the feeling will get worse once classes start and the stakes feel higher.</p>
                <p>What I have going for me is harder to see but I know it is there. I have worked a part-time job since I was sixteen and managed my own schedule without much supervision. I know how to ask for help when I actually need it — I just have to learn who to ask here. I also know why I am doing this, which I think matters more than it sounds: I am the first in my family to go to college, and that feels like both a weight and a reason. On the days when it feels like a weight, I want to remember that it is also a reason.</p>
                <p>One strategy I am committing to: I am going to visit my school&apos;s first-gen student office in the first two weeks. I looked it up and my campus has one. I want to know it exists before I need it.</p>
              </blockquote>
              <p className="text-[0.82rem] text-[#8d9db5]">Proficient: addresses both halves of the prompt with specific, honest detail. One concern is directly tied to module content (imposter syndrome). One strength is named specifically and feels genuine. The plan at the end is concrete.</p>
            </div>
            </FadeIn>

            {/* Tools */}
            <FadeIn delay={0.5}>
            <div id="tools" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#f2f4f7] text-[#5a6a82]">
                Tools Used in This Module
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Technological Tools
              </h2>
              <table className="w-full text-[0.875rem] border-collapse">
                <thead>
                  <tr>
                    {["Tool", "Purpose", "Privacy Policy", "Cost"].map((h) => (
                      <th key={h} className="bg-[#f2f4f7] dark:bg-[#162032] text-[#5a6a82] dark:text-[#94a3b8] px-[14px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb] dark:border-[#334155]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Google Forms", "Self-care plan and reflection submission", "https://policies.google.com/privacy", "Free"],
                    ["FutureMe.org", "Optional: send letter to future self via email", "https://www.futureme.org/privacy", "Free"],
                    ["Canva", "Normal stress vs. seek help comparison infographic", "https://www.canva.com/policies/privacy-policy/", "Free"],
                  ].map(([tool, purpose, privacy, cost]) => (
                    <tr key={tool} className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]">
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">{tool}</td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">{purpose}</td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]"><a href={privacy} target="_blank" rel="noopener noreferrer" className="text-[#0d7c7e] hover:underline">View</a></td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </FadeIn>

            {/* Completion Callout */}
            <div className="bg-[#e0f4f4] rounded-[10px] p-7 mb-5 border border-[#b2e3e3] text-center">
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                🎓 You made it through all 7 modules.
              </h2>
              <p className="text-[#2e3f5c] mt-2 mb-4">Complete the final portfolio (Assignment 9) to receive your certificate of completion.</p>
              <Link
                href="/assignments#a9"
                className="inline-block bg-[#c2345a] hover:bg-[#a01e40] text-white font-semibold text-[0.88rem] px-5 py-[9px] rounded-[6px] transition-colors"
              >
                View Final Portfolio Assignment →
              </Link>
            </div>

            {/* Prev/Next Nav */}
            <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Previous</p>
                <Link href="/module-6" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 6: Career Preparation</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Final Step</p>
                <Link href="/assignments#a9" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">College Readiness Portfolio</Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-[74px]">
              <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-6 mb-4 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">In This Module</p>
                <ul className="space-y-[6px] text-[0.875rem]">
                  {[
                    { href: "#objectives", label: "📌 Learning Objectives" },
                    { href: "#lesson", label: "📖 Lesson" },
                    { href: "#activity", label: "✉️ Activity" },
                    { href: "#assessment", label: "💙 Assessment" },
                    { href: "#model", label: "💡 Model Response" },
                    { href: "#tools", label: "🛠 Tools" },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <a href={href} className="text-[#0d7c7e] hover:underline">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#fef3e2] rounded-[10px] p-6 mb-4 border border-[#fcd69a]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#c2680a] mb-2">Assignment Due</p>
                <p className="font-bold text-[#1b2537] dark:text-[#e2e8f0] text-[0.95rem] mb-1">Self-Care Plan + Reflection Essay · 75 pts</p>
                <p className="text-[0.82rem] text-[#8d9db5] mb-3">Three coping strategies, one resource, and a 400–600 word essay.</p>
                <Link href="/assignments#a7" className="text-[0.875rem] font-semibold text-[#0d7c7e] hover:underline">View full rubric →</Link>
              </div>

              <div className="bg-[#e0f4f4] rounded-[10px] p-6 mb-4 border border-[#b2e3e3]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#0d7c7e] mb-3">Course Progress</p>
                <div className="flex flex-col gap-[6px] text-[0.82rem]">
                  <div className="flex items-center gap-2 text-[#8d9db5] dark:text-[#64748b]"><span>✓</span><span>Modules 1–6</span></div>
                  <div className="flex items-center gap-2"><span className="text-[#0d7c7e] font-bold">●</span><span className="font-semibold text-[#1b2537] dark:text-[#e2e8f0]">Module 7 — Final Module</span></div>
                  <div className="flex items-center gap-2 text-[#0d7c7e] font-semibold"><span>→</span><Link href="/assignments#a9" className="text-[#0d7c7e] hover:underline">Final Portfolio</Link></div>
                </div>
              </div>

              <div className="bg-white rounded-[10px] p-6 border-l-[3px] border-l-[#c2680a] border border-[#dde2eb] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">Crisis Resources</p>
                <p className="text-[0.83rem] text-[#1b2537]">
                  📞 <strong>988</strong> — Suicide &amp; Crisis Lifeline<br />
                  📱 Text <strong>HOME</strong> to <strong>741741</strong><br />
                  🏥 Campus CAPS — check your school&apos;s website
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

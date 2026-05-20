import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { ModuleStepper } from "@/components/ModuleStepper";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Module 4: Essential Life Skills | Alum's Declassified",
};

export default function Module4Page() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 4: Essential Life Skills" },
        ]}
      />

      <ModuleStepper currentStep={4} />

      <section className="bg-[#1b2537] text-white py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#7ec8ca] mb-2">
            Week 4 · Module 4
          </p>
          <h1
            className="text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold mb-3 tracking-[-0.025em] leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Essential Life Skills
          </h1>
          <p className="text-[#b8c5d6] text-[1rem] max-w-[640px] mb-5 leading-[1.6]">
            Grocery shopping, laundry, health insurance, leases, and managing adult life without a parent doing it for you.
          </p>
          <div className="flex flex-wrap gap-4 text-[0.88rem]">
            <span className="bg-white/10 rounded-full px-4 py-[6px]">⏱ <strong>~45 minutes</strong></span>
            <span className="bg-white/10 rounded-full px-4 py-[6px]">✅ <strong>Assessment:</strong> Life Skills Inventory</span>
            <span className="bg-white/10 rounded-full px-4 py-[6px]">🏆 <strong>50 points</strong></span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div>
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
                <li>Plan and execute a weekly grocery run on a student budget using a list-based strategy.</li>
                <li>Complete a load of laundry correctly, including sorting, reading care labels, and drying safely.</li>
                <li>Interpret the key fields on a health insurance card, including copay, deductible, and in-network.</li>
                <li>Identify at least three critical items to check before signing a lease or rental agreement.</li>
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
                Module 4 Lesson
              </h2>
              <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] mb-4">
                The lesson for this module covers grocery shopping on a budget, laundry basics, how to read a health insurance card, and what to check before signing a lease.
              </p>
              <Link
                href="/lesson-4"
                className="inline-block bg-[#c2345a] hover:bg-[#a01e40] text-white font-semibold text-[0.88rem] px-5 py-[9px] rounded-[6px] transition-colors"
              >
                Read the Lesson →
              </Link>
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
                Activity: Plan a $30 Grocery Run
              </h2>
              <p className="text-[0.92rem] mb-3">Practice the grocery principles from this module before your first week on campus.</p>
              <ol className="ml-5 space-y-2 text-[0.92rem]">
                <li>Choose 5 dinners you could make with basic ingredients (rice, pasta, eggs, canned beans, frozen vegetables).</li>
                <li>Write out a grocery list for those 5 meals with estimated prices from a real store (Walmart, Aldi, or Kroger).</li>
                <li>Check whether your total is under $30. If not, swap one item for a cheaper alternative and note what you swapped.</li>
                <li>Identify one ingredient that appears in multiple meals — this is the principle of buying ingredients, not single-use items.</li>
              </ol>
              <p className="text-[0.85rem] text-[#8d9db5] dark:text-[#64748b] mt-4">💡 <strong>Tip:</strong> Rice and eggs are two of the most versatile and affordable grocery items.</p>
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
                Life Skills Inventory — 50 Points
              </h2>
              <p className="text-[0.92rem] mb-4">
                Complete a self-assessment checklist, then write a 300–500 word reflection answering three questions: which skills you feel confident about and why, which skills you are uncertain about, and one specific plan to improve an uncertain skill before your first semester.
              </p>
              <div className="my-5">
                <p className="font-bold text-[0.9rem] mb-3">📋 How Your Work Will Be Evaluated:</p>
                <table className="w-full text-[0.875rem] border-collapse">
                  <thead>
                    <tr>
                      {["Level", "What it looks like"].map((h) => (
                        <th key={h} className="bg-[#f2f4f7] dark:bg-[#162032] text-[#5a6a82] dark:text-[#94a3b8] px-[14px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb] dark:border-[#334155]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]">
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]"><strong className="text-[#16723d]">Exemplary</strong></td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">Reflection is honest and specific. The uncertain skill section names a real gap and describes concrete, time-bound steps. Response connects clearly to your actual circumstances.</td>
                    </tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]">
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]"><strong className="text-[#1a56a4]">Proficient</strong></td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">All three questions addressed. Plan for an uncertain skill is specific enough to act on. Meets completion standard.</td>
                    </tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]">
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]"><strong className="text-[#c2680a]">Emerging</strong></td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">One or more questions not addressed, or the plan is too vague. Revision encouraged.</td>
                    </tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]">
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]"><strong className="text-[#b0264a]">Incomplete</strong></td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">Missing or off-topic. Must be resubmitted.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-4 text-center text-[0.92rem]">
                📝 Create a Google Form, then replace this with:
                <br />
                <code className="text-[0.82rem]">{`<a href="YOUR_GOOGLE_FORM_LINK" target="_blank">Complete Checklist + Reflection →</a>`}</code>
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
                Example Reflection — See What Proficient Looks Like
              </h2>
              <p className="font-bold text-[0.92rem] mb-3">Example Reflection — a student named Alex:</p>
              <blockquote className="border-l-[3px] border-l-[#0d7c7e] pl-4 my-4 text-[#2e3f5c] dark:text-[#94a3b8] space-y-3 text-[0.92rem]">
                <p>I feel confident about grocery shopping and cooking. Growing up, I helped with dinner most nights because both of my parents worked late shifts, so I know how to make a few basic meals and I understand that buying rice and beans in bulk is cheaper than buying pre-made food. I also feel okay about my weekly schedule — I am used to managing my own time because my high school had open campus.</p>
                <p>Where I am genuinely uncertain is health insurance. I have never had to use it myself before — my mom always handled doctor&apos;s appointments, and I did not know what a copay was until this module. The part that confuses me is how to know if a doctor is &ldquo;in-network&rdquo; before I go. I do not want to show up somewhere and get a bill I did not expect.</p>
                <p>My plan for getting better at this: I am going to look up my school&apos;s student health center this week and confirm it accepts my insurance. I will also call the number on the back of my insurance card and ask them to explain what in-network means and how to find in-network providers near campus. I want to do this before I arrive so I am not figuring it out while I am sick.</p>
              </blockquote>
              <p className="text-[0.82rem] text-[#8d9db5]">Proficient: honest, specific, addresses all three questions, and the plan names real steps the student can actually take.</p>
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
                    ["Google Forms", "Life skills checklist and reflection submission", "https://policies.google.com/privacy"],
                    ["Canva", "Health insurance card infographic", "https://www.canva.com/policies/privacy-policy/"],
                  ].map(([tool, purpose, privacy]) => (
                    <tr key={tool} className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]">
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">{tool}</td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">{purpose}</td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]"><a href={privacy} target="_blank" rel="noopener noreferrer" className="text-[#0d7c7e] hover:underline">View</a></td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">Free</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </FadeIn>

            {/* Prev/Next Nav */}
            <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Previous</p>
                <Link href="/module-3" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 3: Financial Literacy</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Next →</p>
                <Link href="/module-5" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 5: Academic Success</Link>
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
                    { href: "#activity", label: "🛒 Activity: $30 Grocery Run" },
                    { href: "#assessment", label: "✏️ Assessment" },
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
                <p className="font-bold text-[#1b2537] dark:text-[#e2e8f0] text-[0.95rem] mb-1">Life Skills Inventory · 50 pts</p>
                <p className="text-[0.82rem] text-[#8d9db5] mb-3">Checklist + 300–500 word reflection on your real skill gaps.</p>
                <Link href="/assignments#a4" className="text-[0.875rem] font-semibold text-[#0d7c7e] hover:underline">View full assignment →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

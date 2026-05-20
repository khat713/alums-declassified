import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lesson 7: Emotional Resilience | Alum's Declassified",
};

export default function Lesson7Page() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 7: Emotional Resilience", href: "/module-7" },
          { label: "Lesson" },
        ]}
      />

      <section className="bg-[#1b2537] text-white py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#7ec8ca] mb-2">
            Week 7 · Module 7
          </p>
          <h1
            className="text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold mb-3 tracking-[-0.025em] leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lesson: Emotional Resilience
          </h1>
          <p className="text-[#b8c5d6] text-[1rem] max-w-[640px] leading-[1.6]">
            This one is different. Every other module gave you information you could look up. This one is about something that does not have a Wikipedia page: what it actually feels like to be first.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div>
            <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">
                Instructional Content
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Module 7 Lesson
              </h2>

              {/* Crisis banner */}
              <div className="bg-[#fff3cd] border-l-4 border-l-[#ffc107] p-[0.8rem_1rem] rounded-[4px] mb-5 text-[0.9rem]">
                📞 <strong>If you are in crisis right now:</strong> Call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline). Text HOME to <strong>741741</strong> (Crisis Text Line). Your campus counseling center also offers crisis walk-in hours — check their website.
              </div>

              <h3 className="text-[1.15rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                This One Is Different.
              </h3>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">Every other module in this course gave you information you could look up somewhere else. This one is about something that does not have a Wikipedia page: what it actually feels like to be the first person in your family to navigate a place that was not built with you in mind. You are going to feel things in your first college semester that are hard to name. This module is an attempt to name them — and to tell you that they are normal, they are not permanent, and there is help.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">🎭 Imposter Syndrome</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Imposter syndrome is the persistent feeling that you do not belong, that you are not as capable as the people around you, and that it is only a matter of time before someone figures that out. It is extremely common among first-generation students because you are often in spaces that were historically designed for people whose families have been going to college for generations. The unspoken fluency they have — how to talk to professors, how to ask for help, what office hours are for — can make it feel like everyone else got a manual you did not receive.</p>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">You did not get the manual. That is what this course is. And the students sitting next to you who look like they know what they are doing are often performing confidence more than feeling it. Research consistently shows that imposter syndrome is more prevalent among high-achieving students — people who care, who are pushing themselves, who belong.</p>
              <p className="text-[0.92rem] mb-2 leading-[1.7]"><strong>What helps:</strong></p>
              <ul className="ml-5 mb-4 space-y-2 text-[0.92rem]">
                <li>Talking to someone who has been through it — a first-gen student office, a mentor, a counselor, or a peer.</li>
                <li>Writing down wins when they happen. Imposter syndrome tells you those wins were luck. The evidence says otherwise.</li>
                <li>Recognizing the difference between &ldquo;I do not know how to do this yet&rdquo; and &ldquo;I cannot do this.&rdquo;</li>
              </ul>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">🔀 Code-Switching</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Code-switching is the practice of adjusting how you communicate — your language, your tone, your mannerisms — depending on the context and the audience. Most first-gen students do it naturally: you talk one way with your family and a different way in a professor&apos;s office. This is a skill, not a betrayal.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">The emotional weight of it is real, though. Feeling like you cannot be fully yourself in academic spaces — or like the version of yourself that belongs at home does not belong on campus — is exhausting and isolating. You do not have to resolve this before your first semester. But naming it helps.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">🏠 Homesickness</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Homesickness is not weakness. It is the natural response to leaving the people and places that make you feel safe. It is also not exclusive to people who move far away — you can commute from home and still experience a version of it as your world expands.</p>
              <p className="text-[0.92rem] mb-2 leading-[1.7]"><strong>Things that actually help:</strong></p>
              <ul className="ml-5 mb-4 space-y-2 text-[0.92rem]">
                <li>Create one new routine that is yours on campus — a walk, a coffee spot, a study location. Familiarity builds belonging over time.</li>
                <li>Stay in contact with home without making it your only anchor. A weekly call is healthier than checking in every few hours.</li>
                <li>Give it time. Most students report that the acute phase of homesickness improves significantly after the first four to six weeks once routines settle.</li>
              </ul>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">🧠 When Stress Becomes Something More</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Stress is normal. College is hard, and feeling overwhelmed at times is expected. The difference between stress and a mental health crisis is duration, severity, and interference with daily life. If you are consistently unable to sleep, eat, or function — if you are feeling hopeless or disconnected for more than a few days — that is a signal to reach out, not to push through.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">Your campus counseling center (often called CAPS) offers free or low-cost mental health support. Making an intake appointment early in the semester — before things are urgent — is the smartest move. You do not have to be in crisis to go.</p>

              <div className="mt-6">
                <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3">🧠 Normal Stress vs. When to Reach Out</h4>
                <img src="/images/module7-infographic.png" alt="Normal college stress vs. signs it's time to seek support" className="w-full rounded-[8px] mt-2" />
                <p className="text-[0.82rem] text-[#8d9db5] dark:text-[#64748b] mt-2">Normal college stress vs. signs it&apos;s time to reach out for support.</p>
              </div>
            </div>

            {/* Prev/Next Nav */}
            <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Previous Lesson</p>
                <Link href="/lesson-6" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Lesson 6: Career Preparation</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">All Modules →</p>
                <Link href="/modules" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">View All Modules</Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-[74px]">
              <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-6 mb-4 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">This Lesson</p>
                <ul className="space-y-[6px] text-[0.875rem]">
                  <li><Link href="/module-7" className="text-[#0d7c7e] hover:underline">← Back to Module 7</Link></li>
                  <li><Link href="/lesson-6" className="text-[#0d7c7e] hover:underline">← Lesson 6</Link></li>
                  <li><Link href="/modules" className="text-[#0d7c7e] hover:underline">All Modules →</Link></li>
                </ul>
              </div>

              <div className="bg-[#fef3e2] rounded-[10px] p-6 mb-4 border border-[#fcd69a]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#c2680a] mb-2">Ready to continue?</p>
                <p className="text-[0.85rem] text-[#8d9db5] dark:text-[#64748b] mb-3">Head back to Module 7 to complete the activity and assessment.</p>
                <Link href="/module-7#activity" className="text-[0.875rem] font-semibold text-[#0d7c7e] hover:underline">Go to Activity →</Link>
              </div>

              <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-6 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">Crisis Resources</p>
                <ul className="space-y-[6px] text-[0.875rem]">
                  <li>📞 <strong>988</strong> — Suicide &amp; Crisis Lifeline</li>
                  <li>📱 Text <strong>HOME</strong> to 741741</li>
                  <li>🏥 Campus CAPS — check your school&apos;s website</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

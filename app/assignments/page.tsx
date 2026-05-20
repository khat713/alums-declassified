import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assignments | Alum's Declassified",
};

export default function AssignmentsPage() {
  return (
    <main>
      <section className="bg-white border-b border-[#dde2eb] py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <h1
            className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-[#1b2537] mb-[0.4rem] tracking-[-0.025em] leading-[1.2]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Assignments
          </h1>
          <p className="text-[#5a6a82] text-[0.97rem] m-0 max-w-[580px]">
            Nine assignments across seven modules. Each one produces something
            you&apos;ll actually use.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        {/* Overview Table */}
        <div className="bg-white rounded-[10px] p-7 mb-5 border border-[#dde2eb] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">
            Overview
          </span>
          <h2
            className="text-[1.1rem] font-bold text-[#1b2537] mb-2 pb-[0.65rem] border-b border-[#edf0f4] tracking-[-0.015em] leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            All Assignments at a Glance
          </h2>
          <p className="text-[#5a6a82] text-[0.9rem] mb-4">
            Total: 700 points. Complete all assignments at Proficient or above
            to receive a certificate of completion.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[0.875rem]">
              <thead>
                <tr>
                  {["#", "Assignment", "Points", "Format", "Module"].map((h) => (
                    <th key={h} className="bg-[#f2f4f7] text-[#5a6a82] px-[14px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { num: 1, name: "College Expectations Quiz", anchor: "#a1", pts: 50, fmt: "Quiz", mod: "Module 1", modHref: "/module-1" },
                  { num: 2, name: "Campus Resource Map", anchor: "#a2", pts: 75, fmt: "Applied task / template", mod: "Module 2", modHref: "/module-2" },
                  { num: 3, name: "Budget Worksheet", anchor: "#a3", pts: 75, fmt: "Spreadsheet / template", mod: "Module 3", modHref: "/module-3" },
                  { num: 4, name: "Life Skills Inventory", anchor: "#a4", pts: 50, fmt: "Written reflection", mod: "Module 4", modHref: "/module-4" },
                  { num: 5, name: "Study Plan", anchor: "#a5", pts: 75, fmt: "Schedule + rationale", mod: "Module 5", modHref: "/module-5" },
                  { num: 6, name: "Career Document Draft", anchor: "#a6", pts: 100, fmt: "Resume or LinkedIn profile", mod: "Module 6", modHref: "/module-6" },
                  { num: 7, name: "Reflection Essay", anchor: "#a7", pts: 75, fmt: "Written essay", mod: "Module 7", modHref: "/module-7" },
                  { num: 8, name: "Midpoint Check-In Discussion", anchor: "#a8", pts: 50, fmt: "Discussion post + reply", mod: "After Module 3 or 4", modHref: null },
                  { num: 9, name: "College Readiness Portfolio", anchor: "#a9", pts: 150, fmt: "Portfolio + recorded intro", mod: "Final — all modules", modHref: null },
                ].map((row) => (
                  <tr key={row.num} className="hover:bg-[#fafbfd]">
                    <td className="px-[14px] py-[11px] border-b border-[#edf0f4] align-top">{row.num}</td>
                    <td className="px-[14px] py-[11px] border-b border-[#edf0f4] align-top">
                      <a href={row.anchor} className="text-[#0d7c7e] hover:underline">{row.name}</a>
                    </td>
                    <td className="px-[14px] py-[11px] border-b border-[#edf0f4] align-top">{row.pts}</td>
                    <td className="px-[14px] py-[11px] border-b border-[#edf0f4] align-top">{row.fmt}</td>
                    <td className="px-[14px] py-[11px] border-b border-[#edf0f4] align-top">
                      {row.modHref ? (
                        <Link href={row.modHref} className="text-[#0d7c7e] hover:underline">{row.mod}</Link>
                      ) : row.mod}
                    </td>
                  </tr>
                ))}
                <tr className="bg-[#f2f4f7]">
                  <td colSpan={2} className="px-[14px] py-[11px] align-top"><strong>Total</strong></td>
                  <td className="px-[14px] py-[11px] align-top"><strong>700</strong></td>
                  <td colSpan={2} className="px-[14px] py-[11px]"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Grading Scale */}
        <div className="bg-white rounded-[10px] p-7 mb-5 border border-[#dde2eb] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">
            Grading
          </span>
          <h2
            className="text-[1.1rem] font-bold text-[#1b2537] mb-4 pb-[0.65rem] border-b border-[#edf0f4] tracking-[-0.015em] leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Completion Levels
          </h2>
          <p>This is a non-credit course. Completion rather than letter grades is the primary measure.</p>
          <table className="w-full border-collapse text-[0.875rem]">
            <thead>
              <tr>
                {["Level", "What it means"].map((h) => (
                  <th key={h} className="bg-[#f2f4f7] text-[#5a6a82] px-[14px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#fafbfd]">
                <td className="px-[14px] py-[11px] border-b border-[#edf0f4] align-top"><strong className="text-[#16723d]">Exemplary</strong></td>
                <td className="px-[14px] py-[11px] border-b border-[#edf0f4] align-top">Deep engagement with the material, applied directly to your own situation, goes beyond surface-level completion.</td>
              </tr>
              <tr className="hover:bg-[#fafbfd]">
                <td className="px-[14px] py-[11px] border-b border-[#edf0f4] align-top"><strong className="text-[#1a56a4]">Proficient</strong></td>
                <td className="px-[14px] py-[11px] border-b border-[#edf0f4] align-top">Addresses the prompt completely and shows clear understanding. Meets the standard for course completion.</td>
              </tr>
              <tr className="hover:bg-[#fafbfd]">
                <td className="px-[14px] py-[11px] border-b border-[#edf0f4] align-top"><strong className="text-[#c2680a]">Emerging</strong></td>
                <td className="px-[14px] py-[11px] border-b border-[#edf0f4] align-top">Incomplete, vague, or doesn&apos;t directly engage with the module content. Revision encouraged.</td>
              </tr>
              <tr className="hover:bg-[#fafbfd]">
                <td className="px-[14px] py-[11px] border-b border-[#edf0f4] align-top"><strong className="text-[#b0264a]">Incomplete</strong></td>
                <td className="px-[14px] py-[11px] border-b border-[#edf0f4] align-top">Missing, off-topic, or no meaningful engagement. Must be resubmitted before advancing.</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-[0.9rem] text-[#5a6a82]">
            Assignments scored Emerging or Incomplete may be revised and
            resubmitted once. The revised grade replaces the original. No
            permission needed — just resubmit with a note explaining what you
            changed and why.
          </p>
        </div>

        {/* Individual Assignments */}
        <div id="a1" className="bg-white rounded-[10px] p-7 mb-5 border border-[#dde2eb] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">
            Assignment 1 · 50 pts
          </span>
          <h2 className="text-[1.1rem] font-bold text-[#1b2537] mb-4 pb-[0.65rem] border-b border-[#edf0f4] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>College Expectations Quiz</h2>
          <p><strong>Format:</strong> Multiple-choice and short-answer quiz (20–25 questions) | Completed online</p>
          <p>Tests whether you can identify the unwritten rules and institutional norms covered in Module 1. Questions are scenario-based — not definitions, but situations you&apos;re likely to actually encounter. You can retake once if your first attempt is below Proficient.</p>
          <div className="flex gap-3 flex-wrap mt-3 items-center">
            <Link href="/module-1" className="bg-[#1b2537] text-white no-underline rounded-[5px] py-[7px] px-[18px] text-[0.83rem] font-bold inline-block hover:bg-[#0d7c7e] transition-all">Go to Module 1 →</Link>
            <span className="text-[0.88rem] text-[#5a6a82]">Complete Module 1 first, then return here for the quiz.</span>
          </div>
        </div>

        <div id="a2" className="bg-white rounded-[10px] p-7 mb-5 border border-[#dde2eb] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">Assignment 2 · 75 pts</span>
          <h2 className="text-[1.1rem] font-bold text-[#1b2537] mb-4 pb-[0.65rem] border-b border-[#edf0f4] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>Campus Resource Map</h2>
          <p><strong>Format:</strong> Completed template (Google Doc or Word) | 1–2 pages</p>
          <p>Identify at least six campus resources across three categories — academic support, financial resources, and health/wellbeing — specific to <em>your school</em>. For each resource: name, location, contact info, and one realistic scenario in which you would actually use it.</p>
          <div className="flex gap-3 flex-wrap mt-3"><Link href="/module-2" className="bg-[#1b2537] text-white no-underline rounded-[5px] py-[7px] px-[18px] text-[0.83rem] font-bold inline-block hover:bg-[#0d7c7e] transition-all">Go to Module 2 →</Link></div>
        </div>

        <div id="a3" className="bg-white rounded-[10px] p-7 mb-5 border border-[#dde2eb] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">Assignment 3 · 75 pts</span>
          <h2 className="text-[1.1rem] font-bold text-[#1b2537] mb-4 pb-[0.65rem] border-b border-[#edf0f4] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>Budget Worksheet</h2>
          <p><strong>Format:</strong> Completed spreadsheet or template | PDF, Google Sheet, or Word</p>
          <p>Build a monthly budget for your first semester using your school&apos;s actual cost of attendance and your financial aid information. Categorize each expense as fixed or variable, identify two areas where you could reduce spending, and complete a gap analysis.</p>
          <div className="flex gap-3 flex-wrap mt-3"><Link href="/module-3" className="bg-[#1b2537] text-white no-underline rounded-[5px] py-[7px] px-[18px] text-[0.83rem] font-bold inline-block hover:bg-[#0d7c7e] transition-all">Go to Module 3 →</Link></div>
        </div>

        <div id="a4" className="bg-white rounded-[10px] p-7 mb-5 border border-[#dde2eb] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">Assignment 4 · 50 pts</span>
          <h2 className="text-[1.1rem] font-bold text-[#1b2537] mb-4 pb-[0.65rem] border-b border-[#edf0f4] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>Life Skills Inventory</h2>
          <p><strong>Format:</strong> Written reflection | 300–500 words</p>
          <p>After completing Module 4, write a reflection answering three questions: Which skills do you feel confident about and why? Which are you uncertain about? Pick one uncertain skill and describe the specific steps you&apos;d take to get better at it before your first semester.</p>
          <div className="flex gap-3 flex-wrap mt-3"><Link href="/module-4" className="bg-[#1b2537] text-white no-underline rounded-[5px] py-[7px] px-[18px] text-[0.83rem] font-bold inline-block hover:bg-[#0d7c7e] transition-all">Go to Module 4 →</Link></div>
        </div>

        <div id="a5" className="bg-white rounded-[10px] p-7 mb-5 border border-[#dde2eb] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">Assignment 5 · 75 pts</span>
          <h2 className="text-[1.1rem] font-bold text-[#1b2537] mb-4 pb-[0.65rem] border-b border-[#edf0f4] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>Study Plan</h2>
          <p><strong>Format:</strong> Schedule template + written rationale | 1 schedule page + 150–250 words</p>
          <p>Build a realistic Week 1 study schedule for your first college semester — class times, study blocks, meals, sleep, and any work or family commitments. Then write a rationale explaining which study strategies from Module 5 you built into the schedule and why they work.</p>
          <div className="flex gap-3 flex-wrap mt-3"><Link href="/module-5" className="bg-[#1b2537] text-white no-underline rounded-[5px] py-[7px] px-[18px] text-[0.83rem] font-bold inline-block hover:bg-[#0d7c7e] transition-all">Go to Module 5 →</Link></div>
        </div>

        <div id="a6" className="bg-white rounded-[10px] p-7 mb-5 border border-[#dde2eb] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">Assignment 6 · 100 pts</span>
          <h2 className="text-[1.1rem] font-bold text-[#1b2537] mb-4 pb-[0.65rem] border-b border-[#edf0f4] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>Career Document Draft</h2>
          <p><strong>Format:</strong> Resume OR LinkedIn profile (4 sections minimum) | PDF or link</p>
          <p>Submit either a resume draft or a completed LinkedIn profile — whichever is more relevant to your goals right now. Also submit a 100–150 word note on one thing you&apos;re still unsure about and what your next step is. This is the highest-stakes individual assignment before the final project.</p>
          <div className="flex gap-3 flex-wrap mt-3"><Link href="/module-6" className="bg-[#1b2537] text-white no-underline rounded-[5px] py-[7px] px-[18px] text-[0.83rem] font-bold inline-block hover:bg-[#0d7c7e] transition-all">Go to Module 6 →</Link></div>
        </div>

        <div id="a7" className="bg-white rounded-[10px] p-7 mb-5 border border-[#dde2eb] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">Assignment 7 · 75 pts</span>
          <h2 className="text-[1.1rem] font-bold text-[#1b2537] mb-4 pb-[0.65rem] border-b border-[#edf0f4] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>Reflection Essay</h2>
          <p><strong>Format:</strong> Written essay | 400–600 words</p>
          <p>Prompt: What are you most worried about going into your first college semester — and what do you already have going for you that will help you handle it? Address at least one specific concern from Module 7 and connect it to at least one concrete strategy or resource.</p>
          <div className="flex gap-3 flex-wrap mt-3"><Link href="/module-7" className="bg-[#1b2537] text-white no-underline rounded-[5px] py-[7px] px-[18px] text-[0.83rem] font-bold inline-block hover:bg-[#0d7c7e] transition-all">Go to Module 7 →</Link></div>
        </div>

        <div id="a8" className="bg-white rounded-[10px] p-7 mb-5 border border-[#dde2eb] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">Assignment 8 · 50 pts</span>
          <h2 className="text-[1.1rem] font-bold text-[#1b2537] mb-4 pb-[0.65rem] border-b border-[#edf0f4] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>Midpoint Check-In Discussion Post</h2>
          <p><strong>Format:</strong> Discussion post + one reply to a peer | ~200 words per post</p>
          <p>Complete this after Module 3 or 4. Prompt: What is one thing you&apos;ve learned so far that surprised you, changed how you think about something, or that you wish you had known earlier? After posting, reply meaningfully to at least one peer&apos;s post.</p>
          <div className="mt-3">
            <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] text-[0.92rem] text-left">
              📬 <strong>Discussion thread link goes here</strong>
              <br />
              <small>Embed a Padlet, Google Form discussion, or link to your discussion platform.</small>
            </div>
          </div>
        </div>

        <div id="a9" className="bg-white rounded-[10px] p-7 mb-5 border border-[#dde2eb] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">Assignment 9 · 150 pts · Final</span>
          <h2 className="text-[1.1rem] font-bold text-[#1b2537] mb-4 pb-[0.65rem] border-b border-[#edf0f4] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>College Readiness Portfolio</h2>
          <p><strong>Format:</strong> Portfolio document (Google Doc, Word, or PDF) + 3–5 minute recorded introduction</p>
          <p>The final assignment brings together the most important work from all seven modules into a single document you&apos;ll actually keep and use. Seven sections — one per module — each containing a key takeaway, your completed assignment, and one action you took or plan to take.</p>
          <p>Also record a 3–5 minute video or audio introduction addressed to a first-gen student who is about to take this course next summer. Tell them what the course covers, which module was most useful, and one piece of advice. You can record on your phone.</p>
          <div className="mt-3">
            <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] text-[0.92rem] text-left">
              📎 <strong>Final portfolio template and submission link goes here</strong>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

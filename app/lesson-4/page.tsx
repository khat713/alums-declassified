import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lesson 4: Essential Life Skills | Alum's Declassified",
};

export default function Lesson4Page() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 4: Essential Life Skills", href: "/module-4" },
          { label: "Lesson" },
        ]}
      />

      <section className="bg-[#1b2537] text-white py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#7ec8ca] mb-2">
            Week 4 · Module 4
          </p>
          <h1
            className="text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold mb-3 tracking-[-0.025em] leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lesson: Essential Life Skills
          </h1>
          <p className="text-[#b8c5d6] text-[1rem] max-w-[640px] leading-[1.6]">
            Grocery shopping, laundry, health insurance, leases, and managing adult life without a parent doing it for you.
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
                Module 4 Lesson
              </h2>

              <h3 className="text-[1.15rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Nobody Handed You a Manual. Here It Is.
              </h3>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">College is often the first time you are fully responsible for your own daily life: your food, your laundry, your health, your finances, your schedule. Some of this you already know. Some of it you have never had to do before. This module covers the practical skills that do not show up in any course catalog but matter every single week.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">Grocery Shopping on a Budget</h4>
              <ul className="ml-5 mb-4 space-y-2 text-[0.92rem]">
                <li><strong>Make a list before you go.</strong> Grocery stores are designed to make you buy things you did not plan to buy.</li>
                <li><strong>Buy ingredients, not meals.</strong> A bag of rice, a dozen eggs, canned beans, and frozen vegetables will make six meals for the same cost as one pre-made dinner.</li>
                <li><strong>Generic brands are almost always identical to name brands.</strong> You are paying for the label.</li>
                <li><strong>Shop once a week with a plan.</strong> Multiple small trips lead to multiple impulse purchases.</li>
                <li><strong>Know your campus food pantry.</strong> If you are short on food at the end of the month, use it.</li>
              </ul>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">Laundry Basics</h4>
              <ol className="ml-5 mb-4 space-y-2 text-[0.92rem]">
                <li><strong>Sort your clothes.</strong> Darks with darks, lights with lights. New dark clothes can bleed dye onto lighter items.</li>
                <li><strong>Check the care label.</strong> &ldquo;Cold wash&rdquo; is safe for almost everything. &ldquo;Lay flat to dry&rdquo; means no dryer.</li>
                <li><strong>Use the right amount of detergent.</strong> Too much leaves residue and can damage the machine.</li>
                <li><strong>Do not leave wet clothes in the machine.</strong> Clothes left wet for hours develop mildew smell that is very hard to get out.</li>
                <li><strong>Empty your pockets.</strong> Tissues, gum, and earbuds have destroyed many loads of laundry.</li>
              </ol>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">Understanding Your Health Insurance Card</h4>
              <ul className="ml-5 mb-4 space-y-2 text-[0.92rem]">
                <li><strong>Member ID / Policy Number:</strong> Your unique identifier. Give this at every visit.</li>
                <li><strong>Group Number:</strong> Identifies your plan. Required at the pharmacy and doctor&apos;s office.</li>
                <li><strong>Copay:</strong> The flat amount you pay at each visit. If your copay is $20, you pay $20 regardless of total cost.</li>
                <li><strong>Deductible:</strong> The amount you pay out of pocket each year before insurance starts covering most costs.</li>
                <li><strong>In-network vs. out-of-network:</strong> In-network is cheaper. When in doubt, use your campus health center.</li>
              </ul>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">What to Check Before Signing a Lease</h4>
              <ul className="ml-5 mb-3 space-y-2 text-[0.92rem]">
                <li><strong>Lease length and end date.</strong> What happens if you need to leave early?</li>
                <li><strong>What utilities are included.</strong> Know what you pay separately before calculating your costs.</li>
                <li><strong>Security deposit and return conditions.</strong> Document any existing damage with photos when you move in.</li>
                <li><strong>Guest and subletting policies.</strong> Can you sublet if you need to leave for the summer?</li>
                <li><strong>Maintenance and repair process.</strong> Who do you contact when something breaks?</li>
              </ul>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">If something in the lease is unclear, ask before you sign. Once you sign, you are legally bound to the terms.</p>

              <div className="mt-6">
                <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3">How to Read Your Health Insurance Card</h4>
                <img src="/images/module4-infographic.png" alt="Annotated health insurance card showing Member ID, copay, and deductible" className="w-full rounded-[8px] mt-2" />
                <p className="text-[0.82rem] text-[#8d9db5] dark:text-[#64748b] mt-2">A sample insurance card with each field labeled in plain language.</p>
              </div>
            </div>

            {/* Prev/Next Nav */}
            <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Previous Lesson</p>
                <Link href="/lesson-3" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Lesson 3: Financial Literacy</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Next Lesson →</p>
                <Link href="/lesson-5" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Lesson 5: Academic Success</Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-[74px]">
              <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-6 mb-4 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">This Lesson</p>
                <ul className="space-y-[6px] text-[0.875rem]">
                  <li><Link href="/module-4" className="text-[#0d7c7e] hover:underline">← Back to Module 4</Link></li>
                  <li><Link href="/lesson-3" className="text-[#0d7c7e] hover:underline">← Lesson 3</Link></li>
                  <li><Link href="/lesson-5" className="text-[#0d7c7e] hover:underline">Next: Lesson 5 →</Link></li>
                </ul>
              </div>

              <div className="bg-[#fef3e2] rounded-[10px] p-6 border border-[#fcd69a]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#c2680a] mb-2">Ready to continue?</p>
                <p className="text-[0.85rem] text-[#8d9db5] dark:text-[#64748b] mb-3">Head back to Module 4 to complete the activity and assessment.</p>
                <Link href="/module-4#activity" className="text-[0.875rem] font-semibold text-[#0d7c7e] hover:underline">Go to Activity →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

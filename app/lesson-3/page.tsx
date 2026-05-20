import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lesson 3: Financial Literacy | Alum's Declassified",
};

export default function Lesson3Page() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 3: Financial Literacy", href: "/module-3" },
          { label: "Lesson" },
        ]}
      />

      <section className="bg-[#1b2537] text-white py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#7ec8ca] mb-2">
            Week 3 · Module 3
          </p>
          <h1
            className="text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold mb-3 tracking-[-0.025em] leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lesson: Financial Literacy
          </h1>
          <p className="text-[#b8c5d6] text-[1rem] max-w-[640px] leading-[1.6]">
            Your award letter is not a gift card. Some of that money is free — and some of it you will be paying back for years. Know the difference before you accept anything.
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
                Module 3 Lesson
              </h2>

              <h3 className="text-[1.15rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Your Financial Aid Award Letter Is Not a Gift Card
              </h3>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">When your financial aid award letter arrives, it will list a number that looks like a lot of money. Some of it is. Some of it is a loan you will have to repay — with interest. Knowing the difference before you accept anything is one of the most important financial decisions you will make in college.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">💵 Grants vs. Loans: The Most Important Distinction</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Grants are free money. You do not pay them back. The Pell Grant is the most common federal grant for students with financial need. Your school may also offer institutional grants. If your award letter lists a grant, that amount is yours to use for school expenses.</p>
              <p className="text-[0.92rem] mb-2 leading-[1.7]">Loans are borrowed money. You pay them back after graduation, with interest. There are two main types:</p>
              <ul className="ml-5 mb-3 space-y-1 text-[0.92rem]">
                <li><strong>Subsidized loans:</strong> The government pays the interest while you are in school. These are better. You only qualify if you demonstrate financial need.</li>
                <li><strong>Unsubsidized loans:</strong> Interest starts accruing immediately, even while you are in school. If you do not pay the interest as it builds, it gets added to your loan balance — meaning you pay interest on your interest.</li>
              </ul>
              <p className="text-[0.92rem] mb-4 leading-[1.7]"><strong>Rule of thumb:</strong> Accept grants first. Accept subsidized loans before unsubsidized. Do not accept more in loans than you actually need to cover your costs.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">📄 How to Read an Award Letter</h4>
              <p className="text-[0.92rem] mb-2 leading-[1.7]">Award letters are not standardized — every school formats them differently. Here is what to look for:</p>
              <ol className="ml-5 mb-4 space-y-1 text-[0.92rem]">
                <li>Find the total cost of attendance (tuition + fees + housing + food + books + personal expenses). This is what school actually costs.</li>
                <li>Subtract any grants and scholarships (free money). What remains is your &ldquo;net cost&rdquo; — what you or your family need to cover.</li>
                <li>Then look at what loans are being offered to cover that net cost. These are NOT free money. They are options, not requirements.</li>
                <li>You do not have to accept all the loans offered. Accept only what you need.</li>
              </ol>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">🏦 Budgeting on a Student Income</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">A student budget has two sides: money coming in and money going out. Most students underestimate the &ldquo;going out&rdquo; side.</p>
              <p className="text-[0.92rem] mb-3 leading-[1.7]"><strong>Fixed expenses</strong> are the same every month: rent, phone bill, loan payments, subscription services. You know exactly what these cost.</p>
              <p className="text-[0.92rem] mb-3 leading-[1.7]"><strong>Variable expenses</strong> change month to month: groceries, gas, entertainment, clothing, eating out. These are where most students overspend without realizing it.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">The most important line in your budget is the gap between income and expenses. If that number is negative, you need a plan before the semester starts — not after you are overdrawn.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">🚨 Financial Scams Targeting College Students</h4>
              <ul className="ml-5 mb-4 space-y-2 text-[0.92rem]">
                <li><strong>Scholarship scams:</strong> Any scholarship that requires a fee to apply is a scam. Legitimate scholarships are free to apply for.</li>
                <li><strong>Fake financial aid emails:</strong> Your school will never ask for your FSA ID password via email. If an email asks for login credentials, it is a phishing attempt.</li>
                <li><strong>Student loan forgiveness scams:</strong> Companies that charge you to help with loan repayment or forgiveness are almost always scams. All federal loan help is free at StudentAid.gov.</li>
                <li><strong>Overpayment scams:</strong> Someone overpays you by check and asks you to send the difference back. The check bounces and you are out the money you sent.</li>
              </ul>

              <div className="mt-6">
                <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3">📊 How to Read an Award Letter — Visual Guide</h4>
                <img src="/images/module3-infographic.png" alt="Annotated financial aid award letter showing grants, loans, and net cost" className="w-full rounded-[8px] mt-2" />
                <p className="text-[0.82rem] text-[#8d9db5] dark:text-[#64748b] mt-2">A fictional sample award letter with each section labeled and explained.</p>
              </div>
            </div>

            {/* Prev/Next Nav */}
            <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Previous Lesson</p>
                <Link href="/lesson-2" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Lesson 2: Campus Resources</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Next Lesson →</p>
                <Link href="/lesson-4" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Lesson 4: Essential Life Skills</Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-[74px]">
              <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-6 mb-4 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">This Lesson</p>
                <ul className="space-y-[6px] text-[0.875rem]">
                  <li><Link href="/module-3" className="text-[#0d7c7e] hover:underline">← Back to Module 3</Link></li>
                  <li><Link href="/lesson-2" className="text-[#0d7c7e] hover:underline">← Lesson 2</Link></li>
                  <li><Link href="/lesson-4" className="text-[#0d7c7e] hover:underline">Next: Lesson 4 →</Link></li>
                </ul>
              </div>

              <div className="bg-[#fef3e2] rounded-[10px] p-6 border border-[#fcd69a]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#c2680a] mb-2">Ready to continue?</p>
                <p className="text-[0.85rem] text-[#8d9db5] dark:text-[#64748b] mb-3">Head back to Module 3 to complete the activity and assessment.</p>
                <Link href="/module-3#activity" className="text-[0.875rem] font-semibold text-[#0d7c7e] hover:underline">Go to Activity →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

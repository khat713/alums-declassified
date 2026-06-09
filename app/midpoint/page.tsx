"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { DocumentDownload } from "@/components/ui/document-download";
import { GiscusComments } from "@/components/ui/giscus-comments";

export default function MidpointPage() {
  return (
    <main>
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <section className="module-header border-b py-9 pb-7">
          <div className="container mx-auto px-4">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] bg-[#fde4ec] text-[#b0264a]">
                Assignment 8 · 50 pts
              </span>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] bg-[#d4f1e3] text-[#16723d]">
                Discussion
              </span>
            </div>
            <h1
              className="text-[#1b2537] dark:text-[#e2e8f0]"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "0.4rem" }}
            >
              Midpoint Check-In
            </h1>
            <p className="text-[#5a6a82] dark:text-[#94a3b8]" style={{ fontSize: "0.97rem", margin: 0, maxWidth: "580px" }}>
              Reflect on Modules 1-4. Post your response and reply to at least one classmate.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 my-8 max-w-[860px]">

          {/* Instructor prompt */}
          <div className="content-block p-7 mb-6">
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.25rem", paddingBottom: "1rem", borderBottom: "1px solid var(--card-border)" }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0d7c7e", color: "white", fontWeight: 700, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                KT
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: "0.95rem" }} className="text-[#1b2537] dark:text-[#e2e8f0]">Khatmin Thant</p>
                <p style={{ margin: 0, fontSize: "0.78rem" }} className="text-[#5a6a82] dark:text-[#94a3b8]">Instructor · AUTHOR</p>
              </div>
            </div>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1rem" }} className="text-[#1b2537] dark:text-[#e2e8f0]">
              Midpoint Reflection: Where Are You Now?
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.25rem" }}>
              <p className="text-[#374151] dark:text-white/80" style={{ fontSize: "0.97rem", lineHeight: 1.75, margin: 0 }}>
                You have made it halfway through the course. Take a moment to step back and reflect on what you have learned so far and how it connects to your own situation as an incoming first-generation college student.
              </p>
              <p className="text-[#374151] dark:text-white/80" style={{ fontSize: "0.97rem", lineHeight: 1.75, margin: 0 }}>
                In your post, reflect on at least two things: something from Modules 1-4 that surprised you or changed how you think, and one thing you are going to do differently as a result. Then read at least one classmate's post and reply with a genuine response, something more than just agreement.
              </p>
            </div>

            <DocumentDownload
              title="Full Midpoint Prompt and Rubric"
              description="Download the complete prompt, length guidelines, and grading rubric."
              filename="Midpoint_Discussion.docx"
              type="assessment"
              active={true}
            />
          </div>

          {/* Live discussion board */}
          <div className="content-block p-7 mb-6">
            <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-4 bg-[#d4f1e3] text-[#16723d]">
              Discussion Board
            </span>
            <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.85rem] mb-5">
              Sign in with a free GitHub account to post. Your name is the only thing shown publicly.
            </p>
            <GiscusComments />
          </div>

          {/* Model response */}
          <div className="content-block p-7 mb-5">
            <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">
              Model Response
            </span>
            <h2
              className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Example Post: See What Proficient Looks Like
            </h2>
            <p className="text-[#374151] dark:text-white/80" style={{ fontSize: "0.97rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              Review this after writing your own draft. Use it as a benchmark, not a script.
            </p>
            <DocumentDownload
              title="Midpoint Model Response"
              description="An example of a Proficient discussion post and peer reply."
              filename="Midpoint_Model_Response.docx"
              type="model"
              active={true}
            />
          </div>

          {/* Nav */}
          <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
            <div>
              <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Back to Module</p>
              <Link href="/module-4" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 4: Life Skills</Link>
            </div>
            <div className="text-right">
              <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Up Next</p>
              <Link href="/module-5" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 5: Study Skills</Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

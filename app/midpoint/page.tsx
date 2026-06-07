"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { DocumentDownload } from "@/components/ui/document-download";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeCdDR-tqseG4ALsLadEzDg0IZcufrqgJYBJFK6pZ4sDWYXvw/viewform?usp=dialog";

function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: '38px', height: '38px', borderRadius: '50%',
      background: color, color: 'white', fontWeight: 700,
      fontSize: '0.85rem', display: 'flex', alignItems: 'center',
      justifyContent: 'center', flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

const EXAMPLE_POSTS = [
  {
    name: "Jordan M.",
    color: "#1d4ed8",
    date: "Example student post",
    body: "Coming into this course, I honestly didn't know what FAFSA even stood for. Module 3 was the one that hit hardest for me. I realized my family had been leaving money on the table because we didn't know about certain grants. The financial literacy section made me feel like I finally had a map instead of just wandering. I also appreciated Module 1's breakdown of office hours because that was something I was genuinely scared of doing.",
    reply: {
      name: "Aaliyah R.",
      color: "#7e22ce",
      date: "Example peer reply",
      body: "I felt the exact same way about office hours! I kept thinking professors would judge me for not already knowing the answer. Module 1 really reframed that for me too.",
    },
  },
  {
    name: "Marcus T.",
    color: "#15803d",
    date: "Example student post",
    body: "Module 4 was the one that surprised me most. I thought I knew how to handle adult responsibilities but the health insurance section alone was something I had never thought about. My parents always handled all of that. Now I actually know what a copay is and why I need to stay in-network. The grocery budgeting activity was also really practical. I did the $30 challenge and realized how much I had been overestimating costs.",
    reply: null,
  },
];

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
              Reflect on Modules 1–4. Post your response and reply to at least one classmate.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 my-8 max-w-[860px]">

          {/* Instructor post */}
          <div className="content-block mb-6 overflow-hidden">
            {/* Post header */}
            <div style={{ padding: "1.25rem 1.5rem 1rem", borderBottom: "1px solid var(--card-border)", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <Avatar name="Khatmin Thant" color="#0d7c7e" />
                <div>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: "0.95rem" }} className="text-[#1b2537] dark:text-[#e2e8f0]">
                    Khatmin Thant
                  </p>
                  <p style={{ margin: 0, fontSize: "0.78rem" }} className="text-[#5a6a82] dark:text-[#94a3b8]">
                    Instructor · AUTHOR
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
                <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] bg-[#d4f1e3] text-[#16723d]">Instructor</span>
              </div>
            </div>

            {/* Post body */}
            <div style={{ padding: "1.25rem 1.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1rem" }} className="text-[#1b2537] dark:text-[#e2e8f0]">
                Midpoint Reflection: Where Are You Now?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <p className="text-[#374151] dark:text-white/80" style={{ fontSize: "0.97rem", lineHeight: 1.75, margin: 0 }}>
                  You have made it halfway through the course. Take a moment to step back and reflect on what you have learned so far and how it connects to your own situation as an incoming first-generation college student.
                </p>
                <p className="text-[#374151] dark:text-white/80" style={{ fontSize: "0.97rem", lineHeight: 1.75, margin: 0 }}>
                  In your post, reflect on at least two things: something from Modules 1–4 that surprised you or changed how you think, and one thing you are going to do differently as a result. Then read at least one classmate's post and reply with a genuine response, something more than just agreement.
                </p>
                <p className="text-[#374151] dark:text-white/80" style={{ fontSize: "0.97rem", lineHeight: 1.75, margin: 0 }}>
                  No account is needed to post. When you are ready, use the button below to submit both your post and your reply in the same form.
                </p>
              </div>

              {/* Document download */}
              <div style={{ marginTop: "1.25rem" }}>
                <DocumentDownload
                  title="Full Midpoint Prompt & Rubric"
                  description="Download the complete prompt, length guidelines, and grading rubric."
                  filename="Midpoint_Discussion.docx"
                  type="assessment"
                  active={true}
                />
              </div>

              {/* Reply button */}
              <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#0d7c7e", color: "white", fontWeight: 700,
                    fontSize: "0.88rem", padding: "8px 22px", borderRadius: "5px",
                    textDecoration: "none", display: "inline-block",
                  }}
                >
                  Post a Reply
                </a>
                <span className="text-[#5a6a82] dark:text-[#94a3b8]" style={{ fontSize: "0.82rem" }}>
                  No account needed · Replies reviewed within 48 hrs on weekdays
                </span>
              </div>
            </div>
          </div>

          {/* Reply count bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", padding: "0 0.25rem" }}>
            <p style={{ margin: 0, fontSize: "0.82rem", fontWeight: 700 }} className="text-[#5a6a82] dark:text-[#94a3b8]">
              {EXAMPLE_POSTS.length} {EXAMPLE_POSTS.length === 1 ? "Reply" : "Replies"} · Example posts shown below
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1.5px solid #0d7c7e", color: "#0d7c7e",
                fontWeight: 600, fontSize: "0.82rem", padding: "5px 14px",
                borderRadius: "5px", textDecoration: "none",
              }}
            >
              + Post a Reply
            </a>
          </div>

          {/* Student posts */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {EXAMPLE_POSTS.map((post, i) => (
              <div key={i} className="content-block overflow-hidden">
                {/* Post */}
                <div style={{ padding: "1.1rem 1.4rem 0.9rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                    <Avatar name={post.name} color={post.color} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.2rem", flexWrap: "wrap" }}>
                        <span style={{ fontWeight: 700, fontSize: "0.95rem" }} className="text-[#1b2537] dark:text-[#e2e8f0]">{post.name}</span>
                        <span style={{ fontSize: "0.78rem" }} className="text-[#5a6a82] dark:text-[#94a3b8]">{post.date}</span>
                      </div>
                      <p className="text-[#374151] dark:text-white/80" style={{ fontSize: "0.93rem", lineHeight: 1.7, margin: 0 }}>
                        {post.body}
                      </p>
                      <div style={{ marginTop: "0.75rem", display: "flex", gap: "1rem" }}>
                        <a
                          href={FORM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0d7c7e", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.3rem" }}
                        >
                          ↩ Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nested reply */}
                {post.reply && (
                  <div style={{ margin: "0 1.4rem 1rem", borderLeft: "3px solid #e0f4f4", paddingLeft: "1.1rem", paddingTop: "0.85rem" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                      <Avatar name={post.reply.name} color={post.reply.color} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.2rem", flexWrap: "wrap" }}>
                          <span style={{ fontWeight: 700, fontSize: "0.9rem" }} className="text-[#1b2537] dark:text-[#e2e8f0]">{post.reply.name}</span>
                          <span style={{ fontSize: "0.75rem" }} className="text-[#5a6a82] dark:text-[#94a3b8]">{post.reply.date}</span>
                        </div>
                        <p className="text-[#374151] dark:text-white/80" style={{ fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                          {post.reply.body}
                        </p>
                        <a
                          href={FORM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ marginTop: "0.6rem", display: "inline-block", fontSize: "0.8rem", fontWeight: 600, color: "#0d7c7e", textDecoration: "none" }}
                        >
                          ↩ Reply
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Model response */}
          <div className="content-block p-7 mt-6 mb-5">
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
              <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Back to Module</p>
              <Link href="/module-4" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 4: Life Skills</Link>
            </div>
            <div className="text-right">
              <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Up Next →</p>
              <Link href="/module-5" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 5: Study Skills</Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

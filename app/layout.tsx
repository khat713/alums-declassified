import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "@/components/ui/toast-notification";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageTransition } from "@/components/ui/page-transition";
import { FreddieGreeter } from "@/components/ui/freddie-greeter";
import { CelestialTracker } from "@/components/ui/celestial-tracker";
import ReactLenis from 'lenis/react';

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alum's Declassified: College Survival Guide",
  description:
    "A free seven-week course for first-generation college students covering everything from syllabi and office hours to budgeting, mental health, and building a career.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(_){}`,
          }}
        />
      </head>
      <body className="text-[#1b2537] dark:text-[#e2e8f0] font-body transition-colors duration-200">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
          <div
            style={{ position: 'relative', zIndex: 0, minHeight: '100vh', background: 'var(--page-bg)' }}
          >
            <Navbar />
            <CelestialTracker />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </ReactLenis>
        <ToastContainer />
        <ScrollToTop />
        <div style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 9999 }}>
          <FreddieGreeter />
        </div>
      </body>
    </html>
  );
}

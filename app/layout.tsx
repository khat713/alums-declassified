import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "@/components/ui/toast-notification";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageTransition } from "@/components/ui/page-transition";
import { FreddiePortal } from "@/components/ui/freddie-portal";
import { FreddieProvider } from "@/components/ui/freddie-greeter";
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
        {/* Preload the hero logo so it paints with the first view. */}
        <link
          rel="preload"
          as="image"
          href={`${process.env.NODE_ENV === "production" ? "/alums-declassified" : ""}/images/logo-clip.png`}
          type="image/png"
        />
      </head>
      <body className="text-[#1b2537] dark:text-[#e2e8f0] font-body transition-colors duration-200">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <FreddieProvider>
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
          <FreddiePortal />
        </FreddieProvider>
      </body>
    </html>
  );
}

'use client';

import { ScrollPath } from '@/components/ScrollPath';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { SystemBar } from '@/components/SystemBar';
import { RetroCursor } from '@/components/ui/RetroCursor';
import { FloatingPixels } from '@/components/ui/FloatingPixels';
import { KeyboardNav } from '@/components/KeyboardNav';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden pb-10">
      <div className="bg-scanlines" />
      <div className="bg-vignette" />
      <div className="bg-grain" />
      <div className="bg-grid" />
      <FloatingPixels />

      <RetroCursor />
      <SystemBar />
      <KeyboardNav />

      {/* The Journey Path */}
      <ScrollPath />

      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <footer className="py-6 text-center font-mono text-sm opacity-50 relative z-10">
        © {new Date().getFullYear()} Retro Portfolio. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}

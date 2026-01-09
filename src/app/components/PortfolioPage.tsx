"use client";

import { profile, skills, projects, experience, nav, SectionId } from "@/app/lib/portfolio";
import { scrollToSection } from "@/app/lib/scrollToSection";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import { Toaster } from "react-hot-toast";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Projects from "@/app/sections/Projects";
import Skills from "@/app/sections/Skills";
import Experience from "@/app/sections/Experience";
import Contact from "@/app/sections/Contact";

export default function PortfolioPage() {
  const { activeSection, setActiveSection } = useActiveSection(nav.map((n) => n.id), 140);

  function onNavigate(id: SectionId) {
    setActiveSection(id);
    scrollToSection(id);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div><Toaster position="top-right"
  reverseOrder={false}/></div>
      <Header profile={profile} nav={nav} activeSection={activeSection} onNavigate={onNavigate} />

      <main className="mx-auto max-w-6xl px-4 py-10 md:py-14 space-y-14">
        <Hero profile={profile} skills={skills} onNavigate={onNavigate} />
        <About />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Contact profile={profile} />
      </main>

      <Footer profile={profile} nav={nav} onNavigate={onNavigate} />
    </div>
  );
}
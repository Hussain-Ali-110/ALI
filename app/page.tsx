'use client'

import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AIChat from './components/AIChat'

export default function Home() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      const bar = document.getElementById('scroll-progress')
      if (bar) bar.style.width = `${progress}%`
    }
    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <main className="relative min-h-screen bg-[#0D1117] grid-bg">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <AIChat />
    </main>
  )
}


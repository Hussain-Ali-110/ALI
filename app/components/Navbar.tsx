'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D1117]/95 backdrop-blur-md border-b border-[#30363D]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollTo('#home')}
          >
 
            {/* Updated: Removed ".dev" from navbar logo as per user request */}
            <span className="font-code text-sm font-medium text-white">
              Tahir Ali Orakzai
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <ThemeToggle />
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  active === link.href.replace('#', '')
                    ? 'text-[#00D8A4] bg-[#00D8A4]/5'
                    : 'text-[#8B949E] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Tahir_Ali_Orakzai_CV.pdf"
              download
              className="ml-3 px-4 py-2 text-sm font-semibold bg-[#00D8A4] text-[#0D1117] rounded-lg hover:bg-[#00B389] transition-colors"
            >
              Download CV
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#8B949E] hover:text-white hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#161B22] border-b border-[#30363D] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    active === link.href.replace('#', '')
                      ? 'text-[#00D8A4] bg-[#00D8A4]/10'
                      : 'text-[#8B949E] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="px-4 py-2">
                <ThemeToggle />
              </div>
              <a
                href="/Tahir_Ali_Orakzai_CV.pdf"
                download
                className="block w-full text-center mt-2 px-4 py-3 text-sm font-semibold bg-[#00D8A4] text-[#0D1117] rounded-lg hover:bg-[#00B389] transition-colors"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

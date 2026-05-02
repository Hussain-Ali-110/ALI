'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Terminal } from 'lucide-react'
import Image from 'next/image'

const roles = [
  'Software Engineering Student',
  'Full-Stack Developer',
  'React & Next.js Enthusiast',
  'Problem Solver',
]

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 40 : 80

    if (!isDeleting && displayText === currentRole) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
        )
      }, speed)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [displayText, isDeleting, roleIndex])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00D8A4]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#0EA5E9]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1">
            {/* Updated: Removed "Available for internships" and "Open to work" as per user request */}

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
            
              <span className="gradient-text">Tahir Ali</span>
              <br />
              <span className="gradient-text">Orakzai</span>
             
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-2 mb-6 h-8"
            >
              
              <span className="font-code text-lg text-[#E6EDF3]">
                {displayText}
                <span className="cursor text-[#00D8A4]">|</span>
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-[#8B949E] text-lg leading-relaxed mb-8 max-w-lg"
            >
              
              <span
              className=" gradient-text font-medium">
              Software Engineering student at{' '}
               COMSATS University Islamabad 
              Abbottabad Campus. I build modern web applications and love turning ideas into elegant,
              functional products.</span>{' '}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,216,164,0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-6 py-3 bg-[#00D8A4] text-[#0D1117] font-semibold rounded-xl hover:bg-[#00B389] transition-colors"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-6 py-3 border border-[#30363D] text-[#E6EDF3] font-semibold rounded-xl hover:border-[#00D8A4] hover:text-[#00D8A4] transition-colors"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-4"
            >
              <span className="text-[#8B949E] text-sm">Find me on:</span>
              {[
{ icon: Github, href: 'https://github.com/Hussain-Ali-110', label: 'GitHub' },
{ icon: Linkedin, href: 'https://www.linkedin.com/in/i-tahir-ali', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:tahirkhanislamian@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.15, color: '#00D8A4' }}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-lg border border-[#30363D] text-[#8B949E] hover:border-[#00D8A4] hover:text-[#00D8A4] transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
              className="relative animate-float"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00D8A4]/30 via-[#0EA5E9]/20 to-transparent blur-2xl scale-110" />
              {/* Accent ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#00D8A4]/20" />
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#161B22] ring-2 ring-[#00D8A4]/30">
{/* Profile image */}
                <Image
                  src="/profile.jpg"
                  alt="Tahir Ali Orakzai"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Status badge - Updated: Removed Open to work text as per user request */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-4 -right-4 bg-[#161B22] border border-[#30363D] rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
              >
                <span className="w-2 h-2 rounded-full bg-[#00D8A4] animate-pulse" />
                <span className="text-xs text-[#E6EDF3] font-medium whitespace-nowrap">Available</span>
              </motion.div>
              {/* Uni badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute top-4 -left-4 bg-[#161B22] border border-[#30363D] rounded-xl px-3 py-2 shadow-xl"
              >
                <p className="text-xs text-[#00D8A4] font-code font-medium">COMSATS</p>
                <p className="text-xs text-[#8B949E]">Abbottabad</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#8B949E] font-code">scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-[#00D8A4]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

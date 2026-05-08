'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null
    const initial = (stored === 'light' || stored === 'dark') ? stored : 'dark'
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    window.localStorage.setItem('theme', next)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      aria-label="Toggle theme"
      className="ml-3 p-2 rounded-lg border border-[#30363D] hover:border-[#00D8A4]/40 transition-colors bg-[#161B22]/30 backdrop-blur-md"
    >
      {theme === 'dark' ? <Sun size={18} className="text-[#E6EDF3]" /> : <Moon size={18} className="text-[#0D1117]" />}
    </motion.button>
  )
}


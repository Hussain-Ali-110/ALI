'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const categories = ['All', 'Frontend', 'Backend', 'Languages', 'Tools']

const skills = [
  // Frontend
  { name: 'Next.js', level: 85, category: 'Frontend', icon: '▲' },
  { name: 'React.js', level: 88, category: 'Frontend', icon: '⚛' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend', icon: '🎨' },
  { name: 'HTML & CSS', level: 92, category: 'Frontend', icon: '🌐' },
  { name: 'Framer Motion', level: 72, category: 'Frontend', icon: '✦' },
  // Backend
  { name: 'Node.js', level: 80, category: 'Backend', icon: '🟢' },
  { name: 'Express.js', level: 78, category: 'Backend', icon: '🚀' },
  { name: 'Next.js API', level: 82, category: 'Backend', icon: '⚡' },
  { name: 'MongoDB', level: 76, category: 'Backend', icon: '🍃' },
  { name: 'Firebase', level: 74, category: 'Backend', icon: '🔥' },
  // Languages
  { name: 'JavaScript', level: 88, category: 'Languages', icon: 'JS' },
  { name: 'TypeScript', level: 78, category: 'Languages', icon: 'TS' },
  { name: 'C++', level: 75, category: 'Languages', icon: 'C+' },
  { name: 'Dart', level: 65, category: 'Languages', icon: '🎯' },
  // Tools
  { name: 'Git & GitHub', level: 85, category: 'Tools', icon: '🐙' },
  { name: 'VS Code', level: 90, category: 'Tools', icon: '💻' },
  { name: 'Vercel', level: 82, category: 'Tools', icon: '▲' },
  { name: 'Figma', level: 65, category: 'Tools', icon: '🎨' },
]

function SkillBar({ name, level, icon, index }: { name: string; level: number; icon: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 text-xs flex items-center justify-center bg-[#00D8A4]/10 rounded text-[#00D8A4] font-mono">
            {icon}
          </span>
          <span className="text-[#E6EDF3] text-sm font-medium">{name}</span>
        </div>
        <span className="text-xs font-code text-[#00D8A4]">{level}%</span>
      </div>
      <div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.05, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #00D8A4, #0EA5E9)' }}
        />
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active)

  return (
    <section id="skills" className="py-24 relative bg-[#161B22]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-code text-[#00D8A4] text-sm mb-2">02. skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title mb-4">What I Work With</h2>
          <p className="text-[#8B949E] max-w-xl">
            A constantly growing toolkit. I learn by building — every project adds new skills.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-[#00D8A4] text-[#0D1117]'
                  : 'bg-[#161B22] text-[#8B949E] border border-[#30363D] hover:border-[#00D8A4]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
          {filtered.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} index={i} />
          ))}
        </div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl bg-[#161B22] border border-[#30363D]"
        >
          <p className="font-code text-xs text-[#8B949E] mb-4">// Currently learning & exploring</p>
          <div className="flex flex-wrap gap-2">
            {['Flutter', 'Docker', 'GraphQL', 'Python', 'Machine Learning', 'PostgreSQL', 'Redis', 'AWS Basics'].map(t => (
              <span key={t} className="px-3 py-1.5 text-xs font-code bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-full text-[#0EA5E9]">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

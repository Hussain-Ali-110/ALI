'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, Trophy, Briefcase } from 'lucide-react'

const experiences = [
  {
    type: 'education',
    icon: BookOpen,
    title: 'BS Software Engineering',
    org: 'COMSATS University Islamabad — Abbottabad Campus',
    period: '2022 — Present',
    description: 'Studying core computer science fundamentals including Data Structures & Algorithms, OOP, Database Systems, Web Engineering, Software Design & Architecture, and more.',
    tags: ['DSA', 'OOP', 'DBMS', 'Web Engineering', 'OS'],
    color: '#00D8A4',
  },
  {
    type: 'project',
    icon: Trophy,
    title: 'Shop Management System — University Project',
    org: 'COMSATS University Islamabad',
    period: '2023',
    description: 'Developed a comprehensive shop management system as a semester project using C++, applying OOP principles, file handling, and data structures. Received top grade in the course.',
    tags: ['C++', 'OOP', 'File I/O', 'Data Structures'],
    color: '#A78BFA',
  },
  {
    type: 'achievement',
    icon: Award,
    title: 'Full-Stack Web Development',
    org: 'Self-Directed Learning & Online Courses',
    period: '2023 — 2024',
    description: 'Completed in-depth courses on Next.js, React, Node.js, MongoDB, and TypeScript. Built multiple full-stack projects to solidify learning and hands-on experience.',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'TypeScript'],
    color: '#0EA5E9',
  },
  {
    type: 'internship',
    icon: Briefcase,
    title: 'Looking for Internship',
    org: 'Open to Opportunities',
    period: '2024 — Present',
    description: 'Actively seeking an internship opportunity where I can contribute, learn from experienced engineers, and work on real-world products. Available for remote or on-site roles.',
    tags: ['Frontend', 'Full-Stack', 'Remote', 'On-site'],
    color: '#F59E0B',
  },
]

const certifications = [
  { name: 'Responsive Web Design', provider: 'freeCodeCamp', year: '2023' },
  { name: 'JavaScript Algorithms', provider: 'freeCodeCamp', year: '2023' },
  { name: 'React - The Complete Guide', provider: 'Udemy', year: '2024' },
  { name: 'Next.js 14 & Beyond', provider: 'Udemy', year: '2024' },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-[#161B22]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-code text-[#00D8A4] text-sm mb-2">04. experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title mb-4">My Journey</h2>
          <p className="text-[#8B949E] max-w-xl">
            Education, achievements, and milestones on my path to becoming a great software engineer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 group"
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-colors"
                    style={{
                      background: `${item.color}15`,
                      borderColor: `${item.color}30`,
                    }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  {i < experiences.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-gradient-to-b from-[#30363D] to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <span className="font-code text-xs text-[#8B949E] bg-[#161B22] px-2 py-1 rounded border border-[#30363D]">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-2" style={{ color: item.color }}>
                    {item.org}
                  </p>
                  <p className="text-[#8B949E] text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-code rounded bg-[#161B22] border border-[#30363D] text-[#8B949E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications sidebar */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Award size={16} className="text-[#00D8A4]" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-3 rounded-xl bg-[#161B22] border border-[#30363D] hover:border-[#00D8A4]/30 transition-colors"
                  >
                    <p className="text-[#E6EDF3] text-sm font-medium">{cert.name}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-[#8B949E]">{cert.provider}</p>
                      <span className="font-code text-xs text-[#00D8A4]">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Open source */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-[#00D8A4]/5 to-transparent border border-[#00D8A4]/20">
                <p className="text-xs font-code text-[#00D8A4] mb-1">// open to</p>
                <p className="text-white text-sm font-semibold">Internships & Freelance</p>
                <p className="text-[#8B949E] text-xs mt-1">Remote or On-site — Abbottabad & beyond</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

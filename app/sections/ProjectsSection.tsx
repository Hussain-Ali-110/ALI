'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github, Star } from 'lucide-react'

const projectFilters = ['All', 'Web', 'Mobile','GAME', 'AI/ML']

const projects = [
  
  {
    id: 2,
    title: 'BMI Calculator App',
    description: 'A clean, interactive BMI Calculator with real-time results, health category classification, and a chart showing BMI history over time. Built with React and Chart.js.',
    tech: ['React', 'JavaScript', 'CSS3', 'Chart.js'],
    category: 'Web',
    stars: 8,
    demo: '#',
    github: 'https://github.com/tahir-ali-orakzai/bmi-calculator',
    color: '#0EA5E9',
    featured: false,
  },
  {
    id: 3,
    title: 'Shop Management System',
    description: 'A full-featured shop management desktop application with inventory tracking, sales reports, customer management, and billing. Built with C++ and file-based data storage.',
    tech: ['C++', 'File I/O', 'OOP', 'DSA'],
    category: 'Tools',
    stars: 15,
    demo: '#',
    github: 'https://github.com/tahir-ali-orakzai/shop-management',
    color: '#A78BFA',
    featured: true,
  },
   {
  id: 4,
  title: 'Shadow Reclaim (First Person Shooter)',
  description: 'A story-driven First Person Shooter (FPS) game featuring immersive gameplay, mission-based progression, and dynamic combat mechanics. The game includes multiple levels, enemy AI, weapon systems, and an engaging narrative experience.',
  tech: ['Unity', 'C#', 'Game Development', '3D Design', 'AI'],
  category: 'Game Development',
  stars: 10,
  demo: '#',
  github: 'https://github.com/tahir-ali-orakzai/shadow-reclaim',
  color: '#24b806',
  featured: true,
},
  {
    id: 5,
    title: 'Flutter Notes App',
    description: 'A cross-platform mobile notes application with offline-first storage using Hive, categories, search functionality, and a beautiful Material 3 design.',
    tech: ['Flutter', 'Dart', 'Hive', 'Material 3'],
    category: 'Mobile',
    stars: 6,
    demo: '#',
    github: 'https://github.com/tahir-ali-orakzai/flutter-notes',
    color: '#EC4899',
    featured: false,
  },
 
]

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-code text-[#00D8A4] text-sm mb-2">03. projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title mb-4">Things I&apos;ve Built</h2>
          <p className="text-[#8B949E] max-w-xl">
            A collection of projects that showcase my skills and passion for building real-world software.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {projectFilters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                filter === f
                  ? 'bg-[#00D8A4] text-[#0D1117]'
                  : 'bg-[#161B22] text-[#8B949E] border border-[#30363D] hover:text-white hover:border-[#00D8A4]/40'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="project-card group relative bg-[#161B22] border border-[#30363D] rounded-2xl overflow-hidden hover:border-[#30363D]"
              >
                {/* Color accent top bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-code bg-[#00D8A4]/10 border border-[#00D8A4]/20 text-[#00D8A4] rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Thumbnail placeholder */}
                <div
                  className="h-36 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `${project.color}08` }}
                >
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(45deg, ${project.color}22 25%, transparent 25%, transparent 75%, ${project.color}22 75%)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <span className="font-code text-5xl font-bold opacity-20" style={{ color: project.color }}>
                    {project.title[0]}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold text-base group-hover:text-[#00D8A4] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[#8B949E] text-xs">
                      <Star size={12} />
                      <span>{project.stars}</span>
                    </div>
                  </div>

                  <p className="text-[#8B949E] text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-code rounded"
                        style={{ background: `${project.color}15`, color: project.color }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-[#30363D]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#8B949E] hover:text-white transition-colors"
                    >
                      <Github size={13} />
                      Source
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#8B949E] hover:text-[#00D8A4] transition-colors ml-auto"
                    >
                      Live Demo
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/tahir-ali-orakzai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#30363D] text-[#8B949E] rounded-xl hover:border-[#00D8A4] hover:text-[#00D8A4] transition-all text-sm font-medium"
          >
            <Github size={16} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Target, User } from 'lucide-react'

const facts = [
  { icon: GraduationCap, label: 'University', value: 'COMSATS University Islamabad' },
  { icon: MapPin, label: 'Campus', value: 'Abbottabad Campus, KPK, Pakistan' },
  { icon: Target, label: 'Degree', value: 'BS Software Engineering' },
  { icon: User, label: 'Status', value: 'Undergraduate Student' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-code text-[#00D8A4] text-sm mb-2">About me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
<p className="text-[#8B949E] text-lg leading-relaxed">
              I am <span className="text-white font-medium">Tahir Ali Orakzai</span>, a passionate Software Engineering student at COMSATS University Islamabad, Abbottabad Campus. I am driven by a strong interest in technology, problem-solving, and building software solutions that create meaningful real-world impact.
            </p>
            <p className="text-[#8B949E] text-lg leading-relaxed">
              My journey into software development began with a curiosity about how applications are built, which quickly evolved into hands-on experience in full-stack development. I work across both mobile and web platforms, developing cross-platform mobile applications using <span className="text-[#00D8A4]">Flutter</span> and creating modern, responsive web interfaces with <span className="text-[#00D8A4]">React and Next.js</span>. On the backend, I build scalable APIs with <span className="text-[#00D8A4]">Node.js</span>, manage databases using <span className="text-[#00D8A4]">MongoDB</span>, and integrate <span className="text-[#00D8A4]">Firebase</span> for services such as authentication, real-time data, and cloud storage.
            </p>
            <p className="text-[#8B949E] text-lg leading-relaxed">
              Beyond development, I actively explore emerging technologies, particularly in <span className="text-[#00D8A4]">Artificial Intelligence and Machine Learning</span>, and continuously improve my skills through practical projects and open-source contributions.
            </p>

           
          </motion.div>

          {/* Right: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {facts.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#161B22] border border-[#30363D] hover:border-[#00D8A4]/40 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-[#00D8A4]/10 border border-[#00D8A4]/20 group-hover:border-[#00D8A4]/50 transition-colors">
                  <Icon size={18} className="text-[#00D8A4]" />
                </div>
                <div>
                  <p className="text-xs font-code text-[#8B949E] mb-0.5">{label}</p>
                  <p className="text-[#E6EDF3] font-medium">{value}</p>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { value: '10+', label: 'Projects' },
                { value: '5+', label: 'Technologies' },
                { value: '2+', label: 'Years Coding' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-[#161B22] border border-[#30363D]">
                  <p className="text-2xl font-bold text-[#00D8A4]">{value}</p>
                  <p className="text-xs text-[#8B949E] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

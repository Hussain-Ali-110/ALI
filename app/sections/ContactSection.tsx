'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, Github, Linkedin, Mail, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.')
      return
    }
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again or email directly.')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

const socials = [
{ icon: Github, label: 'GitHub', value: 'github.com/Hussain-Ali-110', href: 'https://github.com/Hussain-Ali-110' },
{ icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/i-tahir-ali', href: 'https://www.linkedin.com/in/i-tahir-ali' },
    { icon: Mail, label: 'Email', value: 'tahirkhanislamian@gmail.com', href: 'mailto:tahirkhanislamian@gmail.com' },
{ icon: Phone, label: 'Phone', value: '03068024962', href: 'tel:03068024962' },
  ]

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-code text-[#00D8A4] text-sm mb-2">05. contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title mb-4">Get In Touch</h2>
          <p className="text-[#8B949E] max-w-xl">
            Whether you have an internship opportunity, a project idea, or just want to say hi —
            my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <p className="text-white font-semibold mb-1">Let&apos;s connect</p>
              <p className="text-[#8B949E] text-sm">
                I&apos;m actively looking for internships and freelance opportunities. I usually reply within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  whileHover={{ x: 6 }}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#161B22] border border-[#30363D] hover:border-[#00D8A4]/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#00D8A4]/10 border border-[#00D8A4]/20">
                    <Icon size={16} className="text-[#00D8A4]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8B949E]">{label}</p>
                    <p className="text-sm text-[#E6EDF3] group-hover:text-[#00D8A4] transition-colors font-medium">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quote */}
            <div className="p-4 rounded-xl border border-[#30363D] bg-[#161B22]">
              <p className="font-code text-xs text-[#8B949E] mb-2">Favorite quote</p>
              <p className="text-[#E6EDF3] text-sm italic">
                &ldquo;First, solve the problem. Then, write the code.&rdquo;
              </p>
              <p className="text-xs text-[#8B949E] mt-1">John Johnson</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#8B949E] mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tahir Ali"
                    className="w-full px-4 py-3 bg-[#161B22] border border-[#30363D] rounded-xl text-[#E6EDF3] placeholder-[#4A5568] focus:outline-none focus:border-[#00D8A4] transition-colors text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8B949E] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-[#161B22] border border-[#30363D] rounded-xl text-[#E6EDF3] placeholder-[#4A5568] focus:outline-none focus:border-[#00D8A4] transition-colors text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#8B949E] mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Hi Tahir, I'd like to discuss an internship opportunity..."
                  className="w-full px-4 py-3 bg-[#161B22] border border-[#30363D] rounded-xl text-[#E6EDF3] placeholder-[#4A5568] focus:outline-none focus:border-[#00D8A4] transition-colors text-sm resize-none"
                  required
                />
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={14} />
                  {error}
                </div>
              )}

              {/* Success */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-[#00D8A4] text-sm bg-[#00D8A4]/10 border border-[#00D8A4]/20 px-4 py-3 rounded-xl"
                >
                  <CheckCircle size={16} />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 bg-[#00D8A4] text-[#0D1117] font-semibold rounded-xl hover:bg-[#00B389] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

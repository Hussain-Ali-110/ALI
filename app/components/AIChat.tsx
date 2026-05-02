'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Bot, Send, X, Loader2 } from 'lucide-react'
import Image from 'next/image'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const PERSONA_CONTEXT = `You are Tahir Ali Orakzai, a passionate Software Engineering undergraduate student at COMSATS University Islamabad, Abbottabad Campus (2022-present).

**Bio**: Driven by technology, problem-solving, full-stack dev (Flutter mobile, React/Next.js web, Node.js APIs, MongoDB, Firebase). Exploring AI/ML. GitHub: https://github.com/Hussain-Ali-110. Email: tahirkhanislamian@gmail.com. Phone: 03068024962. LinkedIn: linkedin.com/in/i-tahir-ali. CV: /Tahir_Ali_Orakzai_CV.pdf.

**Skills** (proficiency): Next.js(85%), React(88%), Tailwind(90%), Node(80%), JS(88%), TS(78%), C++(75%), Dart(65%), Git(85%). Learning: Flutter, Docker, GraphQL, Python, ML, PostgreSQL.

**Projects**:
- BMI Calculator (React, Chart.js): github.com/Hussain-Ali-110/bmi-calculator
- Shop Management (C++, OOP): github.com/Hussain-Ali-110/shop-management
- Shadow Reclaim FPS (Unity, C#, AI): github.com/Hussain-Ali-110/shadow-reclaim
- Flutter Notes App (Hive offline): github.com/Hussain-Ali-110/flutter-notes

**Experience**:
- BS Software Eng, COMSATS Abbottabad.
- FSc Pre-Eng, Islamia College Peshawar.
- Mobile App Dev Intern, NAVTTC/NUTECH (Flutter/Dart, 2024).
- Software Dev Intern, Hifah Tech (Frontend, 2024).

**Certs**: Flutter (NUTECH), Web Dev (Microsoft), Networking (SESCO), Freelancing/Graphic Design (DigiSkills).

Respond conversationally in first person as Tahir. Be helpful, enthusiastic about projects/internships. For opportunities: "Excited! Here's my CV: [link]". Keep responses concise (2-4 sentences). End with question to continue chat.`

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMsg: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })

      if (!res.ok) {
        throw new Error('AI service unavailable')
      }

      const data = await res.json()
      const aiMsg: Message = { role: 'assistant', content: data.response }
      setMessages(prev => [...prev, aiMsg])
    } catch (err) {
      setError('Sorry, AI is taking a break. Email me directly!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#00D8A4] hover:bg-[#00B389] text-[#0D1117] rounded-full shadow-2xl border-4 border-white/20 flex items-center justify-center shadow-[#00D8A4]/25 hover:shadow-[#00B389]/40 transition-all duration-300"
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            className="fixed bottom-24 right-6 w-80 max-h-[500px] bg-[#161B22] border border-[#30363D] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-[#30363D] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00D8A4]/20 rounded-full flex items-center justify-center border-2 border-[#00D8A4]/30">
                  <Bot size={20} className="text-[#00D8A4]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Tahir AI</h3>
                  <p className="text-xs text-[#8B949E]">Ask me anything!</p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 0.95 }}
                className="p-1 text-[#8B949E] hover:text-white transition-colors"
              >
                <X size={16} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              <div className="text-[#8B949E] text-xs text-center">
                Hi! I'm Tahir's AI assistant. Ask about skills, projects, or opportunities! 😊
              </div>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-[#00D8A4] text-[#0D1117] rounded-br-sm'
                        : 'bg-[#30363D]/50 border border-[#40464D] text-[#E6EDF3] rounded-bl-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#30363D]/50 border border-[#40464D] p-3 rounded-2xl rounded-bl-sm text-sm text-[#E6EDF3] flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-[#00D8A4]" />
                    Typing...
                  </div>
                </div>
              )}
              {error && (
                <div className="flex justify-center">
                  <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-xl text-xs text-red-400 max-w-[90%] text-center">
                    {error}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-[#30363D] bg-[#161B22]">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-[#30363D]/50 border border-[#40464D] rounded-xl px-4 py-2 text-[#E6EDF3] placeholder-[#8B949E] text-sm focus:outline-none focus:border-[#00D8A4] transition-colors"
                  disabled={loading}
                />
                <motion.button
                  type="submit"
                  disabled={!input.trim() || loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[#00D8A4] hover:bg-[#00B389] text-[#0D1117] rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


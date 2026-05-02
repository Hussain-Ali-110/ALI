'use client'

import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#30363D] bg-[#161B22]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
           

          {/* Made with love */}
          <p className="flex items-center gap-1.5 text-sm text-[#8B949E]">
            Built with
            <Heart size={14} className="text-red-400 fill-red-400" />
            by Tahir Ali Orakzai &copy; {year}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/tahir-ali-orakzai', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/tahir-ali-orakzai', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:tahirali@example.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 text-[#8B949E] hover:text-[#00D8A4] transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom tech line */}
        <div className="mt-6 pt-6 border-t border-[#30363D] text-center">
          
        </div>
      </div>
    </footer>
  )
}

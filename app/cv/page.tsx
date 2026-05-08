import React from 'react'

export const metadata = {
  title: 'Download CV',
}

export default function CvPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>CV</h1>
      <p style={{ marginBottom: 16 }}>
        If your download doesn’t start automatically, click the button below.
      </p>
      <a
href="/api/cv"
        download
        style={{
          display: 'inline-block',
          padding: '10px 14px',
          borderRadius: 8,
          background: '#00D8A4',
          color: '#0D1117',
          fontWeight: 700,
          textDecoration: 'none',
        }}
      >
        Download CV (PDF)
      </a>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.addEventListener('load', () => {\n            const a = document.createElement('a');\n            a.href = '/api/cv';\n            a.download = 'Tahir_Ali_Orakzai_CV.pdf';\n            document.body.appendChild(a);\n            a.click();\n            a.remove();\n          });`,
        }}
      />
    </div>
  )
}


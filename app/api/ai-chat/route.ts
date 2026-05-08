import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

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

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    if (!message || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { 
          response: "Hi! AI setup in progress. Get OpenAI API key from platform.openai.com/api-keys, add to .env.local: OPENAI_API_KEY=sk-xxx, restart server. Email tahirkhanislamian@gmail.com meanwhile! 🚀" 
        },
        { status: 200 }
      )
    }

    const openai = new OpenAI({
      apiKey: apiKey,
    })

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',

      messages: [
        { role: 'system', content: PERSONA_CONTEXT },
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 300,
    })

    const response = completion.choices[0]?.message?.content || 'Sorry, no response.'

    return NextResponse.json({ response }, { status: 200 })

  } catch (error) {
    console.error('AI Chat API error:', error)
    return NextResponse.json(
      { 
        response: "Oops! Try again or email tahirkhanislamian@gmail.com. What's your question?" 
      },
      { status: 200 }
    )
  }
}


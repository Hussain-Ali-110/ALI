import { NextRequest, NextResponse } from 'next/server'

// Optional: import mongoose and connect to MongoDB
// import mongoose from 'mongoose'
// import connectDB from '@/lib/mongodb'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // --- Validation ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      )
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message is too short.' },
        { status: 400 }
      )
    }

    // --- Option 1: Save to MongoDB ---
    // await connectDB()
    // await Message.create({ name, email, message, timestamp: new Date() })

    // --- Option 2: Send email via Nodemailer ---
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // })
    // await transporter.sendMail({
    //   from: email,
    //   to: process.env.EMAIL_USER,
    //   subject: `Portfolio Contact: ${name}`,
    //   text: message,
    // })

    // For now, log to console (remove in production)
    console.log('📬 New message from portfolio:', { name, email, message, timestamp: new Date().toISOString() })

    return NextResponse.json(
      { success: true, message: 'Message received! I will reply shortly.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}

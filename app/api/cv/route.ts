import { NextResponse } from 'next/server'
import fs from 'node:fs'
import path from 'node:path'

export async function GET() {
  const pdfPath = path.join(process.cwd(), 'public', 'Tahir_Ali_Orakzai_CV.pdf')

  if (!fs.existsSync(pdfPath)) {
    return NextResponse.json(
      { error: 'CV PDF not found. Add Tahir_Ali_Orakzai_CV.pdf inside /public.' },
      { status: 404 }
    )
  }

  const fileBuffer = fs.readFileSync(pdfPath)

  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Tahir_Ali_Orakzai_CV.pdf"',
      'Content-Length': fileBuffer.length.toString(),
    },
  })
}


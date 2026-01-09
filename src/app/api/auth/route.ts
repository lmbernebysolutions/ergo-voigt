import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PASSWORD = process.env.SITE_PASSWORD || 'development_only_password'
const COOKIE_NAME = 'auth-token'
const COOKIE_VALUE = 'authenticated'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (password === PASSWORD) {
      const response = NextResponse.json({ success: true })
      
      // Set authentication cookie
      response.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
        path: '/',
        maxAge: 86400, // 24 hours
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      })

      return response
    } else {
      return NextResponse.json(
        { success: false, error: 'Falsches Passwort' },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    )
  }
}

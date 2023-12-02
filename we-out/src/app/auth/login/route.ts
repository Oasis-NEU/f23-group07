import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { Database } from '../../database.types'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })


  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // Redirect back to the login page if login fails
    const loginPageUrl = `${requestUrl.origin}/login`; // Replace with your actual login page URL
    return NextResponse.redirect(loginPageUrl, {
      status: 302, // Temporary redirect
    });
  }

  return NextResponse.redirect(`${requestUrl.origin}/auth/callback/existingaccount`, {
    status: 301,
  })
}
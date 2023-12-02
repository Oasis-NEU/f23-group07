import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  const { data: { user } } = await supabase.auth.getUser()

  const userId = user.id

  const { data, error } = await supabase.from('profiles').select('full_name').eq('id', userId);

  if (error) {
    console.log(error);
  }

  const fullName = data[0].full_name

  return NextResponse.redirect(new URL(`/dashboard/?current_user=${fullName.split(' ').join('')}`, req.url)) 
}
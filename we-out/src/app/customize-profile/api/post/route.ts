import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { Database } from '../../../database.types'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)

  const formData = await request.formData()

  const profilePicture = String(formData.get('profile-picture'))
  
  const mondayAvailable = Boolean(formData.get('monday-available'))
  const tuesdayAvailable = Boolean(formData.get('tuesday-available'))
  const wednesdayAvailable = Boolean(formData.get('wednesday-available'))
  const thursdayAvailable = Boolean(formData.get('thursday-available'))
  const fridayAvailable = Boolean(formData.get('friday-available'))
  const saturdayAvailable = Boolean(formData.get('saturday-available'))
  const sundayAvailable = Boolean(formData.get('sunday-available'))
  
  const experienceLevel = String(formData.get('experience-level'))

  const cookieStore = cookies()
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

  /////////////////////////////////////////////////////////////////

  //TODO: Figure out how to get the current user
  const { data: { user } } = await supabase.auth.getUser()

  console.log("Fetched User: " + user);
  const userId = user.id;
  //const userId = "ddfe36b3-587c-40c0-9924-5d654a39f3a4";

  /////////////////////////////////////////////////////////////////

  console.log("Fetched User ID: " + userId);


  await supabase.from('profiles').update({
    profile_picture_url: profilePicture,

    monday_available: mondayAvailable,
    tuesday_available: tuesdayAvailable,
    wednesday_available: wednesdayAvailable,
    thursday_available: thursdayAvailable,
    friday_available: fridayAvailable,
    saturday_available: saturdayAvailable,
    sunday_available: sundayAvailable,

    experience_level: experienceLevel,
  }).eq('id', userId);

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}
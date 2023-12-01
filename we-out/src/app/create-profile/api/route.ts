import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { Database } from '../../database.types'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)

  const formData = await request.formData()
  const profilePicture = formData.get('pfp')


//user picks photo
//sends to us
//we take image
//upload photo to storebase
//request url from storebase
//use url//photo_id from storebase in database table


  
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

  await supabase.storage.from('pfps').upload(userId, profilePicture)

  const { data: {signedUrl}, error } = await supabase.storage.from('pfps').createSignedUrl(userId, 3600)
  if (error) {
      console.error(error)
      throw new Error('Failed to generate signed URL')
    }
    
  console.log(signedUrl)

  await supabase.from('profiles').update({
    profile_picture_url: signedUrl,
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
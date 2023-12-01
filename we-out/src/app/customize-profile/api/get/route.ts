import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { Database } from '../../../database.types'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)

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


  const { data, error } = await supabase.from('profiles').select().eq('id', userId);

  if (error) {
    console.log(error);
  }


  //TODO: Figure out how to return data

  /*
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },  
  });
  */
}
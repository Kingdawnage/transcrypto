import { redirect } from 'next/navigation'

import { createClient } from '@/app/utils/supabase/server'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  
  if (error || !data?.user) {
    console.log("No User logged in");
    redirect('/mainpage/auth')
  }

  return <p>Hello {data.user.email}</p>
}
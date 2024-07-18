"use server";

import { createClient } from "@/app/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const supabase = createClient();
  // validate here with ZOD
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  console.log("HERE: ", data);
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/app/error/");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();
// stop terminal and start again, give me terminal access --done
// we can start a new project repo and do it the way you do if you want. I just want to get the best way

  const data = {
    email: formData.get("email") as string,
    name: formData.get("name") as string,
    password: formData.get("password") as string,
  };
  console.log("here: ", data);

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log("error found");
    redirect("/error/");
  }

  revalidatePath("/mainpage/private");
  redirect("/mainpage/private");
}

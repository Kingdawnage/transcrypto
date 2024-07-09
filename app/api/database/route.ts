import { NextRequest, NextResponse } from "next/server";
import supabase from "@/app/utils/supabase";

export async function GET(req: NextRequest) {
  try {
    const data = await supabase.from("User").select("*");

    return NextResponse.json({ name: data.data }, { status: 200 });
  } catch (error) {
    console.error("Error calling supabase API:", error);
    return NextResponse.json({ name: "Error occurred" }, { status: 500 });
  }
}

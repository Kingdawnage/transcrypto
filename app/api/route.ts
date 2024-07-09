// app/api/hello/route.ts
import { NextRequest, NextResponse } from "next/server";
import openai from "../utils/openai"; // Update the import path according to your project structure

export async function GET(req: NextRequest) {
  try {
    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "What is 2+2?" }],
    });

    // const response = completion.data.choices[0].text;
    const response = completion.choices[0].message;
    return NextResponse.json({ name: response.content });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return NextResponse.json({ name: "Error occurred" }, { status: 500 });
  }
}

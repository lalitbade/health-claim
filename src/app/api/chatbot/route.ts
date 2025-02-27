import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: query }] }],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      return NextResponse.json({ error: errorData }, { status: response.status });
    }

    const data = await response.json();
    let answer = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response.";

    // ✅ Remove Markdown formatting if present
    answer = answer.replace(/(\*\*|__|`|#)/g, ""); // Removes bold, italics, and headings
    answer = answer.replace(/\n+/g, " "); // Convert new lines to spaces for smooth response

    return NextResponse.json({ answer }, { status: 200 });
  } catch (error) {
    console.error("Chatbot error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// app/api/ai-assistant/route.ts
import { NextResponse } from "next/server";

const GEMINI_MODEL = "gemini-flash-latest";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        const apiKey = process.env.GEMINI_API_KEY?.trim();

        console.log("[AI Assistant API] API Key check:", {
            exists: !!apiKey,
            length: apiKey?.length,
            starts: apiKey?.substring(0, 5) + "...",
        });

        if (!apiKey || apiKey.length < 20) {
            return NextResponse.json(
                { error: "Gemini API key is missing or invalid. Please set GEMINI_API_KEY in .env.local" },
                { status: 500 }
            );
        }

        // System prompt for the AI assistant
        const systemPrompt = `You are a friendly and professional AI assistant for InnovativeCode — a premium web development and digital marketing agency.

We build stunning, high-performance websites and apps using Next.js, React, TypeScript, Tailwind, Node.js, and modern tools. We also offer mobile apps, UI/UX design, SEO, performance optimization, and AI/Web3 solutions.

Key facts:
- 15+ expert team members
- 100+ successful projects
- 98% client satisfaction
- Clients in 3 continents
- 24/7 support

Services:
• Custom Web Development (Next.js, React, Node.js)
• Mobile Apps (React Native, Flutter)
• UI/UX Design & Branding
• Performance & SEO Optimization
• AI & Web3 Solutions
• Digital Marketing & Consulting

Goal: Answer questions helpfully about any topic. If user wants a quote or consultation, ask for their name and email so our team can contact them.`;

        // Call Gemini API directly without RAG
        const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [
                    {
                        role: "user",
                        parts: [{ text: message }],
                    },
                ],
                systemInstruction: {
                    parts: [{ text: systemPrompt }],
                },
                generationConfig: {
                    temperature: 0.7,
                    topP: 0.95,
                    topK: 40,
                    maxOutputTokens: 1024,
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE",
                    },
                ],
            }),
        });

        if (!response.ok) {
            const err = await response.text();
            console.error("Gemini API Error:", {
                status: response.status,
                statusText: response.statusText,
                error: err,
            });
            return NextResponse.json(
                { error: `AI service error: ${response.status}` },
                { status: 500 }
            );
        }

        const data = await response.json();
        const reply =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "I'm having trouble responding right now. Please try again.";

        return NextResponse.json({
            message: reply,
        });
    } catch (error) {
        console.error("AI Assistant Route Error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
// app/api/rag/route.ts
import { NextResponse } from "next/server";
import { generateEmbedding } from "@/lib/rag/embeddings";
import { searchSimilar } from "@/lib/rag/vector-store";

const GEMINI_MODEL = "gemini-1.5-flash";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1/models/${GEMINI_MODEL}:generateContent`;

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        const apiKey = process.env.GEMINI_API_KEY?.trim();

        console.log("[RAG API] API Key check:", {
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

        // Step 1: Generate embedding for user query
        let queryEmbedding: number[];
        try {
            queryEmbedding = await generateEmbedding(message);
        } catch (error) {
            console.error("Embedding generation failed:", error);
            // Fallback to non-RAG mode
            return fallbackToNonRAG(message, apiKey);
        }

        // Step 2: Search for relevant documents
        let relevantDocs;
        try {
            relevantDocs = await searchSimilar(queryEmbedding, 3, 0.7);
        } catch (error) {
            console.error("Vector search failed:", error);
            // Fallback to non-RAG mode
            return fallbackToNonRAG(message, apiKey);
        }

        // Step 3: Build context from retrieved documents
        let context = "";
        const sources: Array<{
            type: string;
            title: string;
            slug: string;
            score: number;
        }> = [];

        if (relevantDocs.length > 0) {
            context = relevantDocs
                .map((doc, index) => {
                    sources.push({
                        type: doc.payload.type,
                        title: doc.payload.title,
                        slug: doc.payload.slug,
                        score: doc.score,
                    });

                    return `[Source ${index + 1}: ${doc.payload.title}]
${doc.payload.content}
${doc.payload.excerpt ? `\nSummary: ${doc.payload.excerpt}` : ""}`;
                })
                .join("\n\n---\n\n");
        }

        // Step 4: Build enhanced system prompt
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

${context
                ? `RELEVANT CONTEXT FROM OUR CONTENT:
${context}

Use the above context to provide accurate, specific answers. When referencing information from the context, mention the source naturally in your response.`
                : ""
            }

Goal: Answer questions helpfully using the provided context when relevant. If user wants a quote or consultation, ask for their name and email so our team can contact them.`;

        // Step 5: Call Gemini API with enhanced context
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
            sources: sources.length > 0 ? sources : undefined,
        });
    } catch (error) {
        console.error("RAG Route Error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}

// Fallback function for non-RAG mode
async function fallbackToNonRAG(message: string, apiKey: string) {
    const systemPrompt = `You are a friendly and professional AI assistant for InnovativeCode — a premium web development and digital marketing agency.

We build stunning, high-performance websites and apps using Next.js, React, TypeScript, Tailwind, Node.js, and modern tools.

Services:
• Custom Web Development (Next.js, React, Node.js)
• Mobile Apps (React Native, Flutter)
• UI/UX Design & Branding
• Performance & SEO Optimization
• AI & Web3 Solutions
• Digital Marketing & Consulting

Goal: Answer questions helpfully. If user wants a quote or consultation, ask for their name and email.`;

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
                temperature: 0.8,
                topP: 0.95,
                topK: 40,
                maxOutputTokens: 1024,
            },
        }),
    });

    const data = await response.json();
    const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm having trouble responding right now. Please try again.";

    return NextResponse.json({ message: reply });
}

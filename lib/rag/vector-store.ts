// lib/rag/vector-store.ts
import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "vector-store.json");

export interface Document {
    id: string;
    type: "blog" | "project";
    slug: string;
    title: string;
    content: string;
    excerpt?: string;
    metadata?: Record<string, any>;
}

export interface SearchResult {
    id: string;
    score: number;
    payload: {
        type: string;
        slug: string;
        title: string;
        content: string;
        excerpt?: string;
    };
}

interface VectorEntry {
    id: string;
    vector: number[];
    payload: Document;
}

// Helper to calculate cosine similarity
function cosineSimilarity(a: number[], b: number[]): number {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }

    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Create collection (initialize file)
 */
export async function createCollection(): Promise<void> {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify([]));
        console.log("✅ Created local vector store");
    }
}

/**
 * Upsert documents with embeddings
 */
export async function upsertDocuments(
    documents: Document[],
    embeddings: number[][]
): Promise<void> {
    let store: VectorEntry[] = [];

    if (fs.existsSync(DB_PATH)) {
        store = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
    }

    documents.forEach((doc, index) => {
        // Remove existing if any
        store = store.filter((entry) => entry.id !== doc.id);

        // Add new
        store.push({
            id: doc.id,
            vector: embeddings[index],
            payload: doc,
        });
    });

    fs.writeFileSync(DB_PATH, JSON.stringify(store, null, 2));
    console.log(`✅ Upserted ${documents.length} documents to local store`);
}

/**
 * Search for similar documents
 */
export async function searchSimilar(
    queryEmbedding: number[],
    limit: number = 3,
    scoreThreshold: number = 0.2 // Lower threshold for local embeddings
): Promise<SearchResult[]> {
    if (!fs.existsSync(DB_PATH)) {
        return [];
    }

    const store: VectorEntry[] = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

    const results = store
        .map((entry) => ({
            id: entry.id,
            score: cosineSimilarity(queryEmbedding, entry.vector),
            payload: entry.payload,
        }))
        .filter((result) => result.score >= scoreThreshold)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);

    return results.map(r => ({
        id: r.id,
        score: r.score,
        payload: {
            type: r.payload.type,
            slug: r.payload.slug,
            title: r.payload.title,
            content: r.payload.content,
            excerpt: r.payload.excerpt
        }
    }));
}

/**
 * Delete collection
 */
export async function deleteCollection(): Promise<void> {
    if (fs.existsSync(DB_PATH)) {
        fs.unlinkSync(DB_PATH);
        console.log("✅ Deleted local vector store");
    }
}

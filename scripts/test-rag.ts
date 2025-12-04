// scripts/test-rag.ts
/**
 * Quick test script to verify RAG setup
 * Run with: npx tsx scripts/test-rag.ts
 */

import { generateEmbedding } from "../lib/rag/embeddings";
import { searchSimilar } from "../lib/rag/vector-store";
import fs from "fs";
import path from "path";

async function testRAG() {
    console.log("🧪 Testing RAG Setup...\n");

    try {
        // Test 1: Check Embeddings
        console.log("1️⃣ Testing local embeddings...");
        const testEmbedding = await generateEmbedding("Hello world");
        console.log(`   ✅ Generated embedding with ${testEmbedding.length} dimensions\n`);

        // Test 2: Check Vector Store
        console.log("2️⃣ Testing vector store...");
        const dbPath = path.join(process.cwd(), "data", "vector-store.json");
        if (fs.existsSync(dbPath)) {
            const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
            console.log(`   ✅ Vector store found with ${data.length} documents\n`);

            // Test 3: Test search
            console.log("3️⃣ Testing vector search...");
            const queryEmbedding = await generateEmbedding("web development projects");
            const results = await searchSimilar(queryEmbedding, 3, 0.2);

            console.log(`   ✅ Found ${results.length} results`);
            results.forEach((result, i) => {
                console.log(`   ${i + 1}. ${result.payload.title} (${(result.score * 100).toFixed(1)}% match)`);
            });
        } else {
            console.log("❌ Vector store not found. Run 'npm run ingest' first.\n");
        }

        console.log("\n✨ All tests passed!");
    } catch (error) {
        console.error("\n❌ Test failed:", error);
        process.exit(1);
    }
}

testRAG();

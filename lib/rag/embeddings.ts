// lib/rag/embeddings.ts
import { pipeline } from "@xenova/transformers";

// Singleton to hold the pipeline
let extractor: any = null;

async function getExtractor() {
  if (!extractor) {
    extractor = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }
  return extractor;
}

/**
 * Generate embedding for a single text
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const generate = await getExtractor();
    const output = await generate(text, { pooling: "mean", normalize: true });
    return Array.from(output.data);
  } catch (error) {
    console.error("Error generating embedding:", error);
    throw new Error("Failed to generate embedding");
  }
}

/**
 * Generate embeddings for multiple texts (batch processing)
 */
export async function generateBatchEmbeddings(
  texts: string[]
): Promise<number[][]> {
  try {
    const generate = await getExtractor();
    const embeddings: number[][] = [];

    for (const text of texts) {
      const output = await generate(text, { pooling: "mean", normalize: true });
      embeddings.push(Array.from(output.data));
    }

    return embeddings;
  } catch (error) {
    console.error("Error generating batch embeddings:", error);
    throw new Error("Failed to generate batch embeddings");
  }
}

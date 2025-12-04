# 🚀 Quick Start Guide - RAG Chatbot (Free Version)

## Abhi Kya Karna Hai? (What to do now?)

### Step 1: API Keys Setup Karo

1. **Gemini API Key** (already hai):
   - `.env.local` file mein check karo:
   ```env
   GEMINI_API_KEY=AIzaSyACI2lcFfyl-ibYAKdH94iJhYGmV1eIJVw
   ```
   
   **Note:** OpenAI API key ki zaroorat nahi hai! Hum local embeddings use kar rahe hain jo free hain.

### Step 2: Data Ingest Karo

Terminal mein run karo:
```bash
npm run ingest
```

Yeh aapke blog posts aur projects ko local vector database (`data/vector-store.json`) mein save karega.

### Step 3: Test Karo

```bash
npm run test-rag
```

Agar sab theek hai toh green checkmarks dikhenge ✅

### Step 4: Chatbot Use Karo

1. Dev server start karo: `npm run dev`
2. Visit: http://localhost:3000
3. Bottom-right corner mein AI assistant button click karo
4. Queries try karo:
   - "What blog posts do you have about SEO?"
   - "Tell me about your web development projects"

---

## Technical Details

- **Embeddings**: Local `all-MiniLM-L6-v2` model (Free, runs on CPU)
- **Vector DB**: Local JSON file (No Qdrant/Docker needed)
- **AI Response**: Gemini 1.5 Flash (Fast & Free tier)

## Troubleshooting

### "Failed to generate embedding"
- `npm install` run karo taake `@xenova/transformers` install ho jaye

### "Vector store not found"
- `npm run ingest` run karo

### Slow First Run?
- Pehli baar embedding model download hota hai (approx 90MB), uske baad fast chalega.

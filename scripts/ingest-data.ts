// scripts/ingest-data.ts
import fs from "fs";
import path from "path";
import { generateBatchEmbeddings } from "../lib/rag/embeddings";
import {
    createCollection,
    deleteCollection,
    upsertDocuments,
    Document,
} from "../lib/rag/vector-store";

async function ingestData() {
    console.log("🚀 Starting data ingestion...\n");

    try {
        // Step 1: Re-create collection to ensure correct vector size
        console.log("📦 Creating Qdrant collection...");
        try {
            await deleteCollection();
        } catch (e) {
            // Ignore if doesn't exist
        }
        await createCollection();

        // Step 2: Load blog posts
        console.log("\n📚 Loading blog posts...");
        const blogPostsPath = path.join(process.cwd(), "data", "blog-posts.json");
        const blogPosts = JSON.parse(fs.readFileSync(blogPostsPath, "utf-8"));
        console.log(`   Found ${blogPosts.length} blog posts`);

        // Step 3: Load projects
        console.log("\n🎨 Loading projects...");
        const projectsPath = path.join(process.cwd(), "data", "projects.json");
        const projects = JSON.parse(fs.readFileSync(projectsPath, "utf-8"));
        console.log(`   Found ${projects.length} projects`);

        // Step 4: Prepare documents
        console.log("\n📝 Preparing documents...");
        const documents: Document[] = [];
        const textsToEmbed: string[] = [];

        // Process blog posts
        blogPosts.forEach((post: any, index: number) => {
            const text = `${post.title}\n\n${post.excerpt}\n\n${post.content}`;
            documents.push({
                id: `blog_${index}`,
                type: "blog",
                slug: post.slug,
                title: post.title,
                content: post.content,
                excerpt: post.excerpt,
                metadata: {
                    author: post.author,
                    date: post.date,
                },
            });
            textsToEmbed.push(text);
        });

        // Process projects
        projects.forEach((project: any, index: number) => {
            const text = `${project.title}\n\n${project.description}\n\nTechnologies: ${project.technologies.join(", ")}`;
            documents.push({
                id: `project_${index}`,
                type: "project",
                slug: project.slug,
                title: project.title,
                content: project.description,
                excerpt: project.description.substring(0, 200),
                metadata: {
                    technologies: project.technologies,
                    category: project.category,
                },
            });
            textsToEmbed.push(text);
        });

        console.log(`   Prepared ${documents.length} documents`);

        // Step 5: Generate embeddings
        console.log("\n🔮 Generating embeddings...");
        console.log("   This may take a moment (using local model)...");
        const embeddings = await generateBatchEmbeddings(textsToEmbed);
        console.log(`   ✅ Generated ${embeddings.length} embeddings`);

        // Step 6: Upsert to Qdrant
        console.log("\n💾 Storing in vector database...");
        await upsertDocuments(documents, embeddings);

        console.log("\n✨ Data ingestion completed successfully!");
        console.log(`\n📊 Summary:`);
        console.log(`   - Blog posts: ${blogPosts.length}`);
        console.log(`   - Projects: ${projects.length}`);
        console.log(`   - Total documents: ${documents.length}`);
    } catch (error) {
        console.error("\n❌ Error during ingestion:", error);
        process.exit(1);
    }
}

// Run the ingestion
ingestData();

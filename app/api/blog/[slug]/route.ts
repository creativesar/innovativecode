import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  try {
    const filePath = path.join(process.cwd(), "data", "blog-posts.json");
    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    const blogPosts = JSON.parse(fileContent);

    const post = blogPosts.find((p: any) => p.slug === slug);

    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}

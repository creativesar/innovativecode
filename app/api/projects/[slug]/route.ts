import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const filePath = path.join(process.cwd(), "data", "projects.json");
    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    const projects = JSON.parse(fileContent);

    const project = projects.find((p: any) => p.slug === slug);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error(`Error fetching project with slug ${params.slug}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}

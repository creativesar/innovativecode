import { MetadataRoute } from 'next';

type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

// Assuming you have functions to fetch your dynamic data
// For example, from a CMS or a database
async function getBlogPosts() {
  // In a real app, you would fetch this data from your data source
  return [
    { slug: 'first-post', lastModified: new Date() },
    { slug: 'second-post', lastModified: new Date() },
  ];
}

async function getProjects() {
  // In a real app, you would fetch this data from your data source
  return [
    { slug: 'project-a', lastModified: new Date() },
    { slug: 'project-b', lastModified: new Date() },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as ChangeFrequency,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as ChangeFrequency,
      priority: 0.5,
    },
  ];

  const blogPosts = await getBlogPosts();
  const projectPages = await getProjects();

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.6,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projectPages.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.lastModified,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}

import BlogDetailPage, { generateMetadata as generateSlugMetadata } from "@/app/blogs/[slug]/page";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateSlugMetadata({
    params: Promise.resolve({ slug: "bradford-life-skills-routines-parent-guide" })
  });
}

export default async function Page() {
  return BlogDetailPage({
    params: Promise.resolve({ slug: "bradford-life-skills-routines-parent-guide" })
  });
}

import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const entries = await readdir("./blogs/", { withFileTypes: true });
  const blogDirectories = entries.filter((blog) => blog.isDirectory());
  return blogDirectories.map((blog) => ({
    slug: blog.name,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const fileRoute = `./blogs/${params.slug}/page.mdx`;
  const fileContents = await readFile(fileRoute, "utf8");
  let { data } = matter(fileContents);
  return {
    title: data.title + " | Server Side Sundays",
    description: data.summary,
  };
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const fileRoute = `./blogs/${slug}/page.mdx`;
  const fileContents = await readFile(fileRoute, "utf8").catch(notFound);
  const { content, data } = matter(fileContents);

  return (
    <div>
      <MDXRemote source={content} />
    </div>
  );
}

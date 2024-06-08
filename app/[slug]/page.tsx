import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import React from "react";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params);

  const fileRoute = `./public/${params.slug}/page.mdx`;
  const fileContents = await readFile(fileRoute, "utf8").catch(notFound);
  const { content, data } = matter(fileContents);

  console.log(content, data);

  return (
    <div>
      <MDXRemote source={content} />
    </div>
  );
}

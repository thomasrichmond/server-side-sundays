import Link from "@/components/Link";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import materialThemeDarker from "tm-themes/themes/material-theme-darker.json";

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
  const fileContents = await readFile(fileRoute, "utf8").catch(notFound);
  let { data } = matter(fileContents);
  return {
    title: `${data.title} | Server Side Sundays`,
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
  const blogDate = new Date(data.date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let blogComponents = {};
  try {
    blogComponents = await import(`../../blogs/${slug}/components.ts`);
  } catch (e: any) {
    if (e.code !== "MODULE_NOT_FOUND") {
      throw e;
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className=" font-montserrat  text-4xl ">{data.title}</h2>
        <p className="font-merriweather italic ">{blogDate}</p>
      </div>
      <div>
        <MDXRemote
          source={content}
          components={{
            Link,
            ...blogComponents,
          }}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: materialThemeDarker,
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </div>
  );
}

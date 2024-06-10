import Card from "@/components/Card";
import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";

export default async function Home() {
  const entries = await readdir("./blogs/", { withFileTypes: true });
  const blogDirectories = entries.filter((blog) => blog.isDirectory());
  const blogContent = Promise.all(
    blogDirectories.map(async (directory) => {
      return {
        fileContent: await readFile(`./blogs/${directory.name}/page.mdx`),
        route: `/${directory.name}`,
      };
    })
  );
  const cardContent = await blogContent;

  return (
    <main className="py-8 h-full">
      <div className="flex flex-col gap-10">
        {cardContent.map((blog) => {
          const { data, content } = matter(blog.fileContent);
          const readTime = Math.ceil(content.split(" ").length / 238);

          return (
            <Card
              key={`blog-${data.title}`}
              title={data.title}
              date={data.date}
              summary={data.summary}
              route={blog.route}
              readTime={readTime}
            />
          );
        })}
      </div>
    </main>
  );
}

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
    <main className="">
      <>
        {cardContent.map((blog) => {
          const { data } = matter(blog.fileContent);
          return (
            <Card
              key={`blog-${data.title}`}
              title={data.title}
              date={data.date}
              summary={data.summary}
              route={blog.route}
            />
          );
        })}
      </>
    </main>
  );
}

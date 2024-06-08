import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";

export default function Home() {
  return (
    <main className="">
      {/* //TODO read in local files dynamically, set static paths so no page is rendering */}
      <h1>hello world</h1>
    </main>
  );
}

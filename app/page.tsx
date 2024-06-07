import { MDXRemote } from "next-mdx-remote/rsc";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* //TODO read in local files dynamically, set static paths so no page is rendering */}
      <MDXRemote source={``} />
    </main>
  );
}

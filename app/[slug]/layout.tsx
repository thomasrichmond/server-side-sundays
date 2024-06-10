import BlogFooter from "@/components/BlogFooter";
import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-8">
      {children}
      <BlogFooter />
    </main>
  );
}

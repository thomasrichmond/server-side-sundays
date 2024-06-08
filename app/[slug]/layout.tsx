export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <h1>Hi layout footer</h1>
    </div>
  );
}

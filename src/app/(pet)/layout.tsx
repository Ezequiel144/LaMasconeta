// lrc
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <div className=" sm:px-0">{children}</div>
    </main>
  );
}

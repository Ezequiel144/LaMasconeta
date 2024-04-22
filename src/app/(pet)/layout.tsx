import Header from "@/components/ui/Header/Header";

// lrc
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      {/* <TopMenu />
      <Sidebar /> */}
      <Header />
      <div className=" sm:px-0">{children}</div>
    </main>
  );
}

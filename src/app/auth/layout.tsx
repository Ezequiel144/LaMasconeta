// lrc
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="flex justify-center">
      <div className="w-full relative">{children}</div>
    </main>
  );
}

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SidebarProfile } from "./components";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/");
  }
  return (
    <div className="w-full min-h-screen px-6 py-2 flex">
      <SidebarProfile />
      {children}
    </div>
  );
}

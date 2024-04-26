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
    <div className="w-full max-w-7xl mx-auto min-h-screen px-6 py-2 flex gap-y-10 gap-x-32 lg:gap-x-28 flex-col md:flex-row">
      <SidebarProfile />
      <div className="w-full md:w-8/12 bg-[#F8F8F8] rounded-xl p-5">{children}</div>
    </div>
  );
}

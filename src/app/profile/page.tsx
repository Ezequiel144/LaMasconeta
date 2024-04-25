import { redirect } from "next/navigation";

export default function ProfilePage() {
  redirect("/profile/info");

  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}

import { auth } from "@/auth";

export default async function ProfilePage() {
const user= await auth()
console.log(user?.user);

  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
}

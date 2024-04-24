import { getPets } from "@/actions";

export default async function AdminPage() {
  const posts = await getPets();

  return (
    <div>
      <pre>
        <h1>{JSON.stringify(posts, null, 2)}</h1>
      </pre>
    </div>
  );
}

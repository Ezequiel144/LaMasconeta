import { getPosts } from "@/actions/post/get-posts";

export default async function AdminPage() {
  const posts = await getPosts();

  return (
    <div>
      <pre>
        <h1>{JSON.stringify(posts, null, 2)}</h1>
      </pre>
    </div>
  );
}

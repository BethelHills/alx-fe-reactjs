import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default function PostsComponent() {
  const { data, isLoading, error, refetch } = useQuery(
    "posts",
    fetchPosts
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <button onClick={refetch}>Refetch posts</button>
      {data.slice(0, 10).map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

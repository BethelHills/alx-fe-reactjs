import { useQuery } from '@tanstack/react-query'

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function PostsComponent() {
  const { data, error, isLoading } = useQuery(['posts'], fetchPosts)

  if (isLoading) return <div>Loading posts…</div>
  if (error) return <div className="error">Error: {error.message}</div>

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.slice(0, 6).map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

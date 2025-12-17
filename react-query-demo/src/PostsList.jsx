import { useQuery } from '@tanstack/react-query'

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function PostsList() {
  const { data, error, isLoading } = useQuery(['posts'], fetchPosts)

  if (isLoading) return <div>Loading posts…</div>
  if (error) return <div className="error">Error: {error.message}</div>

  return (
    <div>
      <ul>
        {data.slice(0, 20).map((p) => (
          <li key={p.id} className="post">
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

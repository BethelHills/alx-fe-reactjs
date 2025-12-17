import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function PostsComponent() {
  const [staleMs] = useState(1000 * 10)
  const [cacheMs] = useState(1000 * 60 * 5)

  const { data, error, isLoading, isFetching, refetch, dataUpdatedAt } = useQuery(
    ['posts'],
    fetchPosts,
    {
      staleTime: staleMs,
      cacheTime: cacheMs,
    }
  )

  if (isLoading) return <div>Loading posts…</div>
  if (error) return <div className="error">Error: {error.message}</div>

  const lastFetched = dataUpdatedAt ? new Date(dataUpdatedAt).toLocaleTimeString() : 'unknown'

  return (
    <div>
      <h2>Posts</h2>
      <div style={{ marginBottom: 8 }}>
        <button onClick={() => refetch()}>Refetch</button>
        <span style={{ marginLeft: 12 }}>{isFetching ? 'Refreshing…' : `Last fetched: ${lastFetched}`}</span>
      </div>
      <ul>
        {data.slice(0, 10).map((p) => (
          <li key={p.id} style={{ marginBottom: 12 }}>
            <strong>{p.title}</strong>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

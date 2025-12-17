import { useQuery } from '@tanstack/react-query'

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function PostsList() {
  const queryOptions = {
    // keep data fresh for 10 seconds; useful for demonstrating cache hits
    staleTime: 1000 * 10,
    // keep cache for 5 minutes
    cacheTime: 1000 * 60 * 5,
  }

  const { data, error, isLoading, isFetching, refetch, dataUpdatedAt } = useQuery(['posts'], fetchPosts, queryOptions)

  if (isLoading) return <div>Loading posts…</div>
  if (error) return <div className="error">Error: {error.message}</div>

  return (
    <div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? 'Refetching…' : 'Refetch'}
        </button>
        <div style={{ fontSize: 12, color: '#666' }}>
          Last fetched: {dataUpdatedAt ? new Date(dataUpdatedAt).toLocaleTimeString() : '—'}
        </div>
      </div>

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

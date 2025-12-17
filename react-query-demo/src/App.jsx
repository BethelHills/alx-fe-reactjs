import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsList from './PostsList'
import { useState } from 'react'

const queryClient = new QueryClient()

export default function App() {
  const [visible, setVisible] = useState(true)
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>React Query - Posts</h1>
        <div style={{ marginBottom: 12 }}>
          <button onClick={() => setVisible((v) => !v)}>{visible ? 'Hide' : 'Show'} Posts</button>
        </div>
        {visible && <PostsList />}
      </div>
    </QueryClientProvider>
  )
}

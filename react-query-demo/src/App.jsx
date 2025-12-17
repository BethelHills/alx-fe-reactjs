import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsList from './PostsList'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>React Query - Posts</h1>
        <PostsList />
      </div>
    </QueryClientProvider>
  )
}

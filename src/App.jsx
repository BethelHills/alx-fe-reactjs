import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsComponent from './alx-react-app/src/components/PostsComponent'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
        <h1>Root App</h1>
        <hr style={{ margin: '12px 0' }} />
        <PostsComponent />
      </div>
    </QueryClientProvider>
  )
}

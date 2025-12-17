import GitHubSearch from './components/GitHubSearch'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsComponent from './components/PostsComponent'

const queryClient = new QueryClient()

function App(){
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{fontFamily: 'Arial, sans-serif', padding: 20}}>
        <header style={{marginBottom:20}}>
          <h1>GitHub User Search</h1>
        </header>
        <main>
          <GitHubSearch />
          <hr style={{margin: '24px 0'}} />
          <PostsComponent />
        </main>
        <footer style={{marginTop:24, color:'#666'}}>
          <small>Built with Vite + React</small>
        </footer>
      </div>
    </QueryClientProvider>
  )
}

export default App

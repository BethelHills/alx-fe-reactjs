import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsComponent from '../alx-react-app/src/components/PostsComponent'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
        <hr style={{ marginTop: 18 }} />
        <PostsComponent />
      </Router>
    </QueryClientProvider>
  )
}

export default App

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

/**
 * Main App Component
 * Sets up routing and layout for the Recipe Sharing Application
 * Includes navigation between home, favorites, recommendations, and recipe details
 */
function App() {
  const navStyle = {
    display: 'flex',
    gap: '20px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    marginBottom: '20px'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    padding: '5px 10px',
    borderRadius: '4px',
    backgroundColor: '#fff',
    border: '1px solid #ddd'
  };

  return (
    <BrowserRouter>
      <div>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/favorites" style={linkStyle}>Favorites</Link>
          <Link to="/recommendations" style={linkStyle}>Recommendations</Link>
        </nav>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
            </>
          } />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

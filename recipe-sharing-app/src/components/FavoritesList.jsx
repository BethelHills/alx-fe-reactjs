import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

/**
 * FavoritesList Component
 * Displays all recipes that the user has marked as favorites
 * Maps favorite IDs from the store to actual recipe objects
 */
const FavoritesList = () => {
  // Get favorite recipe IDs and map them to recipe objects
  // Filters out any undefined recipes (in case a recipe was deleted)
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter((recipe) => recipe !== undefined)
  );

  if (favorites.length === 0) {
    return (
      <div>
        <h2>My Favorites</h2>
        <p>No favorite recipes yet. Start adding favorites to see them here!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;


import useRecipeStore from './recipeStore';

/**
 * FavoriteButton Component
 * Allows users to add or remove recipes from their favorites
 * Toggles favorite status on click
 */
const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Check if recipe is already in favorites
  const isFavorite = favorites.includes(recipeId);

  const handleToggle = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button onClick={handleToggle}>
      {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;


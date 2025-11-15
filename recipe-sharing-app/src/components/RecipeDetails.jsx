import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton';

/**
 * RecipeDetails Component
 * Displays detailed information about a single recipe
 * Includes options to edit, delete, and favorite the recipe
 */
const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipeIdNumber = Number(recipeId);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeIdNumber)
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <FavoriteButton recipeId={recipeIdNumber} />
      <EditRecipeForm recipeId={recipeIdNumber} />
      <DeleteRecipeButton recipeId={recipeIdNumber} />
    </div>
  );
};

export default RecipeDetails;


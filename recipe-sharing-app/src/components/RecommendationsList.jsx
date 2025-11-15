import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

/**
 * RecommendationsList Component
 * Displays personalized recipe recommendations based on user's favorites
 * Automatically generates recommendations when component mounts
 * Recommendations exclude recipes already in favorites to provide variety
 */
const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  // Generate recommendations when component mounts or when function changes
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return (
      <div>
        <h2>Recommendations</h2>
        <p>No recommendations available at the moment. Add more recipes to get personalized recommendations!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.map((recipe) => (
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

export default RecommendationsList;


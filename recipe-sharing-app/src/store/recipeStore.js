import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  addRecipe: (newRecipe) => {
    set((state) => ({ recipes: [...state.recipes, newRecipe] }));
    get().filterRecipes();
  },
  updateRecipe: (id, updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      )
    }));
    get().filterRecipes();
  },
  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id)
    }));
    get().filterRecipes();
  },
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  // Favorites Management
  // Adds a recipe to favorites if not already present (prevents duplicates)
  addFavorite: (recipeId) => set((state) => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state;
  }),
  // Removes a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId)
  })),
  // Recommendations Generation
  // Generates personalized recommendations by filtering recipes:
  // - Excludes recipes already in favorites
  // - Uses random selection (mock implementation for demonstration)
  // In production, this could use machine learning or collaborative filtering
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      !state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  })
}));

export default useRecipeStore;


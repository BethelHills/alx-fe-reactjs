import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddRecipeForm() {
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instructions, setInstructions] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  function validate() {
    if (!title.trim()) return 'Title is required.'
  const ings = ingredients.split('\n').map((s) => s.trim()).filter(Boolean)
  if (ings.length === 0) return 'Please provide at least one ingredient.'
  if (ings.length < 2) return 'Please provide at least two ingredients.'
    if (!instructions.trim()) return 'Please provide at least one instruction step.'
    return null
  }

  function handleSubmit(e) {
    e.preventDefault()
    const err = validate()
    if (err) {
      setError(err)
      return
    }

    const parsedIngredients = ingredients.split('\n').map((s) => s.trim()).filter(Boolean)
    const parsedInstructions = instructions.split('\n').map((s) => s.trim()).filter(Boolean)

    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      summary: parsedIngredients[0] || '',
      image: 'https://via.placeholder.com/300x200.png?text=New+Recipe',
      ingredients: parsedIngredients,
      instructions: parsedInstructions,
    }

    try {
      const existing = JSON.parse(localStorage.getItem('userRecipes') || '[]')
      existing.unshift(newRecipe)
      localStorage.setItem('userRecipes', JSON.stringify(existing))
      navigate('/')
    } catch (e) {
      setError('Failed to save recipe locally.')
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add a New Recipe</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          {error && <div className="text-red-600 mb-3">{error}</div>}

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g. Spaghetti Carbonara"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Ingredients (one per line)</label>
                <div className="text-xs text-gray-500">Lines: {ingredients.split('\n').filter(Boolean).length}</div>
              </div>
              <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={`200g spaghetti\n100g pancetta\n2 large eggs`}
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Instructions (one step per line)</label>
                <div className="text-xs text-gray-500">Lines: {instructions.split('\n').filter(Boolean).length}</div>
              </div>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                rows={6}
                className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={`Boil pasta until al dente.\nFry pancetta until crispy.`}
              />
            </div>

            <div className="flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={Boolean(validate())}
                className={`px-4 py-2 rounded text-white ${validate() ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                Add Recipe
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function RecipeDetail() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    fetch('/src/data.json')
      .then((r) => r.json())
      .then((data) => {
        const found = data.find((it) => String(it.id) === String(id))
        setRecipe(found || null)
      })
  }, [id])

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-300">Recipe not found.</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <Link to="/" className="text-sm text-blue-600 hover:underline">← Back</Link>
        <h1 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mt-4" />
        <p className="mt-4 text-gray-600 dark:text-gray-300">{recipe.summary}</p>

        <section className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Ingredients</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-200">
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Instructions</h2>
          <ol className="list-decimal list-inside mt-2 text-gray-700 dark:text-gray-200 space-y-2">
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  )
}

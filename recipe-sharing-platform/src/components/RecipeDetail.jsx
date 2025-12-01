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
      <div className="max-w-5xl mx-auto">
        <div className="mb-4">
          <Link to="/" className="text-sm text-blue-600 hover:underline">← Back</Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 grid gap-6 grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{recipe.title}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{recipe.summary}</p>
            <img src={recipe.image} alt={recipe.title} className="w-full h-64 md:h-80 object-cover rounded mt-4 shadow-sm" />

            <section className="mt-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Instructions</h2>
              <ol className="list-decimal list-inside mt-2 text-gray-700 dark:text-gray-200 space-y-3">
                {recipe.instructions.map((step, i) => (
                  <li key={i} className="leading-relaxed">{step}</li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-900 rounded p-4">
              <h3 className="text-md font-semibold text-gray-900 dark:text-white">Ingredients</h3>
              <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-gray-200 space-y-1">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 text-sm text-gray-500">Servings and prep time can be added here.</div>
          </aside>
        </div>
      </div>
    </main>
  )
}

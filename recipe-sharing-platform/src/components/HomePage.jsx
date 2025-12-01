import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetch('/src/data.json')
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return
  // merge local user-submitted recipes (from localStorage) with base data
  const user = JSON.parse(localStorage.getItem('userRecipes') || '[]')
  setRecipes([...user, ...data])
      })
      .catch(() => setRecipes([]))
      .finally(() => mounted && setLoading(false))

    return () => {
      mounted = false
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-300">Loading recipes…</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Recipe Sharing Platform</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Browse and discover community recipes.</p>
        </header>

        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {recipes.map((r) => (
            <article
              key={r.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 flex flex-col"
              aria-labelledby={`recipe-${r.id}`}
            >
              <div className="w-full h-48 sm:h-48 md:h-40 lg:h-40 overflow-hidden">
                <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h2 id={`recipe-${r.id}`} className="text-lg font-semibold text-gray-900 dark:text-white">{r.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{r.summary}</p>
                <div className="mt-4 flex items-center justify-between">
                  <Link to={`/recipe/${r.id}`} className="text-blue-600 hover:underline">View</Link>
                  <button className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}

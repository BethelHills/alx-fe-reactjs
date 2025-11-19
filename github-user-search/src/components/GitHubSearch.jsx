import { useState } from 'react'
import { fetchUserData, searchUsers } from '../services/githubService'
import UserCard from './UserCard'
import SearchInput from './SearchInput'

export default function GitHubSearch(){
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [minRepos, setMinRepos] = useState('')
  const [advanced, setAdvanced] = useState(false)

  const [results, setResults] = useState([])
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSearch(e){
    e.preventDefault()
    // if empty query and not advanced, do nothing
    if (!query && !advanced) return
    setLoading(true)
    setError(null)
    setResults([])
    setPage(1)

    try{
      if (advanced) {
        const data = await searchUsers({ q: query, location: location || undefined, minRepos: minRepos || undefined }, 1, 30)
        setResults(data.items || [])
        setTotalCount(data.total_count || 0)
      } else {
        // simple lookup
        const user = await fetchUserData(query)
        setResults([user])
        setTotalCount(1)
      }
    }catch(err){
      setError('Looks like we cant find the user')
    }finally{
      setLoading(false)
    }
  }

  async function loadMore(){
    const next = page + 1
    setLoading(true)
    try{
      const data = await searchUsers({ q: query, location: location || undefined, minRepos: minRepos || undefined }, next, 30)
      setResults(prev => [...prev, ...(data.items || [])])
      setPage(next)
    }catch(err){
      setError('Failed to load more results')
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4" style={{maxWidth:640}}>
      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={advanced} onChange={e => setAdvanced(e.target.checked)} />
          <span>Advanced search</span>
        </label>
      </div>

      <form onSubmit={handleSearch} className="space-y-3">
        <div>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search term (username or keyword)" className="w-full border rounded px-3 py-2" />
        </div>

        {advanced && (
          <div className="grid grid-cols-2 gap-2">
            <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Location (e.g. San Francisco)" className="border rounded px-3 py-2" />
            <input value={minRepos} onChange={e => setMinRepos(e.target.value)} placeholder="Min repos" type="number" className="border rounded px-3 py-2" />
          </div>
        )}

        <div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
        </div>
      </form>

      <div className="mt-4">
        {loading && <p>Loading...</p>}
        {error && <p style={{color:'crimson'}}>{error}</p>}
        {results.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm text-gray-600">Showing {results.length} of {totalCount} results</p>
            {results.map((r, idx) => (
              // Note: search results from /search/users return limited fields; fetchUserData provides full details.
              <div key={r.id || r.login || idx}>
                {/* If r has login but not name, we can show basic card */}
                <UserCard user={r} />
              </div>
            ))}

            {totalCount > results.length && (
              <div className="text-center">
                <button onClick={loadMore} className="px-4 py-2 border rounded">Load more</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

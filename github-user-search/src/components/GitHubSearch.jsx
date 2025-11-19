import { useState } from 'react'
import GitHubService from '../services/github'
import UserCard from './UserCard'

export default function GitHubSearch(){
  const [query, setQuery] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSearch(e){
    e.preventDefault()
    if (!query) return
    setLoading(true)
    setError(null)
    setUser(null)
    try{
      const data = await GitHubService.getUser(query)
      setUser(data)
    }catch(err){
      setError(err.message || 'Failed to fetch user')
    }finally{
      setLoading(false)
    }
  }

  return (
    <div style={{maxWidth:640, margin:'0 auto'}}>
      <form onSubmit={handleSearch} style={{display:'flex', gap:8, marginBottom:12}}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter GitHub username"
          style={{flex:1, padding:8, fontSize:16}}
        />
        <button type="submit" style={{padding:'8px 12px'}}>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{color:'crimson'}}>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  )
}

import { useState } from 'react'
import GitHubService from '../services/github'
import { fetchUserData } from '../services/githubService'
import UserCard from './UserCard'
import SearchInput from './SearchInput'

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
      // Prefer the explicit fetchUserData service
      const data = await fetchUserData(query)
      setUser(data)
    }catch(err){
      // Show the required error message
      setError('Looks like we cant find the user')
    }finally{
      setLoading(false)
    }
  }

  return (
    <div style={{maxWidth:640, margin:'0 auto'}}>
      <SearchInput
        value={query}
        onChange={setQuery}
        onSubmit={handleSearch}
        placeholder="Enter GitHub username"
      />

  {loading && <p>Loading...</p>}
  {error && <p style={{color:'crimson'}}>{error}</p>}
  {user && <UserCard user={user} />}
    </div>
  )
}

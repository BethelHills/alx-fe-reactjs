import { useEffect, useState } from 'react'
import { fetchUserData } from '../services/githubService'

export default function UserCard({user}){
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    let mounted = true
    async function load(){
      // If user already has public_repos or location, no need to fetch
      if (user.public_repos !== undefined || user.location !== undefined) return
      try{
        const d = await fetchUserData(user.login || user.login)
        if (mounted) setDetail(d)
      }catch(err){
        // ignore
      }
    }
    load()
    return () => { mounted = false }
  }, [user])

  const u = detail || user

  return (
    <div className="border p-3 rounded flex gap-3 items-center">
      <img src={u.avatar_url} alt="avatar" style={{width:72, height:72, borderRadius:8}} />
      <div>
        <h2 className="text-lg font-semibold">{u.name || u.login}</h2>
        {u.bio && <p className="text-sm text-gray-700">{u.bio}</p>}
        <p className="text-sm text-gray-500">{u.location ? `${u.location} · ` : ''}Followers: {u.followers ?? 'N/A'} — Public repos: {u.public_repos ?? 'N/A'}</p>
        <a href={u.html_url} target="_blank" rel="noreferrer" className="text-blue-600">View on GitHub</a>
      </div>
    </div>
  )
}

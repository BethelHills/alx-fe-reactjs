export default function UserCard({user}){
  return (
    <div style={{border:'1px solid #ddd', padding:12, borderRadius:6, display:'flex', gap:12, alignItems:'center'}}>
      <img src={user.avatar_url} alt="avatar" style={{width:72, height:72, borderRadius:8}} />
      <div>
        <h2 style={{margin:0}}>{user.name || user.login}</h2>
        <p style={{margin:'6px 0 0 0'}}>{user.bio}</p>
        <p style={{margin:'6px 0 0 0', color:'#555'}}>Followers: {user.followers} — Public repos: {user.public_repos}</p>
        <a href={user.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
      </div>
    </div>
  )
}

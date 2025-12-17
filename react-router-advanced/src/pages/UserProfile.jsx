import { useParams } from 'react-router-dom'

export default function UserProfile(){
  const { username } = useParams()
  return (
    <div style={{ padding: 12 }}>
      <h2>User: {username}</h2>
      <p>Dynamic route example for user profiles.</p>
    </div>
  )
}

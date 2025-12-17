import { useNavigate } from 'react-router-dom'

export default function Login(){
  const nav = useNavigate()
  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <p>This demo doesn't actually authenticate. Click to continue.</p>
      <button onClick={() => nav('/')}>Continue</button>
    </div>
  )
}

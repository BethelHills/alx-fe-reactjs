import { useNavigate } from 'react-router-dom'
import { login } from '../auth'

export default function Login(){
  const nav = useNavigate()
  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <p>Click to simulate login.</p>
      <button onClick={() => { login(); nav('/dashboard') }}>Login</button>
    </div>
  )
}

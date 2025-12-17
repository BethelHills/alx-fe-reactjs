import { useState } from 'react'

export default function RegistrationForm({ onSubmit }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!username.trim() || !email.trim() || !password) {
      setError('All fields are required')
      return
    }
    setError(null)
    onSubmit?.({ username: username.trim(), email: email.trim(), password })
  }

  return (
    <div className="card">
      <h2>Registration (Controlled)</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input name="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Email</label>
        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

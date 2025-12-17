import { useState } from 'react'

export default function RegistrationForm({ onSubmit }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [errors, setErrors] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = {}
    if (!username.trim()) newErrors.username = 'Username is required.'
    if (!email) newErrors.email = 'Email is required.'
    if (!password) newErrors.password = 'Password is required.'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setError('Please fix the errors below.')
      return
    }

    setErrors({})
    setError(null)
    onSubmit?.({ username: username.trim(), email: email.trim(), password })
  }

  return (
    <div className="card">
      <h2>Registration (Controlled)</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
  <label>Username</label>
  <input name="username" value={username} onChange={(e) => { setUsername(e.target.value); if (errors.username) setErrors(s => ({...s, username: undefined})); }} />
  {errors.username && <div className="error">{errors.username}</div>}

        <label>Email</label>
  <input name="email" value={email} onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors(s => ({...s, email: undefined})); }} />
  {errors.email && <div className="error">{errors.email}</div>}

        <label>Password</label>
  <input name="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value); if (errors.password) setErrors(s => ({...s, password: undefined})); }} />
  {errors.password && <div className="error">{errors.password}</div>}

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

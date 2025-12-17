import { useState } from 'react'

export default function ControlledForm() {
  const [values, setValues] = useState({ name: '', email: '', password: '' })
  const [message, setMessage] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // mock API call
    setMessage('Submitted (controlled): ' + JSON.stringify(values))
  }

  return (
    <div className="card">
      <h2>Controlled Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={values.name} onChange={handleChange} />
        <label>Email</label>
        <input name="email" value={values.email} onChange={handleChange} />
        <label>Password</label>
        <input name="password" type="password" value={values.password} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      {message && <div className="notice">{message}</div>}
    </div>
  )
}

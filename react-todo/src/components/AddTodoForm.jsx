import { useState } from 'react'

export default function AddTodoForm({ onAdd }){
  const [value, setValue] = useState('')
  return (
    <form onSubmit={(e) => { e.preventDefault(); if (value.trim()) { onAdd(value.trim()); setValue('') } }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="New todo" />
      <button type="submit">Add</button>
    </form>
  )
}

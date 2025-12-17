import { useState } from 'react'
import AddTodoForm from './AddTodoForm'

export default function TodoList(){
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Write tests', completed: false }
  ])

  function addTodo(text){
    setTodos((t) => [...t, { id: Date.now(), text, completed: false }])
  }

  function toggleTodo(id){
    setTodos((t) => t.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  function deleteTodo(id){
    setTodos((t) => t.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }} onClick={() => toggleTodo(todo.id)}>
              {todo.text}
            </label>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: 8 }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

import { render, screen, fireEvent } from '@testing-library/react'
import TodoList from '../components/TodoList'

describe('TodoList component', () => {
  test('renders initial todos', () => {
    render(<TodoList />)
    expect(screen.getByText('Buy milk')).toBeInTheDocument()
    expect(screen.getByText('Write tests')).toBeInTheDocument()
  })

  test('adds a new todo', () => {
    render(<TodoList />)
    const input = screen.getByPlaceholderText('New todo')
    const addButton = screen.getByText('Add')
    fireEvent.change(input, { target: { value: 'Walk dog' } })
    fireEvent.click(addButton)
    expect(screen.getByText('Walk dog')).toBeInTheDocument()
  })

  test('toggles a todo', () => {
    render(<TodoList />)
    const item = screen.getByText('Buy milk')
    fireEvent.click(item)
    expect(item).toHaveStyle('text-decoration: line-through')
    fireEvent.click(item)
    expect(item).toHaveStyle('text-decoration: none')
  })

  test('deletes a todo', () => {
    render(<TodoList />)
    const deleteButtons = screen.getAllByText('Delete')
    const firstDelete = deleteButtons[0]
    fireEvent.click(firstDelete)
    expect(screen.queryByText('Buy milk')).not.toBeInTheDocument()
  })
})

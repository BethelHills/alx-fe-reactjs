import { render, screen, fireEvent } from '@testing-library/react'
import TodoList from './TodoList'

test('renders initial todos and can add, toggle, and delete', () => {
  render(<TodoList />)

  // initial items
  expect(screen.getByText('Buy milk')).toBeInTheDocument()
  expect(screen.getByText('Write tests')).toBeInTheDocument()

  // add a new todo
  const input = screen.getByPlaceholderText('New todo')
  const addButton = screen.getByText('Add')
  fireEvent.change(input, { target: { value: 'New item' } })
  fireEvent.click(addButton)
  expect(screen.getByText('New item')).toBeInTheDocument()

  // toggle the new item
  const newItem = screen.getByText('New item')
  fireEvent.click(newItem)
  // toggled items use line-through style
  expect(newItem).toHaveStyle('text-decoration: line-through')

  // delete the new item
  const deleteButtons = screen.getAllByText('Delete')
  const lastDelete = deleteButtons[deleteButtons.length - 1]
  fireEvent.click(lastDelete)
  expect(screen.queryByText('New item')).not.toBeInTheDocument()
})

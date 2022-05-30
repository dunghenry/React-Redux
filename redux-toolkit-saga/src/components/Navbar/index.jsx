import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className="navbar">
      <h1>React + Redux Saga + Redux Toolkit</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total: {todos.length}</li>
      </ul>
    </div>
  )
}

export default Navbar
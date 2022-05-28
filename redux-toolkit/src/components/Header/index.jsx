import React from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  return (
    <div className="navbar">
      <h1>React + Redux Toolkit + Express + MongoDB</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total: {todos.length}</li>
      </ul>
    </div>
  );
};

export default Header;

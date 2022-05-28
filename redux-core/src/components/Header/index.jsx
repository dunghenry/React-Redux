import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
const Header = ({ todos }) => {
  return (
    <div className="navbar">
      <h1>React + Redux + Express + MongoDB</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total: {todos.length}</li>
      </ul>
    </div>
  )
}
Header.propTypes = {
  todos: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
  todos: state.todosState.todos
})
export default connect(mapStateToProps, {})(Header)
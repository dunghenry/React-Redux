import React from 'react'
import TodoForm from '../Form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos, markComplete, deleteTodo} from '../../redux/actions/todoActions';
const Todos = ({ todos, getTodos, markComplete, deleteTodo}) => {
  React.useEffect(() => {
    getTodos();
  }, [])
  return (
    <div className="todo-list">
      <TodoForm />

      <ul>
        {todos.map(todo => (
          <li
            className={todo.completed ? 'completed' : ''}
            key={todo._id}
          >
            <div>
              <h3> {todo.title}</h3>
              <p>{todo.description}</p>
            </div>
            <div className="btn">
                <input checked={todo.completed} type="checkbox" style={{ marginTop: '5px' }} onChange={() => markComplete(todo._id)} />
                <button onClick={() => deleteTodo(todo._id)}>x</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  return {
    todos: state.todosState.todos
  }
}
export default connect(mapStateToProps, { getTodos, markComplete, deleteTodo})(Todos);
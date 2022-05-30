import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodosFetch, addTodoStart, deleteTodoStart } from '../../store/reducers/todosSlice';
const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos)
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  React.useEffect(() => {
    dispatch(getTodosFetch())
  }, [dispatch])
  
  const handleSubmit = (e) => {
    const todo = {
      title,
      description
    }
    e.preventDefault();
    dispatch(addTodoStart(todo));
    setTitle('')
    setDescription('')
  }
  const handleDelete = (id) => {
    dispatch(deleteTodoStart(id));
  }
  return (
    <div className="todo-list">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title : </label>
            <input type="text" placeholder="Enter todo..." value={title} onChange={ (e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label>Des : </label>
            <input type="text" placeholder="Enter todo..." value={description} onChange={e => setDescription(e.target.value)} />
          </div>
          <input type="submit" />
        </form>
      </div>
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
              {/* <input type="checkbox" style={{ marginTop: '5px' }} /> */}
              <button onClick={() => handleDelete(todo._id)}>x</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
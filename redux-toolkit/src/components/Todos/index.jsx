import React from "react";
import Form from "./../Form";
import { useSelector, useDispatch } from "react-redux";
import { markComplete, deleteTodo, getTodos, getData, getDataTwo} from "../../store/reducers/todosSlice";
const Todos = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  const dispatch = useDispatch();
  React.useEffect(() => {
    // dispatch(getTodos())
    // dispatch(getData())
    dispatch(getDataTwo())
  }, [dispatch])
  const toggleComplete = (id) => {
    dispatch(markComplete(id))
  }
  const handleDelete = (id) => {
    // dispatch(deleteTodo(id));
    dispatch(deleteTodo(id))
  };
  return (
    <div className="todo-list">
      <Form />
      <ul>
        {todos.map((todo) => (
          <li className={todo.completed ? "completed" : ""} key={todo._id}>
            <div>
              <h3> {todo.title}</h3>
              <p>{todo.description}</p>
            </div>
            <div className="btn">
              <input
                checked={todo.completed}
                type="checkbox"
                style={{ marginTop: "5px" }}
                onChange={() => toggleComplete(todo._id)}
              />
              <button onClick={() => handleDelete(todo._id)}>x</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

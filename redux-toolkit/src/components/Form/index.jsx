import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/reducers/todosSlice";
const Form = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const inputRef = React.useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: Math.floor(Math.random() * 10000),
      title,
      description,
    };
    // dispatch(addTodo(todo))
    dispatch(addTodo({ title, description }));
    setTitle("");
    setDescription("");
    inputRef.current.focus();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title : </label>
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Des : </label>
          <input
            type="text"
            placeholder="Enter todo..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;

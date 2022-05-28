import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions/todoActions';
const Form = ({addTodo}) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const inputRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      title,
      description
    };
    addTodo(todo);
    setTitle('');
    setDescription('');
    inputRef.current.focus();
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
          <label>Title : </label>
        <input type="text" ref={inputRef} placeholder="Enter todo..." value={title} onChange={(e) => setTitle(e.target.value)} />
           </div>
        <div>
          <label>Des : </label>
        <input type="text" placeholder="Enter todo..." value={description} onChange={(e) => setDescription(e.target.value)} />
           </div>
            <input type="submit"/>
        </form>
  </div>
)
}
Form.propTypes = {
  addTodo: PropTypes.func.isRequired
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps, { addTodo })(Form)
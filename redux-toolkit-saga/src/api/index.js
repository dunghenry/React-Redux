import axios from "axios"
const urlTodos = 'https://express-mongodb-todos.herokuapp.com/api/v1/todos';
const urlCats = 'https://api.thecatapi.com/v1/breeds';
export const fetchTodos = () => axios.get(urlTodos)
export const addTodo = (data) => axios.post(urlTodos, data)
export const deleteTodo = (id) => axios.delete(`${urlTodos}/${id}`);
export const fetchCats = () => axios.get(`${urlCats}?limit=5`);
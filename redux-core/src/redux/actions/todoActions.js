import axios from 'axios';
import { GET_TODOS, MARK_COMPLETE, ADD_TODO, DELETE_TODO } from '../constants';
import { toast } from 'react-toastify';
export const getTodos = () => async dispatch => {
    try {
        const response = await axios.get("https://express-mongodb-todos.herokuapp.com/api/v1/todos");
        if (response.data) {
            toast.success("Get data successfully!")
        }
        dispatch({
            type: GET_TODOS,
            payload: response.data
        })
    } catch (error) {
        console.log(error);
        return toast.error(error.response.data)
    }
}
export const getData = () => {
    const getDataAction = async dispatch => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
        dispatch({
            type: GET_TODOS,
            payload: response.data
        })
    }
    return getDataAction;
}
export const markComplete = (id) => async dispatch => {
    try {
        const res = await axios.get(`https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`)
        const newData = res.data;
        newData.completed = !res.data.completed
        await axios.put(`https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`, newData)
        toast.success("Update completed todos!")
        dispatch({
            type: MARK_COMPLETE,
            payload: id
        })
    } catch (error) {
        console.log(error)
        return toast.error(error.response.data)
    }
}
export const addTodo = todo => async dispatch => {
    try {
        const response = await axios.post("https://express-mongodb-todos.herokuapp.com/api/v1/todos", todo)
        toast.success(response.statusText)
        dispatch({
            type: ADD_TODO,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
        return toast.error(error.response.data)
    }
}
export const deleteTodo = (id) =>async dispatch => {
    try {
        const res = await axios.delete(`https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`)
        toast.success(res.data)
        dispatch({
            type: DELETE_TODO,
            payload: id
        })
    } catch (error) {
        console.log(error)
        return toast.error(error.response.data)
    }
}
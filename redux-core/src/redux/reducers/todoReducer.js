import {GET_TODOS, MARK_COMPLETE, DELETE_TODO, ADD_TODO} from '../constants'
const initialState = {
   todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS: {
            return {
                ...state,
                todos: [...action.payload]
            }
        }
        case MARK_COMPLETE: {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo._id === action.payload) todo.completed = !todo.completed
                    return todo
                })
            }
        }
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }
        case DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload)
            }
        }
        default:
            return state;
    }
}
export default todoReducer;
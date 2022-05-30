import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    todos: [],
    isLoading: false,
    isError: false
}
const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        getTodosFetch: (state) => {
            state.isLoading = true;
        },
        getTodosSuccess: (state, action) => {
            state.todos = action.payload;
            state.isLoading = false;
        },
        getTodosFailure: (state) => {
            state.isLoading = false;
        },
        addTodoStart: (state) => {
            state.isLoading = true;
        },
        addTodoSuccess: (state, action) => {
            state.todos.unshift(action.payload);
            state.isLoading = false;
        },
        addTodoFailure: (state) => {
            state.isError = true;
        },
        deleteTodoStart: (state) => {
            state.isLoading = true;
        },
        deleteTodoSuccess: (state, action) => {
            state.todos = state.todos.filter(todo => todo._id !== action.payload);
            state.isLoading = false;
        },
        deleteTodoFailure: (state, action) => {
            state.isError = true;
        }
    }
})
export const { getTodosSuccess, getTodosFailure, getTodosFetch, addTodoStart, addTodoSuccess, addTodoFailure, deleteTodoStart, deleteTodoFailure, deleteTodoSuccess} = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
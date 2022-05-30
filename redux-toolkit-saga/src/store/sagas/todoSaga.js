import { takeEvery, put, call } from 'redux-saga/effects';
import * as api from '../../api'
import {getTodosSuccess, getTodosFailure, addTodoSuccess, addTodoFailure, deleteTodoSuccess, deleteTodoFailure} from '../reducers/todosSlice'
function* workGetTodosFetch() {
    try {
        const response = yield call(api.fetchTodos)
        yield put(getTodosSuccess(response.data))
    } catch (error) {
        yield getTodosFailure();
    }
}
function* workAddTodo(action) {
    try {
        const response = yield call(api.addTodo, action.payload);
        console.log(response.data)
        yield put(addTodoSuccess(response.data))
    } catch (error) {
        yield addTodoFailure();
    }
}
function* workDeleteTodo(action) {
    try {
        yield call(api.deleteTodo, action.payload);
        yield put(deleteTodoSuccess(action.payload))
    } catch (error) {
        yield deleteTodoFailure()
    }
}
function* todoSaga() {
   yield takeEvery('todos/getTodosFetch', workGetTodosFetch)
   yield takeEvery('todos/addTodoStart', workAddTodo)
   yield takeEvery('todos/deleteTodoStart', workDeleteTodo)
}
export default todoSaga;
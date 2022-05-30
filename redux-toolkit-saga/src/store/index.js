import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import catReducer from './reducers/catSlice'; 
import todosReducer from './reducers/todosSlice';
import rootSaga from './sagas';

const saga = createSagaMiddleware('saga');
const store = configureStore({
    reducer: {
        cats: catReducer,
        todos: todosReducer
    },
    middleware: [saga]
});
saga.run(rootSaga)
export default store;
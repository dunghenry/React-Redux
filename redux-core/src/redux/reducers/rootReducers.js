import { combineReducers } from "redux";
import nameReducer from './nameReducer'
import ageReducer from "./ageReducer";
import todoReducer from './todoReducer'
const rootReducers = combineReducers({
    nameState: nameReducer,
    ageState: ageReducer,
    todosState: todoReducer
})

export default rootReducers;
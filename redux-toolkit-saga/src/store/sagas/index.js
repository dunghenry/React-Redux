import { all } from 'redux-saga/effects';
import catSaga from './catSaga';
import todoSaga from './todoSaga';
function* rootSaga() {
    yield all([catSaga(), todoSaga()])
}
export default rootSaga;
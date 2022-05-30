import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess, getCatsFailure } from '../reducers/catSlice';
import * as api from '../../api'
function* workGetCatsFetch() {
    try {
        const response = yield call(api.fetchCats);
        yield put(getCatsSuccess(response.data))
    } catch (error) {
        yield put(getCatsFailure());
    }
}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
}

export default catSaga;
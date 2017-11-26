import { call, put, takeEvery } from 'redux-saga/effects';
import {
    TOPREPO_FETCH_REQUESTED,
    TOPREPO_FETCH_SUCCEEDED,
    TOPREPO_FETCH_FAILED
} from '../constants/actionTypes'

import {
    fetchTopReposApi
} from '../actions/actions';

// import fetch from 'isomorphic-fetch'
const fetchTopRepos = function* (action) {
    try {
        const topRepos = yield call(fetchTopReposApi);
        yield put({type: TOPREPO_FETCH_SUCCEEDED, payload: topRepos});
    } catch (e) {
        yield put({type: TOPREPO_FETCH_FAILED, message: e.message});
    }
}
const topReposSaga = function* () {
    yield takeEvery(TOPREPO_FETCH_REQUESTED, fetchTopRepos);
};

export default topReposSaga;
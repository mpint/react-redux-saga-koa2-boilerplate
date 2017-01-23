import { put, call, take, fork } from 'redux-saga/effects';
import { actions, APP_LOADED_SAGA, INCREMENT_COUNTER_SAGA } from './common.ducks';
import { getApiStatus } from '../promises';

export function* emitAppLoaded() {
	return yield put(actions.appLoaded());
}

export function* watchAppLoadedSaga() {
	while(true) {
		try {
			yield take(APP_LOADED_SAGA);

			yield put(actions.apiStatusRequest());

			yield call(getApiStatus);

			yield put(actions.apiStatusSuccess());
		} catch (err) {
      yield put(actions.apiStatusError(err.statusCode));
    }
	}
}

export function* watchIncrementCounterSaga() {
	while(true) {
		yield take(INCREMENT_COUNTER_SAGA);

		yield put(actions.incrementCounter());
	}
}

export default [
	watchAppLoadedSaga(),
	watchIncrementCounterSaga(),
	emitAppLoaded()
];

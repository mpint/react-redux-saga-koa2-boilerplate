import { put, call, take, fork } from 'redux-saga/effects';
import { actions, APP_LOADED_SAGA } from './common.ducks';
import { getApiStatus } from '../promises';

export function* emitAppLoaded() {
	return yield put(actions.appLoaded());
}

export function* watchAppLoadedSaga() {
	while(true) {
		try {
			yield take(APP_LOADED_SAGA);

			yield call(getApiStatus);

			yield put(actions.apiStatusSuccess());
		} catch (err) {
      yield put(actions.apiStatusError(err.statusCode));
    }
	}
}

export default [
  watchAppLoadedSaga(),
	emitAppLoaded()
];

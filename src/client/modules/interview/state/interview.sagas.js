import { put, call, take, fork } from 'redux-saga/effects';
import { actions, ADD_TODO_SAGA, DELETE_TODO_SAGA } from './interview.ducks';

export function* watchAddTodoSaga() {
	while(true) {
		const { content } = yield take(ADD_TODO_SAGA);

		yield put(actions.addTodo(content));
	}
}
export function* watchDeleteTodoSaga() {
	while(true) {
		const { todoIndex } = yield take(DELETE_TODO_SAGA);

		yield put(actions.deleteTodo(todoIndex));
	}
}
export default [
  watchAddTodoSaga(),
  watchDeleteTodoSaga()
];

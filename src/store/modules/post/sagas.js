import { put, all, takeLatest } from 'redux-saga/effects';

import { addMessageSuccess, editPostSuccess } from './actions';

function* addPost({ payload }) {
  yield put(addMessageSuccess(payload));
}

function* editMessage({ payload }) {
  const { id, message } = payload;
  yield put(editPostSuccess(id, message));
}

export default all([
  takeLatest('@post/ADD_REQUEST', addPost),
  takeLatest('@post/EDIT_MESSAGE', editMessage),
]);

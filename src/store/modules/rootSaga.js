import { all } from 'redux-saga/effects';

import post from './post/sagas';
import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([auth, post]);
}

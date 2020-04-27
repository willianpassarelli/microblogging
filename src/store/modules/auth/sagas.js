import { Alert } from 'react-native';
import { takeLatest, select, put, all } from 'redux-saga/effects';
import * as RootNavigation from '~/services/navigation';

import { signInSuccess, signUpSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const userExists = yield select(state =>
      state.auth.registred.find(user => user.email === email)
    );

    if (!userExists) {
      throw new Error('Usuário não identificado');
    }

    if (userExists.password !== password) {
      throw new Error('Senha incorreta');
    }

    const { id, name, avatar } = userExists;

    const profile = { id, name, avatar, email };

    yield put(signInSuccess(profile));
    RootNavigation.navigate('Timeline');
  } catch (err) {
    Alert.alert('Falha na autenticação', err.message);
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const userExists = yield select(state =>
      state.auth.registred.find(user => user.email === email)
    );

    if (userExists) {
      throw new Error('Usuário já registrado');
    }

    if (password.length < 6) {
      throw new Error('A Senha deve possuir mais que 6 digitos');
    }

    const id = Math.random()
      .toString(36)
      .substring(7);
    const avatar = 'https://api.adorable.io/avatars/50/abott@adorable.png';
    const data = { id, name, avatar, email, password };

    yield put(signUpSuccess(data));
    RootNavigation.navigate('SignIn');
  } catch (err) {
    Alert.alert('Falha no cadastro', err.message);

    yield put(signFailure());
  }
}
export function signOut() {
  RootNavigation.navigate('SignIn');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

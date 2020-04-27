import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading } = useSelector(state => state.auth);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Form>
        <FormInput
          autoFocus
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <FormInput
          secureTextEntry
          placeholder="Senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Entrar
        </SubmitButton>
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Não possui uma conta? Cadastre-se</SignLinkText>
        </SignLink>
      </Form>
    </Container>
  );
}

import React, { useMemo } from 'react';
import { Container, Form, InputText, CountText, SubmitButton } from './styles';

export default function NewPost({ onPress, value, onChangeText }) {
  const count = useMemo(() => value.length, [value]);

  return (
    <Container>
      <Form>
        <InputText
          autoFocus
          autoCorrect={false}
          placeholder="Digite sua mensagem"
          returnKeyType="done"
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onPress}
          maxLength={280}
        />
        <SubmitButton onPress={onPress} name="ios-send" />
      </Form>
      <CountText>Max {count}/280</CountText>
    </Container>
  );
}

import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '../Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  padding: 5px 20px;
`;

export const Form = styled.View`
  flex-direction: row;
`;

export const CountText = styled.Text`
  font-size: 10px;
  color: #aaa;
`;

export const InputText = styled(Input)`
  flex: 1;
`;

export const SubmitButton = styled(Button)``;

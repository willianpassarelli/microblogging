import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, IconButton } from './styles';

export default function Button({ name, ...rest }) {
  return (
    <Container>
      <IconButton {...rest}>
        <Icon name={name} size={24} color="#fff" />
      </IconButton>
    </Container>
  );
}

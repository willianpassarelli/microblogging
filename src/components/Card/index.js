import React, { useMemo } from 'react';
import { formatDistance } from 'date-fns';
import { useSelector } from 'react-redux';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Avatar,
  Header,
  Name,
  DatePost,
  Message,
  MessageText,
  Actions,
  ActionButton,
} from './styles';

export default function Card({ data, onPressEdit, onPressDelete }) {
  const dateFormatted = useMemo(
    () =>
      formatDistance(new Date(data.post.date), new Date(), {
        locale: pt,
      }),
    [data.post.date]
  );

  const { profile } = useSelector(state => state.user);

  const id = profile ? profile.id : '';

  return (
    <Container>
      <Avatar source={{ uri: data.profile.avatar }} />
      <Message>
        <Header>
          <Name>{data.profile.name}</Name>
          <DatePost>{dateFormatted}</DatePost>
        </Header>
        <MessageText>{data.post.message}</MessageText>
        {data.profile.id === id && (
          <Actions>
            <ActionButton onPress={onPressEdit}>
              <Icon name="md-create" size={20} color="#999" />
            </ActionButton>
            <ActionButton onPress={onPressDelete}>
              <Icon name="ios-trash" size={20} color="#f24c60" />
            </ActionButton>
          </Actions>
        )}
      </Message>
    </Container>
  );
}

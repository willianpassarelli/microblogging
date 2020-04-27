import React, { useState, useMemo, useEffect } from 'react';
import { Keyboard, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Card from '~/components/Card';
import NewPost from './NewPost';

import {
  addMessageRequest,
  editPost,
  removePost,
} from '~/store/modules/post/actions';

import { signOut } from '~/store/modules/auth/actions';

import timelineData from '~/data/timelineData';

import {
  Container,
  Header,
  MenuHeader,
  LeftButton,
  RightButton,
  ContainerPhoto,
  Avatar,
  Perfil,
  DateNow,
  Name,
  List,
  ContainerButton,
  BubbleButton,
} from './styles';

export default function Timeline() {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const [edit, setEdit] = useState(false);
  const [idItem, setIdItem] = useState('');
  const [date] = useState(new Date());
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  const post = useSelector(state => state.post);
  const { profile } = useSelector(state => state.user);

  function handleSubmit() {
    const id = Math.random()
      .toString(36)
      .substring(7);
    const post = { message, date: new Date() };
    if (message) {
      if (edit) {
        dispatch(editPost(idItem, message));
        setIdItem('');
        setMessage('');
        setEdit(false);
        setActive(false);
      } else {
        dispatch(addMessageRequest(id, profile, post));
        setMessage('');
        setActive(false);
      }
      Keyboard.dismiss();
    } else {
      Alert.alert('Campo obrigatório', 'Digite uma mensagem.');
    }
  }

  function handleEdit(item) {
    setEdit(true);
    setIdItem(item.id);
    setActive(true);
    setMessage(item.post.message);
  }

  function handleDelete(id) {
    dispatch(removePost(id));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  useEffect(() => {
    const posts = [...timelineData, ...post].reverse();
    setData(posts);
  }, [post]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  return (
    <Container>
      <Header>
        <MenuHeader>
          <LeftButton>
            <Icon name="ios-menu" size={22} color="#fff" />
          </LeftButton>
          <RightButton onPress={handleSignOut}>
            <Icon name="ios-log-out" size={22} color="#fff" />
          </RightButton>
        </MenuHeader>
        <ContainerPhoto>
          <Avatar
            source={{
              uri: profile ? profile.avatar : '',
            }}
          />
        </ContainerPhoto>
        <Perfil>
          <DateNow>{dateFormatted}</DateNow>
          <Name>Olá, {profile ? profile.name : ''}!</Name>
        </Perfil>
      </Header>
      {active && (
        <NewPost
          value={message}
          onChangeText={setMessage}
          onPress={handleSubmit}
        />
      )}
      <List
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Card
            data={item}
            onPressEdit={() => handleEdit(item)}
            onPressDelete={() => handleDelete(item.id)}
          />
        )}
      />
      <ContainerButton>
        <BubbleButton onPress={() => setActive(!active)}>
          <Icon name="ios-chatbubbles" size={28} color="#ccc" />
        </BubbleButton>
      </ContainerButton>
    </Container>
  );
}

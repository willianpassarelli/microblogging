import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  background: #7329f8;
  height: 30%;
  margin: 8px;
  padding: 20px;
  border-radius: 25px;
`;

export const MenuHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftButton = styled.TouchableOpacity``;

export const RightButton = styled.TouchableOpacity``;

export const ContainerPhoto = styled.View`
  border-radius: 50px;
  border-width: 2px;
  border-color: #f24c60;
  padding: 5px;
  align-self: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 50px;
`;

export const Perfil = styled.View`
  align-items: center;
  margin: 20px 0;
`;

export const DateNow = styled.Text`
  color: #fff;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 600;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 25 },
})``;

export const ContainerButton = styled.View`
  align-items: flex-end;
  position: absolute;
  left: 0;
  right: 30px;
  bottom: 40px;
`;

export const BubbleButton = styled.TouchableOpacity`
  background: #fff;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  box-shadow: 0px 0px 5px #ccc;
`;

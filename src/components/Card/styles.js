import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  padding: 20px 0;
`;

export const Avatar = styled.Image`
  border-radius: 50px;
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

export const DatePost = styled.Text`
  font-size: 12px;
  color: #b6b6b6;
`;

export const Message = styled.View`
  flex: 1;
`;

export const MessageText = styled.Text`
  font-size: 14px;
  color: #b6b6b6;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ActionButton = styled.TouchableOpacity`
  padding: 5px;
`;

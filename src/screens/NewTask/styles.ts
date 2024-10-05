import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
  padding: 20px;
  padding-top: 60px;
`;

export const Header = styled.View`
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  border-color: #ccc;
  border-width: 1px;
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
  text-align-vertical: top;
  margin-bottom: 8px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const CharCount = styled.Text`
  color: #6b6572;
  font-size: 14px;
`;

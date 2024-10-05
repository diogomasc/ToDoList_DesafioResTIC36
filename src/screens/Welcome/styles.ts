import styled from "styled-components/native";
import { TouchableOpacity, Text, View } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ContainerHeader = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
  color: #6f3cc3;
  margin-top: 20px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #666666;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const ContainerActions = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #6f3cc3;
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
`;

export const RegisterButton = styled.TouchableOpacity`
  background-color: transparent;
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  border-width: 2px;
  border-color: #6f3cc3;
`;

export const RegisterButtonText = styled.Text`
  color: #6f3cc3;
  font-size: 14px;
  font-weight: bold;
`;

import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
`;

export const HeaderBackButton = styled.View`
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const HeaderLogo = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 40px;
`;

export const Icon = styled(Feather)`
  align-self: center;
`;

export const LogoTextContainer = styled.View`
  align-items: center;
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #6f3cc3;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 32px;
  color: #6f3cc3;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`;

export const FormContainer = styled.View`
  width: 100%;
`;

export const RegisterButton = styled.TouchableOpacity`
  background-color: #6f3cc3;
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
`;

export const LoginLink = styled.Text`
  color: #6f3cc3;
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
`;

export const ErrorText = styled.Text`
  font-size: 11px;
  color: red;
  margin-top: 4px;
  margin-bottom: 4px;
  align-self: flex-start;
`;

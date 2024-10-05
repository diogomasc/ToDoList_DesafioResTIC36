import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

export const ButtonContainer = styled(TouchableOpacity)<{
  backgroundColor: string;
}>`
  height: 56px;
  border-radius: 12px;
  padding-horizontal: 24px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  elevation: 5;
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-bottom: 8px;
`;

export const ButtonText = styled(Text)<{ textColor: string }>`
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px;
  color: ${({ textColor }) => textColor};
`;

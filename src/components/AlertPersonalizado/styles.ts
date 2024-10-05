import styled from "styled-components/native";
import { Animated } from "react-native";

export const AlertContainer = styled(Animated.View)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  padding-horizontal: 16px;
  padding-vertical: 6px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;

export const AlertText = styled.Text`
  color: #333;
  font-size: 16px;
  text-align: center;
`;

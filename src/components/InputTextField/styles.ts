import styled from "styled-components/native";

export const Container = styled.View`
  margin-vertical: 8px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #333333;
  margin-bottom: 8px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #cccccc;
  border-radius: 8px;
  padding-horizontal: 10px;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  height: 40px;
  color: #262428;
`;

export const IconContainer = styled.TouchableOpacity`
  margin-left: 10px;
`;

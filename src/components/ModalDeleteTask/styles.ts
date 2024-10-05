import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: 100%;
  background-color: #fff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 24px;
  align-items: center;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

export const ModalButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 18px;
  gap: 16px;
`;

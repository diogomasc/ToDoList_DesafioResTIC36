import styled from "styled-components/native";

type CardValueProps = {
  color?: string;
  background?: string;
};

export const Container = styled.View`
  padding-top: 4px;
  padding-bottom: 4px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const CardTitle = styled.Text`
  color: #6b6572;
  font-size: 14px;
  font-weight: 500;
`;

export const CardValue = styled.Text<CardValueProps>`
  color: ${({ color }) => color || "#1e1e1e"};
  font-size: 14px;
  font-weight: 600;
  background-color: ${({ background }) => background || "transparent"};
  padding: 4px 8px;
  border-radius: 50px;
`;

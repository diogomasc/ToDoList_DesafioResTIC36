import styled, { css } from "styled-components/native";

interface ContainerProps {
  status?: boolean;
}

interface TaskTextProps {
  status?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  padding: 15px;
  background-color: #e5e2e9;
  border-radius: 8px;
  margin-bottom: 12px;

  ${(props) =>
    props.status &&
    css`
      background-color: #d1cbd7;
    `}
`;

export const TaskText = styled.Text<TaskTextProps>`
  color: #262428;
  font-size: 16px;
  font-weight: 500;
  flex-shrink: 1;
  flex-grow: 1;
  margin: 0 40px;

  ${(props) =>
    props.status &&
    css`
      text-decoration-line: line-through;
    `}
`;

export const TaskDone = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

export const TaskDelete = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

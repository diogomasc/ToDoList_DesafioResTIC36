import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
  padding: 60px 18px 12px 18px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #6f3cc3;
  margin-left: 8px;
`;

export const Greeting = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-vertical: 16px;
`;

export const TaskList = styled.FlatList`
  flex: 1;
`;

export const EmptyListContainer = styled.View`
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 32px;
`;

export const EmptyListText = styled.Text`
  color: #555;
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
`;

export const EmptyListSubText = styled.Text`
  color: #888;
  font-size: 14px;
  text-align: center;
`;

export const Footer = styled.View`
  margin-top: 12px;
  align-items: flex-end;
`;

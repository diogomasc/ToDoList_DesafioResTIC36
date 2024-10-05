// index.tsx
import React from "react";
import { Feather } from "@expo/vector-icons";
import { ButtonContainer, ButtonText } from "./styles";

type BaseButtonProps = {
  onPress: () => void;
  text: string;
  backgroundColor: string;
  textColor: string;
  iconName: keyof typeof Feather.glyphMap;
  iconColor: string;
  style?: object;
};

const Button: React.FC<BaseButtonProps> = ({
  onPress,
  text,
  backgroundColor,
  textColor,
  iconName,
  iconColor,
  style,
}) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      style={style}
      onPress={onPress}
    >
      <ButtonText textColor={textColor}>{text}</ButtonText>
      <Feather name={iconName} size={24} color={iconColor} />
    </ButtonContainer>
  );
};

type SpecializedButtonProps = {
  onPress: () => void;
};

export const SaveTaskButton: React.FC<SpecializedButtonProps> = ({
  onPress,
}) => (
  <Button
    onPress={onPress}
    text="Salvar"
    backgroundColor="#BFE3D0"
    textColor="#2D6C4A"
    iconName="check"
    iconColor="#2D6C4A"
  />
);

export const CreateTaskButton: React.FC<SpecializedButtonProps> = ({
  onPress,
}) => (
  <Button
    onPress={onPress}
    text="Criar"
    backgroundColor="#6F3CC3"
    textColor="#FFF"
    iconName="plus"
    iconColor="#FFF"
  />
);

export const CancelButton: React.FC<SpecializedButtonProps> = ({ onPress }) => (
  <Button
    onPress={onPress}
    text="Cancelar"
    backgroundColor="#E0E0E0"
    textColor="#333"
    iconName="x"
    iconColor="#262428"
    style={{ height: 48, borderRadius: 8, marginHorizontal: 4 }}
  />
);

export const DeleteButton: React.FC<SpecializedButtonProps> = ({ onPress }) => (
  <Button
    onPress={onPress}
    text="Excluir"
    backgroundColor="#EB5757"
    textColor="#FCFCFC"
    iconName="trash-2"
    iconColor="#FCFCFC"
    style={{ height: 48, borderRadius: 8, marginHorizontal: 4 }}
  />
);

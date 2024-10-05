import React from "react";
import { Feather } from "@expo/vector-icons";
import { BackButtonText, BackButtonContainer } from "./styles";

type BackButtonProps = {
  onPress: () => void;
  text?: string;
};

export function BackButton({ onPress, text = "Voltar" }: BackButtonProps) {
  return (
    <BackButtonContainer onPress={onPress}>
      <Feather name="arrow-left" size={24} color="#6F3CC3" />
      <BackButtonText>{text}</BackButtonText>
    </BackButtonContainer>
  );
}

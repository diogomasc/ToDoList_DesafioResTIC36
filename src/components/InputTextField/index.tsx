import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Label,
  InputContainer,
  StyledInput,
  IconContainer,
} from "./styles";

type InputTextFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  onBlur?: () => void;
};

const InputTextField: React.FC<InputTextFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  onBlur,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        <StyledInput
          placeholder={placeholder}
          placeholderTextColor="#A0A0A0"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          onBlur={onBlur}
        />
        {secureTextEntry && (
          <IconContainer onPress={togglePasswordVisibility}>
            <Feather
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color="#6F3CC3"
            />
          </IconContainer>
        )}
      </InputContainer>
    </Container>
  );
};

export default InputTextField;

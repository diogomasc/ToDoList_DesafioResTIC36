import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { AlertPersonalizado } from "../../components/AlertPersonalizado";
import {
  Container,
  ContainerHeader,
  Title,
  Subtitle,
  ContainerActions,
  LoginButton,
  ButtonText,
  RegisterButton,
  RegisterButtonText,
} from "./styles";

const Welcome: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [alert, setAlert] = useState({
    visible: false,
    message: "",
    type: "success",
  });

  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ visible: true, message, type });
    setTimeout(
      () => setAlert({ visible: false, message: "", type: "success" }),
      3000
    );
  };

  useEffect(() => {
    if (route.params?.showAlert) {
      showAlert(route.params.alertMessage, route.params.alertType);
    }
  }, [route.params]);

  return (
    <Container>
      <ContainerHeader>
        <Feather name="clipboard" size={80} color="#9359F3" />
        <Title>To Do List</Title>
        <Subtitle>Comece a escrever suas ideias e tarefas!</Subtitle>
      </ContainerHeader>
      <ContainerActions>
        <LoginButton onPress={() => navigation.navigate("SignIn")}>
          <ButtonText>Login</ButtonText>
        </LoginButton>
        <RegisterButton onPress={() => navigation.navigate("Register")}>
          <RegisterButtonText>Cadastre-se</RegisterButtonText>
        </RegisterButton>
      </ContainerActions>

      <AlertPersonalizado
        message={alert.message}
        type={alert.type}
        visible={alert.visible}
        backgroundColor={alert.type === "success" ? "#BFE3D0" : "#E0DCE4"}
      />
    </Container>
  );
};

export default Welcome;

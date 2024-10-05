import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import InputTextField from "../../components/InputTextField";
import { BackButton } from "../../components/BackButton";
import * as Yup from "yup";
import { Formik } from "formik";
import { AlertPersonalizado } from "../../components/AlertPersonalizado";
import {
  Container,
  HeaderBackButton,
  HeaderLogo,
  LogoTextContainer,
  Title,
  Subtitle,
  ContentForm,
  LoginButton,
  ButtonText,
  ForgotPasswordButton,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountText,
  ErrorText,
} from "./styles";

const SignInSchema = Yup.object().shape({
  apelido: Yup.string().required("Apelido é obrigatório"),
  senha: Yup.string()
    .required("Senha é obrigatória")
    .min(6, "A senha tem no mínimo 6 caracteres"),
});

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [alert, setAlert] = useState({
    visible: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    if (route.params?.showAlert) {
      setAlert({
        visible: true,
        message: route.params.alertMessage,
        type: route.params.alertType,
      });
      setTimeout(
        () => setAlert({ visible: false, message: "", type: "success" }),
        3000
      );
    }
  }, [route.params]);

  const handleSignIn = () => {
    navigation.navigate("Home", {
      showAlert: true,
      alertMessage:
        "Login efetuado com sucesso!\nComece a escrever suas anotações",
      alertType: "success",
    });
  };

  const handleCreateAccount = () => {
    navigation.navigate("Register");
  };

  return (
    <Container>
      <HeaderBackButton>
        <BackButton onPress={() => navigation.goBack()} />
      </HeaderBackButton>

      <HeaderLogo>
        <Feather name="clipboard" size={40} color="#6F3CC3" />
        <LogoTextContainer>
          <Title>To Do List</Title>
        </LogoTextContainer>
      </HeaderLogo>

      <Subtitle>Login</Subtitle>

      <ContentForm>
        <Formik
          initialValues={{ apelido: "", senha: "" }}
          validationSchema={SignInSchema}
          onSubmit={handleSignIn}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <InputTextField
                label="Digite seu apelido:"
                placeholder="Digite seu apelido"
                value={values.apelido}
                onChangeText={handleChange("apelido")}
                onBlur={handleBlur("apelido")}
              />
              {touched.apelido && errors.apelido && (
                <ErrorText>{errors.apelido}</ErrorText>
              )}

              <InputTextField
                label="Digite sua senha:"
                placeholder="Digite sua senha"
                value={values.senha}
                onChangeText={handleChange("senha")}
                onBlur={handleBlur("senha")}
                secureTextEntry
              />
              {touched.senha && errors.senha && (
                <ErrorText>{errors.senha}</ErrorText>
              )}

              <LoginButton onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
              </LoginButton>
            </>
          )}
        </Formik>
      </ContentForm>

      <CreateAccountButton onPress={handleCreateAccount}>
        <CreateAccountText>
          Não tem conta? Crie sua conta agora
        </CreateAccountText>
      </CreateAccountButton>

      <ForgotPasswordButton onPress={() => {}}>
        <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
      </ForgotPasswordButton>

      <AlertPersonalizado
        message={alert.message}
        type={alert.type}
        visible={alert.visible}
        backgroundColor={alert.type === "success" ? "#BFE3D0" : "#E0DCE4"}
      />
    </Container>
  );
};

export default SignIn;

import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputTextField from "../../components/InputTextField";
import { BackButton } from "../../components/BackButton";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Container,
  HeaderBackButton,
  HeaderLogo,
  Icon,
  LogoTextContainer,
  Title,
  Subtitle,
  FormContainer,
  RegisterButton,
  ButtonText,
  LoginLink,
  ErrorText,
} from "./styles";

const RegisterSchema = Yup.object().shape({
  apelido: Yup.string().required("Apelido é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  senha: Yup.string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

const Register: React.FC = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate("SignIn", {
      showAlert: true,
      alertMessage:
        "Conta criada com sucesso!\nFaça login para começar a usar o aplicativo.",
      alertType: "success",
    });
  };

  return (
    <Container>
      <HeaderBackButton>
        <BackButton onPress={() => navigation.goBack()} />
      </HeaderBackButton>

      <HeaderLogo>
        <Icon name="clipboard" size={40} color="#6F3CC3" />
        <LogoTextContainer>
          <Title>To Do List</Title>
        </LogoTextContainer>
      </HeaderLogo>

      <Subtitle>Inscreva-se</Subtitle>

      <Formik
        initialValues={{ apelido: "", email: "", senha: "" }}
        validationSchema={RegisterSchema}
        onSubmit={handleRegister}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <FormContainer>
            <InputTextField
              label="Defina seu apelido:"
              placeholder="Digite seu apelido"
              value={values.apelido}
              onChangeText={handleChange("apelido")}
              onBlur={handleBlur("apelido")}
            />
            {touched.apelido && errors.apelido && (
              <ErrorText>{errors.apelido}</ErrorText>
            )}

            <InputTextField
              label="Digite seu melhor e-mail:"
              placeholder="Digite seu e-mail"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            {touched.email && errors.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}

            <InputTextField
              label="Defina uma senha:"
              placeholder="Digite sua senha"
              value={values.senha}
              onChangeText={handleChange("senha")}
              onBlur={handleBlur("senha")}
              secureTextEntry
            />
            {touched.senha && errors.senha && (
              <ErrorText>{errors.senha}</ErrorText>
            )}

            <RegisterButton onPress={() => handleSubmit()}>
              <ButtonText>Cadastre-se</ButtonText>
            </RegisterButton>
          </FormContainer>
        )}
      </Formik>

      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <LoginLink>Já possui login? Entrar</LoginLink>
      </TouchableOpacity>
    </Container>
  );
};

export default Register;

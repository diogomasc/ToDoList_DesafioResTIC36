import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import InputTextField from "../../components/InputTextField";
import * as Yup from "yup";
import { Formik } from "formik";
import styles from "./styles"; // Importando os estilos

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
    <View style={styles.container}>
      <View style={styles.headerBackButton}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={24} color="#6B6572" />
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.headerLogo}>
        <Feather
          name="clipboard"
          size={40}
          color="#6F3CC3"
          style={styles.icon}
        />
        <View style={styles.logoTextContainer}>
          <Text style={styles.title}>To Do List</Text>
        </View>
      </View>

      <Text style={styles.subtitle}>Inscreva-se</Text>

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
          <View style={styles.formContainer}>
            <InputTextField
              label="Defina seu apelido:"
              placeholder="Digite seu apelido"
              value={values.apelido}
              onChangeText={handleChange("apelido")}
              onBlur={handleBlur("apelido")}
            />
            {touched.apelido && errors.apelido && (
              <Text style={styles.errorText}>{errors.apelido}</Text>
            )}

            <InputTextField
              label="Digite seu melhor e-mail:"
              placeholder="Digite seu e-mail"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
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
              <Text style={styles.errorText}>{errors.senha}</Text>
            )}

            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.loginLink}>Já possui login? Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

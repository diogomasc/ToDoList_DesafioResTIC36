import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import InputTextField from "../../components/InputTextField";
import * as Yup from "yup";
import { Formik } from "formik";
import { AlertPersonalizado } from "../../components/AlertPersonalizado";
import styles from "./styles"; // Importando os estilos

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

      <Text style={styles.subtitle}>Login</Text>

      <View style={styles.contentForm}>
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
                <Text style={styles.errorText}>{errors.apelido}</Text>
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
                <Text style={styles.errorText}>{errors.senha}</Text>
              )}

              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>

      <TouchableOpacity onPress={handleCreateAccount}>
        <Text style={styles.createAccount}>
          Não tem conta? Crie sua conta agora
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <AlertPersonalizado
        message={alert.message}
        type={alert.type}
        visible={alert.visible}
        backgroundColor={alert.type === "success" ? "#BFE3D0" : "#E0DCE4"}
      />
    </View>
  );
};

export default SignIn;

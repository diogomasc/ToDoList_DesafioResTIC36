import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { AlertPersonalizado } from "../../components/AlertPersonalizado";
import styles from "./styles";

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
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Feather name="clipboard" size={80} color="#9359F3" />
        <Text style={styles.title}>To Do List</Text>
        <Text style={styles.subtitle}>
          Comece a escrever suas ideias e tarefas!
        </Text>
      </View>
      <View style={styles.containerActions}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerButtonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

      <AlertPersonalizado
        message={alert.message}
        type={alert.type}
        visible={alert.visible}
        backgroundColor={alert.type === "success" ? "#BFE3D0" : "#E0DCE4"}
      />
    </View>
  );
};

export default Welcome;

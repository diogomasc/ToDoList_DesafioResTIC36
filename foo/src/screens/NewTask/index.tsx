import React, { useContext } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import { TaskContext } from "../../context/TaskContext";
import { SaveTaskButton } from "../../components/SaveTaskButton";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as Yup from "yup";
import { Formik } from "formik";
import styles from "./styles";

const TaskSchema = Yup.object().shape({
  taskText: Yup.string()
    .min(4, "No mínimo 4 caracteres")
    .max(256, "No máximo 256 caracteres")
    .required("Tarefa não pode ser vazia"),
});

const NewTask = () => {
  const { createTask, showAlert } = useContext(TaskContext);
  const navigation = useNavigation();

  const handleSaveTask = (taskText: string, resetForm: () => void) => {
    if (taskText.trim()) {
      createTask(taskText);
      showAlert("Uma nova tarefa foi criada!", "success");
      resetForm();
      navigation.goBack();
    }
  };

  const handleBackToHome = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
          <Feather name="arrow-left" size={24} color="#6F3CC3" />
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Criar nova tarefa</Text>

      <Formik
        initialValues={{ taskText: "" }}
        validationSchema={TaskSchema}
        onSubmit={(values, { resetForm }) => {
          handleSaveTask(values.taskText, resetForm);
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Digite a descrição da tarefa"
              value={values.taskText}
              onChangeText={handleChange("taskText")}
              maxLength={256}
              multiline
            />

            {touched.taskText && errors.taskText && (
              <Text style={styles.errorText}>{errors.taskText}</Text>
            )}

            <View style={styles.footer}>
              <Text style={styles.charCount}>{values.taskText.length}/256</Text>
              <SaveTaskButton onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default NewTask;

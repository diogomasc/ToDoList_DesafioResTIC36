import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { SaveTaskButton } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../../components/BackButton";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Container,
  Header,
  Title,
  StyledTextInput,
  ErrorText,
  Footer,
  CharCount,
} from "./styles";

const TaskSchema = Yup.object().shape({
  taskText: Yup.string()
    .min(4, "No mínimo 4 caracteres")
    .max(256, "No máximo 256 caracteres")
    .required("Tarefa não pode ser vazia"),
});

const NewTask: React.FC = () => {
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
    <Container>
      <Header>
        <BackButton onPress={handleBackToHome} />
      </Header>

      <Title>Criar nova tarefa</Title>

      <Formik
        initialValues={{ taskText: "" }}
        validationSchema={TaskSchema}
        onSubmit={(values, { resetForm }) => {
          handleSaveTask(values.taskText, resetForm);
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <StyledTextInput
              placeholder="Digite a descrição da tarefa"
              value={values.taskText}
              onChangeText={handleChange("taskText")}
              maxLength={256}
              multiline
            />

            {touched.taskText && errors.taskText && (
              <ErrorText>{errors.taskText}</ErrorText>
            )}

            <Footer>
              <CharCount>{values.taskText.length}/256</CharCount>
              <SaveTaskButton onPress={handleSubmit} />
            </Footer>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default NewTask;

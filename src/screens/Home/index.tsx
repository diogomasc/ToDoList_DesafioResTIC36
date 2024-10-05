import React, { useContext, useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CardNumber } from "../../components/CardNumber";
import { Task } from "../../components/Task";
import { SearchTask } from "../../components/SearchTask";
import { CreateTaskButton } from "../../components/Button";
import { AlertPersonalizado } from "../../components/AlertPersonalizado";
import { ModalDeleteTask } from "../../components/ModalDeleteTask";

import { TaskContext } from "../../context/TaskContext";
import {
  Container,
  Header,
  HeaderText,
  Greeting,
  CardContainer,
  TaskList,
  EmptyListContainer,
  EmptyListText,
  EmptyListSubText,
  Footer,
} from "./styles";

export default function Home() {
  const {
    tasks,
    handleTaskChangeStatus,
    handleTaskDelete,
    searchTasks,
    alert,
    showAlert,
  } = useContext(TaskContext);
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const { filteredTasks, countTask, countDone } = useMemo(() => {
    const filtered = searchTasks(searchQuery);
    const sorted = [...filtered].sort((a, b) => a.status - b.status);

    return {
      filteredTasks: sorted,
      countTask: filtered.length,
      countDone: filtered.filter((task) => task.status).length,
    };
  }, [tasks, searchQuery, searchTasks]);

  const confirmTaskDelete = (task) => {
    setTaskToDelete(task);
    setModalVisible(true);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      handleTaskDelete(taskToDelete);
      setModalVisible(false);
      showAlert("Tarefa excluída com sucesso!", "error");
    }
  };

  const renderEmptyList = () => (
    <EmptyListContainer>
      <Feather name="clipboard" size={50} color="#555" />
      {searchQuery ? (
        <EmptyListText>
          Nenhuma tarefa encontrada para "{searchQuery}"
        </EmptyListText>
      ) : (
        <>
          <EmptyListText>Você ainda não tem tarefas cadastradas</EmptyListText>
          <EmptyListSubText>
            Crie tarefas e organize seus itens a fazer
          </EmptyListSubText>
        </>
      )}
    </EmptyListContainer>
  );

  return (
    <Container>
      <StatusBar style="auto" />

      <Header>
        <Feather name="clipboard" size={24} color="#6F3CC3" />
        <HeaderText>To Do List</HeaderText>
      </Header>

      <Greeting>Olá!</Greeting>

      <SearchTask onChangeText={setSearchQuery} value={searchQuery} />

      <CardContainer>
        <CardNumber
          title="Tarefas criadas"
          num={countTask}
          color="#6F3CC3"
          background="#DDD2EF"
        />
        <CardNumber
          title="Concluídas"
          num={countDone}
          color="#2D6C4A"
          background="#BFE3D0"
        />
      </CardContainer>

      <TaskList
        data={filteredTasks}
        renderItem={({ item }) => (
          <Task
            id={item.id}
            title={item.title}
            status={item.status}
            onCheck={() => handleTaskChangeStatus(item)}
            onRemove={() => confirmTaskDelete(item)}
          />
        )}
        ListEmptyComponent={renderEmptyList}
      />

      <Footer>
        <CreateTaskButton onPress={() => navigation.navigate("NewTask")} />
      </Footer>

      <AlertPersonalizado
        message={alert.message}
        type={alert.type}
        visible={alert.visible}
        backgroundColor={alert.type === "success" ? "#BFE3D0" : "#E0DCE4"}
      />

      <ModalDeleteTask
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </Container>
  );
}

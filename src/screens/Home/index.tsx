import React, {
  useState,
  useContext,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { FlatList, Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CardNumber } from "../../components/CardNumber";
import { Task } from "../../components/Task";
import { SearchTask } from "../../components/SearchTask";
import { CreateTaskButton } from "../../components/CreateTaskButton";
import { AlertPersonalizado } from "../../components/AlertPersonalizado";
import { ModalDeleteTask } from "../../components/ModalDeleteTask";

import { TaskContext } from "../../context/TaskContext";
import { styles } from "./styles";

export default function Home() {
  const { tasks, handleTaskChangeStatus, handleTaskDelete, searchTasks } =
    useContext(TaskContext);
  const navigation = useNavigation();
  const route = useRoute();

  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [alert, setAlert] = useState({
    visible: false,
    message: "",
    type: "success",
  });

  const showAlert = useCallback((message, type) => {
    setAlert({ visible: true, message, type });
    setTimeout(
      () => setAlert({ visible: false, message: "", type: "success" }),
      3000
    );
  }, []);

  useEffect(() => {
    if (route.params?.showAlert) {
      showAlert(route.params.alertMessage, route.params.alertType);
    }
  }, [route.params, showAlert]);

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
    <View style={styles.listEmptyComponent}>
      <Feather name="clipboard" size={50} color="#555" />
      {searchQuery ? (
        <Text style={styles.listEmptyComponentText}>
          Nenhuma tarefa encontrada para "{searchQuery}"
        </Text>
      ) : (
        <>
          <Text style={styles.listEmptyComponentText}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.listEmptyComponentSubText}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Feather name="clipboard" size={24} color="#6F3CC3" />
        <Text style={styles.headerText}>To Do List</Text>
      </View>

      <Text style={styles.greeting}>Olá!</Text>

      <SearchTask onChangeText={setSearchQuery} value={searchQuery} />

      <View style={styles.cardContainer}>
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
      </View>

      <FlatList
        style={styles.tasks}
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

      <View style={styles.footer}>
        <CreateTaskButton
          onPress={() => navigation.navigate("NewTask", { showAlert })}
        />
      </View>

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
    </SafeAreaView>
  );
}

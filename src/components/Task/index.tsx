import { Feather } from "@expo/vector-icons";
import { Container, TaskDone, TaskText, TaskDelete } from "./styles";
import { TaskProps } from "../../utils/types";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export function Task(props: TaskProps) {
  const { selectTask } = useContext(TaskContext);

  return (
    <Container status={props.status}>
      <TaskDone onPress={props.onCheck} completed={props.status}>
        <Feather
          name={props.status ? "check-circle" : "circle"}
          size={24}
          color={props.status ? "#0E9577" : "#9359F3"}
        />
      </TaskDone>

      <TaskText status={props.status}>{props.title}</TaskText>

      <TaskDelete onPress={props.onRemove}>
        <Feather name="trash-2" size={24} color="#6B6572" />
      </TaskDelete>
    </Container>
  );
}

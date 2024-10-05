import React from "react";
import { Modal, Text, View } from "react-native";
import { CancelButton, DeleteButton } from "../Button";
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalButtons,
} from "./styles";

type ModalDeleteTaskProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export const ModalDeleteTask: React.FC<ModalDeleteTaskProps> = ({
  visible,
  onCancel,
  onConfirm,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}
    >
      <ModalContainer>
        <ModalContent>
          <ModalTitle>
            Tem certeza de que deseja excluir essa tarefa?
          </ModalTitle>
          <ModalButtons>
            <CancelButton onPress={onCancel} />
            <DeleteButton onPress={onConfirm} />
          </ModalButtons>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

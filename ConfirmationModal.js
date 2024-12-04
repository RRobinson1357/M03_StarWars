import React from "react";
import { View, Text, Modal } from "react-native";
import styles from "./styles";

export default function ConfirmationModal(props) {
  return (
    <Modal {...props}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <Text style={styles.modalText}>{props.message}</Text>
          <Text style={styles.modalButton} onPress={props.onPressConfirm}>
            Done
          </Text>
        </View>
      </View>
    </Modal>
  );
}

ConfirmationModal.defaultProps = {
  transparent: true,
  onRequestClose: () => {},
};

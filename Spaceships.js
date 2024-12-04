import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList, TextInput } from "react-native";
import ConfirmationModal from "./ConfirmationModal";
import styles from "./styles";
import { fetchStarships } from "./api";

function Input(props) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{props.label}</Text>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string,
};

export default function Spaceships() {
  const [ships, setShips] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleInputSubmit = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    const getShips = async () => {
      const fetchedShips = await fetchStarships();
      setShips(fetchedShips);
    };

    getShips();
  }, []);

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.textInput}
        placeholder="Search"
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={handleInputSubmit}
      />
      <ConfirmationModal
        animationType="fade"
        visible={modalVisible}
        message={inputText}
        onPressConfirm={() => setModalVisible(false)}
        onPressCancel={() => setModalVisible(false)}
      />

      <FlatList
        data={ships}
        keyExtractor={(item) => item.uid.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

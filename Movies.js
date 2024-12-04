import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList, TextInput } from "react-native";
import ConfirmationModal from "./ConfirmationModal";
import styles from "./styles";
import { fetchMovies } from "./api";

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

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleInputSubmit = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies();
      setMovies(fetchedMovies);
    };

    getMovies();
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
        data={movies}
        keyExtractor={(item) => item.uid.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.properties.title}</Text>}
      />
    </View>
  );
}

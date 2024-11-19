import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { fetchStarships } from "./api";

export default function Spaceships() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const getShips = async () => {
      const fetchedShips = await fetchStarships();
      setShips(fetchedShips);
    };

    getShips();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={ships}
        keyExtractor={(item) => item.uid.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

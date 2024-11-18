import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { fetchStarships } from "./api";

export default function Spaceships() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const fetchedStarships = await fetchStarships();
      setStarships(fetchedStarships);
    };

    getStarships();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={starships}
        keyExtractor={(item) => item.uid.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.properties.name}</Text>
            <Text>Model: {item.properties.model}</Text>
          </View>
        )}
      />
    </View>
  );
}

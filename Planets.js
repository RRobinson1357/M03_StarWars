import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { fetchPlanets } from "./api";

export default function Planet() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const fetchedPlanets = await fetchPlanets();
      setPlanets(fetchedPlanets);
    };

    getPlanets();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={planets}
        keyExtractor={(item) => item.uid.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.properties.name}</Text>}
      />
    </View>
  );
}

import React from "react";

import { View, Text, StatusBar } from "react-native";

import styles from "./styles";

export default function Details({ route, navigation }) {

  const { content, title } = route.params;

  React.useLayoutEffect(() => {

    navigation.setOptions({ title });

  }, []);

  return (

    <View style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <Text>{content}</Text>

    </View>

  );

}

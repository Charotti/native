import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={(styles.text, styles.firstText)}>hello</Text>
        <Text style={(styles.text, styles.secondText)}>hello2</Text>
        <Text style={(styles.text, styles.thirdText)}>hello3</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",

    flex: 1,
  },
  inner_container: {
    backgroundColor: "white",
    border: "1px solid blue",
  },
  text: {
    marginBottom: 80,
    marginTop: 80,
    border: "1 px solid green",
  },
  firstText: {
    fontSize: 30,
  },
  secondText: {
    textAlign: "center",
  },
  thirdText: {
    color: "grey",
  },
});

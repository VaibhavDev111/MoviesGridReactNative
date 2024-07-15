import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import MoviesView from "./src/screens/movies";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} hidden={false} />
      <MoviesView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

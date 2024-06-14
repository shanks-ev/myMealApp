import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Categories from "./screens/Categories";
import { useFonts } from "expo-font";

export default function App() {
  useFonts({
    myFont: require("./assets/fonts/MouldyCheeseRegular-WyMWG.ttf"),
  });

  return (
    <>
      <StatusBar style="light" />
      <Categories />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

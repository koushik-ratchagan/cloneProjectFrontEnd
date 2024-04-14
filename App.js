import { Text, SafeAreaView, StyleSheet } from "react-native";
import AuthStack from "./Navigation/AuthStack";
import "react-native-gesture-handler";

export default function App() {
  return <AuthStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

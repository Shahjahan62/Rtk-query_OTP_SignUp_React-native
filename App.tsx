import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "./src/Signin";
import Index from "./Index";
import { store } from "./src/store";
import { Provider } from "react-redux";
import Signup from "./src/Signup";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <Index />
    </Provider>
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

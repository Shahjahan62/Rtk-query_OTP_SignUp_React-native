import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "./App";
import Signin from "./src/Signin";
import Signup from "./src/Signup";
import Otp from "./src/Otp";
const Index = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "../screens/AuthScreen/SignUpScreen";
import LoginScreen from "../screens/AuthScreen/LoginScreen";
import Settings from "../screens/SettingsScreen/Settings";
import DrawerStack from "./DrawerStack";
import SettingsStack from "./SettingsStack";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="DrawerStack" component={DrawerStack} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;

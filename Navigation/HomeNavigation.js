import { View, Text } from "react-native";
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import HomeScreen from "../screens/AuthScreen/HomeScreen";
import SettingsStack from "./SettingsStack";
import AddPostStack from "./AddPostStack";
const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name="SettingsStack"
        component={SettingsStack}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name="AddPostStack"
        component={AddPostStack}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

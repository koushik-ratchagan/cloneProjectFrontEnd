import { View, Text } from "react-native";
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import HomeScreen from "../screens/AuthScreen/HomeScreen";
import SettingsStack from "./SettingsStack";
import Settings from "../screens/SettingsScreen/Settings";
import NotificationSettingScreen from "../screens/SettingsScreen/NotificationSettingScreen";
import MessageSettings from "../screens/SettingsScreen/MessageSettings";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="notification settings"
        component={NotificationSettingScreen}
      />
      <Stack.Screen name="message settings" component={MessageSettings} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

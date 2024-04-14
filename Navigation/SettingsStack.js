import { View, Text } from "react-native";
import React from "react";
import Settings from "../screens/SettingsScreen/Settings";
import NotificationSettingScreen from "../screens/SettingsScreen/NotificationSettingScreen";
import MessageSettings from "../screens/SettingsScreen/MessageSettings";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="notification settings"
        component={NotificationSettingScreen}
      />
      <Stack.Screen name="message settings" component={MessageSettings} />
    </Stack.Navigator>
  );
};

export default SettingsStack;

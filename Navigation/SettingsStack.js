import { View, Text } from "react-native";
import React from "react";
import Settings from "../screens/SettingsScreen/Settings";
import NotificationSettingScreen from "../screens/SettingsScreen/NotificationSettingScreen";
import MessageSettings from "../screens/SettingsScreen/MessageSettings";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import TimeLineSettings from "../screens/SettingsScreen/TimeLineSettings";
import ExploreSettiings from "../screens/SettingsScreen/ExploreSettiings";

const Stack = createStackNavigator();

const SettingsStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />

      <Stack.Screen name="TimelineSettings" component={TimeLineSettings} />

      <Stack.Screen name="ExploreSettiings" component={ExploreSettiings} />
      <Stack.Screen
        name="notification settings"
        component={NotificationSettingScreen}
      />
      <Stack.Screen name="message settings" component={MessageSettings} />
    </Stack.Navigator>
  );
};

export default SettingsStack;

import { View, Text } from "react-native";
import React from "react";
import AllNotificationScreen from "../screens/NotificationTabScreens/AllNotificationScreen";
import VerifiedNotificationScreen from "../screens/NotificationTabScreens/VerifiedNotificationScreen";
import MentionsNotificationScreen from "../screens/NotificationTabScreens/MentionsNotificationScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
const NotificationTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={AllNotificationScreen} />
      <Tab.Screen name="Verified" component={VerifiedNotificationScreen} />
      <Tab.Screen name="Mentions" component={MentionsNotificationScreen} />
    </Tab.Navigator>
  );
};

export default NotificationTabs;

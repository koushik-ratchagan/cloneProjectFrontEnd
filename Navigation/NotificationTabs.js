import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import AllNotificationScreen from "../screens/NotificationTabScreens/AllNotificationScreen";
import VerifiedNotificationScreen from "../screens/NotificationTabScreens/VerifiedNotificationScreen";
import MentionsNotificationScreen from "../screens/NotificationTabScreens/MentionsNotificationScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
import { useNavigation } from "@react-navigation/native";
import Fab from "../components/Headers/Fab";
import { FontAwesome6 } from "@expo/vector-icons";
const NotificationTabs = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate("AddPostStack");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="All" component={AllNotificationScreen} />
        <Tab.Screen name="Verified" component={VerifiedNotificationScreen} />
        <Tab.Screen name="Mentions" component={MentionsNotificationScreen} />
      </Tab.Navigator>

      <Fab
        handleNavigation={handleNavigation}
        icon={<FontAwesome6 name="add" size={24} color="white" />}
      />
    </SafeAreaView>
  );
};

export default NotificationTabs;

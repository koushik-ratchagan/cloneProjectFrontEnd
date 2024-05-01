import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../TabScreens/Home";
import Search from "../TabScreens/Search";
import Subscribe from "../TabScreens/Subscribe";
import Notification from "../TabScreens/Notification";
import Mail from "../TabScreens/Mail";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useDrawerStatus } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setinitialSettingsScreen } from "../../redux/SettingRedux/SettingsAction";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isDrawerOpen = useDrawerStatus() === "open";

  const navtigator = useNavigation();

  const handelDrawerStatus = () => {
    if (isDrawerOpen) {
      navigation.closeDrawer();
    } else {
      navigation.openDrawer();
    }
  };

  const renderHearderLeft = () => {
    return (
      <TouchableOpacity onPress={handelDrawerStatus}>
        <Ionicons name="person-circle-sharp" size={34} color="black" />
      </TouchableOpacity>
    );
  };

  const handelSettingsScreen = (navigationKey, navigationScreen) => {
    navtigator.navigate(navigationKey, { screen: navigationScreen });
    // dispatch(setinitialSettingsScreen(navigationScreen));
  };

  const renderHeaderRight = (navigationKey, navigationScreen) => {
    return (
      <TouchableOpacity
        onPress={() => handelSettingsScreen(navigationKey, navigationScreen)}
      >
        <Feather name="settings" size={24} color="black" />
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: "",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Foundation name="home" size={25} color="black" />,

          headerLeft: () => {
            return renderHearderLeft();
          },

          headerRight: () => {
            return renderHeaderRight("SettingsStack", "TimelineSettings");
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Ionicons name="search-outline" size={24} color="black" />
          ),

          headerLeft: () => {
            return renderHearderLeft();
          },

          headerRight: () => {
            return renderHeaderRight("SettingsStack", "ExploreSettiings");
          },
        }}
      />
      <Tab.Screen
        name="Subscribe"
        component={Subscribe}
        options={{
          tabBarIcon: () => (
            <FontAwesome6 name="x-twitter" size={24} color="black" />
          ),

          headerLeft: () => {
            return renderHearderLeft();
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: () => (
            <Ionicons name="notifications-outline" size={24} color="black" />
          ),

          headerLeft: () => {
            return renderHearderLeft();
          },
          headerRight: () => {
            return renderHeaderRight("SettingsStack", "notification settings");
          },
        }}
      />
      <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarIcon: () => <AntDesign name="mail" size={24} color="black" />,

          headerLeft: () => {
            return renderHearderLeft();
          },
          headerRight: () => {
            return renderHeaderRight("SettingsStack", "message settings");
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

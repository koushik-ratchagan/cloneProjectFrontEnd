import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ForYouSceens from "../screens/HomeTabScreens/ForYouSceens";
import FollowingScreen from "../screens/HomeTabScreens/FollowingScreen";

const Tab = createMaterialTopTabNavigator();

const HomeTopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="For You" component={ForYouSceens} />
      <Tab.Screen name="Following" component={FollowingScreen} />
    </Tab.Navigator>
  );
};

export default HomeTopTabs;

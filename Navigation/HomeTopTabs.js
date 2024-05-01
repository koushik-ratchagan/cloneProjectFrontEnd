import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ForYouSceens from "../screens/HomeTabScreens/ForYouSceens";
import FollowingScreen from "../screens/HomeTabScreens/FollowingScreen";
import Fab from "../components/Headers/Fab";
import { FontAwesome6 } from "@expo/vector-icons";
const Tab = createMaterialTopTabNavigator();
import { useNavigation } from "@react-navigation/native";

const HomeTopTabs = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate("AddPostStack");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="For You" component={ForYouSceens} />
        <Tab.Screen name="Following" component={FollowingScreen} />
      </Tab.Navigator>
      <Fab
        handleNavigation={handleNavigation}
        icon={<FontAwesome6 name="add" size={24} color="white" />}
      />
    </SafeAreaView>
  );
};

export default HomeTopTabs;

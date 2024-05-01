import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchForYou from "../screens/SearchTabScreens/SearchForYou";
import SearchEntertainmentScreen from "../screens/SearchTabScreens/SearchEntertainmentScreen";
import SearchTrendeingScreen from "../screens/SearchTabScreens/SearchTrendeingScreen";
import SearchSportsScreen from "../screens/SearchTabScreens/SearchSportsScreen";
import SearchNewsScreen from "../screens/SearchTabScreens/SearchNewsScreen";
const Tab = createMaterialTopTabNavigator();
import { useNavigation } from "@react-navigation/native";
import Fab from "../components/Headers/Fab";
import { FontAwesome6 } from "@expo/vector-icons";

const SearchTabNavigation = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate("AddPostStack");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator screenOptions={{ tabBarScrollEnabled: true }}>
        <Tab.Screen name="For You" component={SearchForYou} />
        <Tab.Screen name="Trending" component={SearchTrendeingScreen} />
        <Tab.Screen name="News" component={SearchNewsScreen} />
        <Tab.Screen name="Sports" component={SearchSportsScreen} />
        <Tab.Screen
          name="Entertainment"
          component={SearchEntertainmentScreen}
        />
      </Tab.Navigator>
      <Fab
        handleNavigation={handleNavigation}
        icon={<FontAwesome6 name="add" size={24} color="white" />}
      />
    </SafeAreaView>
  );
};

export default SearchTabNavigation;

import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchForYou from "../screens/SearchTabScreens/SearchForYou";
import SearchEntertainmentScreen from "../screens/SearchTabScreens/SearchEntertainmentScreen";
import SearchTrendeingScreen from "../screens/SearchTabScreens/SearchTrendeingScreen";
import SearchSportsScreen from "../screens/SearchTabScreens/SearchSportsScreen";
import SearchNewsScreen from "../screens/SearchTabScreens/SearchNewsScreen";
const Tab = createMaterialTopTabNavigator();

const SearchTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarScrollEnabled: true }}>
      <Tab.Screen name="For You" component={SearchForYou} />
      <Tab.Screen name="Trending" component={SearchTrendeingScreen} />
      <Tab.Screen name="News" component={SearchNewsScreen} />
      <Tab.Screen name="Sports" component={SearchSportsScreen} />
      <Tab.Screen name="Entertainment" component={SearchEntertainmentScreen} />
    </Tab.Navigator>
  );
};

export default SearchTabNavigation;

import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/DrawerScreens/Profile";
import Premium from "../screens/DrawerScreens/Premium";
import BookMarks from "../screens/DrawerScreens/BookMarks";
import Communities from "../screens/DrawerScreens/Communities";
import Monetization from "../screens/DrawerScreens/Monetization";
import Lists from "../screens/DrawerScreens/Lists";
import Spaces from "../screens/DrawerScreens/Spaces";
import HomeNavigation from "./HomeNavigation";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeNavigation"
        options={{ headerShown: false }}
        component={HomeNavigation}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Premium" component={Premium} />
      <Drawer.Screen name="Communities" component={Communities} />
      <Drawer.Screen name="BookMarks" component={BookMarks} />
      <Drawer.Screen name="Lists" component={Lists} />
      <Drawer.Screen name="Spaces" component={Spaces} />
      <Drawer.Screen name="Monetization" component={Monetization} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

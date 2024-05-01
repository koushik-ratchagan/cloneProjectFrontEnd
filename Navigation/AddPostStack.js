import { View, Text } from "react-native";
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import AddTweet from "../screens/AddPostScreens/AddTweet";
import SendMail from "../screens/AddPostScreens/SendMail";

const Stack = createStackNavigator();

const AddPostStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddTweet" component={AddTweet} />
      <Stack.Screen name="SendMail" component={SendMail} />
    </Stack.Navigator>
  );
};

export default AddPostStack;

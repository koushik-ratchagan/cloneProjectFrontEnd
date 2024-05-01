import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HighlightsTab from "../screens/ProfileTabScreens/HighlightsTab";
import RepliesTab from "../screens/ProfileTabScreens/RepliesTab";
import MediaTab from "../screens/ProfileTabScreens/MediaTab";
import LikesTab from "../screens/ProfileTabScreens/LikesTab";
import SubsTab from "../screens/ProfileTabScreens/SubsTab";
import PostsTab from "../screens/ProfileTabScreens/PostsTab";

const Tab = createMaterialTopTabNavigator();

const PostViewStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
      }}
    >
      <Tab.Screen name="PostsTab" component={PostsTab} />
      <Tab.Screen name="RepliesTab" component={RepliesTab} />
      <Tab.Screen name="SubsTab" component={SubsTab} />
      <Tab.Screen name="HighlightsTab" component={HighlightsTab} />
      <Tab.Screen name="MediaTab" component={MediaTab} />
      <Tab.Screen name="LikesTab" component={LikesTab} />
    </Tab.Navigator>
  );
};

export default PostViewStack;

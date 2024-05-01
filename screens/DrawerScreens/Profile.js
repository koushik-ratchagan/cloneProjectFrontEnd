import {
  View,
  ScrollView,
  Image,
  Dimensions,
  Animated,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Text,
  FlatList,
} from "react-native";
import PostDetails from "../../components/PostDetails/PostDetails";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { data } from "../../dummyJson";
import PostViewStack from "../../Navigation/PostViewStack";

const HEADER_MAX_HEIGHT = 90;
const HEADER_MIN_HEIGHT = 35;

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content"></StatusBar>

      <ImageBackground
        source={{
          uri: "https://images.assettype.com/thequint/2018-11/6f4a801f-bcec-413b-8583-7afdfa884e61/27051_pti5_27_2018_000204b.jpg",
        }}
        style={{
          height: HEADER_MAX_HEIGHT + HEADER_MIN_HEIGHT,
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          zIndex: 5,
        }}
      ></ImageBackground>

      <ScrollView
        style={{
          marginTop: HEADER_MAX_HEIGHT + HEADER_MIN_HEIGHT,
          flex: 1,

          display: "flex",
          flexDirection: "column",
        }}
        stickyHeaderIndices={[1]}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View>
          <PostDetails />
        </View>

        <View
          style={{
            flex: 2,
          }}
        >
          <PostViewStack />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

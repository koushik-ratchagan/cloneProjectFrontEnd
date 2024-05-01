import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const FollowingScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);
  return (
    <View>
      {posts.map((data) => {
        return <Text>{data?.post_Description}</Text>;
      })}
    </View>
  );
};

export default FollowingScreen;

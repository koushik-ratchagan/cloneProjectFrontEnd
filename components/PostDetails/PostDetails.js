import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const PostDetails = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Image
            source={{ uri: "https://wallpapercave.com/wp/wp7469951.jpg" }}
            style={{ width: 50, height: 50, borderRadius: 30 }}
          ></Image>
          <View>
            <Text>chennai</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text>follow</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ marginBottom: 10 }}>djijdijdidid dededed</Text>
        <Text style={{ marginBottom: 10 }}>djijdijdidid dededed</Text>
        <Text style={{ marginBottom: 10 }}>djijdijdidid dededed</Text>
      </View>
    </View>
  );
};

export default PostDetails;

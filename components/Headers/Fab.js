import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Fab = ({ icon, handleNavigation }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        width: 65,
        height: 65,
        right: 10,
        bottom: 12,
        backgroundColor: "black",
        borderRadius: 80,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={handleNavigation}
    >
      <View>{icon}</View>
    </TouchableOpacity>
  );
};

export default Fab;

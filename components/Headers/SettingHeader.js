import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SettingHeader = ({ title, backBtn }) => {
  const navigator = useNavigation();
  const handleGoBack = () => {
    navigator.goBack();
  };

  const handleGotosettings = () => {
    navigator.navigate("settings");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: "center",
      }}
    >
      {backBtn && (
        <TouchableOpacity onPress={handleGotosettings}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Text style={{ fontSize: 15 }}>{title}</Text>

      <TouchableOpacity onPress={handleGoBack}>
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingHeader;

import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Fab from "../../components/Headers/Fab";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Mail = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate("AddPostStack", { screen: "SendMail" });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Mail</Text>
      </View>
      <Fab
        handleNavigation={handleNavigation}
        icon={
          <MaterialCommunityIcons
            name="email-plus-outline"
            size={24}
            color="white"
          />
        }
      />
    </SafeAreaView>
  );
};

export default Mail;

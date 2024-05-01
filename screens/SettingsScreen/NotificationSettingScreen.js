import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import SettingHeader from "../../components/Headers/SettingHeader";

const NotificationSettingScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <SettingHeader backBtn={true} title="Notification" /> */}
      <View style={{ backgroundColor: "#cccc", flex: 1 }}></View>
    </SafeAreaView>
  );
};

export default NotificationSettingScreen;

import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import SettingHeader from "../../components/Headers/SettingHeader";

const MessageSettings = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <SettingHeader backBtn={true} title="Message" /> */}
      <View style={{ backgroundColor: "#ccc", flex: 1 }}></View>
    </SafeAreaView>
  );
};

export default MessageSettings;

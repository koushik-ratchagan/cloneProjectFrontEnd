import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleSignUp = async () => {
    try {
      const data = {
        userName: userName,
        password: password,
        phoneNumber: phoneNumber,
        dateOfBirth: "2000-04-12",
      };
      const response = await axios.post(
        "https://projectbackend-1-zfen.onrender.com/api/user/createUser",
        data
      );
      if (response?.data) {
        navigation.navigate("DrawerStack");
      }
    } catch (error) {
      console.log(error, "test 2");
    }
  };

  return (
    <SafeAreaView>
      <View>
        <View style={{ paddingHorizontal: 15 }}>
          <TextInput
            placeholder="user name"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              width: "100%",
              height: 30,
              marginBottom: 10,
            }}
            value={userName}
            onChangeText={(newText) => setUserName(newText)}
          />
          <TextInput
            placeholder="phone number"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              width: "100%",
              height: 30,
              marginBottom: 10,
            }}
            value={phoneNumber}
            onChangeText={(newText) => setPhoneNumber(newText)}
          />
          <TextInput
            placeholder="password"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              width: "100%",
              height: 30,
              marginBottom: 10,
            }}
            value={password}
            onChangeText={(newText) => setPassword(newText)}
          />

          {/* <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              width: "100%",
              height: 30,
              marginBottom: 10,
            }}
          /> */}

          <TouchableOpacity onPress={handleSignUp}>
            <Text>sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

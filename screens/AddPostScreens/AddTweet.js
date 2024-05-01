import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const AddTweet = () => {
  const [image, setImage] = useState(null);
  const [postDesc, setPostDesc] = useState(null);

  // Request permission to access the camera roll
  const requestCameraRollPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access camera roll is required!");
      }
    }
  };

  // Open the device's image picker
  const pickImage = async () => {
    await requestCameraRollPermission();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const upload = async () => {
    const formData = new FormData();
    function generateUniqueFilename() {
      const uniqueFilename = "image_" + Date.now();
      return uniqueFilename;
    }
    const uniqueFilename = generateUniqueFilename();
    formData.append("user_id", 3);
    formData.append("post_description", postDesc);
    formData.append("image", {
      uri: image,
      name: uniqueFilename,
      type: "image/jpeg",
    });

    try {
      console.log(formData, "kiejdi");
      const response = await axios.post(
        "https://projectbackend-1-zfen.onrender.com/api/posts",
        formData
      );
    } catch (error) {}
  };

  const handleChange = (newText) => {
    setPostDesc(newText);
  };

  // const handleFile = (e) => {
  //   setImage(e.target.files[0]);
  // };
  return (
    <View>
      {/* <input onChange={handleFile} type="file"></input> */}
      <TextInput
        onChangeText={handleChange}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "black",
          padding: 10,
        }}
      />

      <TouchableOpacity
        onPress={upload}
        style={{
          backgroundColor: "black",
          width: 80,
          height: 40,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white" }}>post</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={pickImage}
        style={{
          backgroundColor: "black",
          width: 80,
          height: 40,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>upload</Text>
      </TouchableOpacity>

      {image && (
        <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      )}

      <TouchableOpacity
        onPress={() => setImage(null)}
        style={{
          backgroundColor: "black",
          width: 80,
          height: 40,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>clear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTweet;

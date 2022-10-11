import { Image, useWindowDimensions } from "react-native";
import React from "react";
import styles from "./styles";
import { Text, View } from "../Themed";
import { Feather } from "@expo/vector-icons";

const HomeHeader = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width: width }]}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        }}
        resizeMode="cover"
        style={styles.avatar}
      />
      <Text style={styles.title}>Home</Text>
      <View style={styles.iconContainer}>
        <Feather
          name="camera"
          color="grey"
          size={24}
          style={{ marginEnd: 10 }}
        />
        <Feather name="edit-2" color="grey" size={24} />
      </View>
    </View>
  );
};

export default HomeHeader;

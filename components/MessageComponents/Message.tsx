import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./style";
import Colors from "../../constants/Colors";

const Message = ({ message }: any) => {
  const isMe = message.user.id === "u1";
  return (
    <View
      style={[
        styles.container,
        isMe ? styles.leftContainer : styles.righttContainer,
      ]}
    >
      <Text style={[styles.content, { color: isMe ? "white" : "black" }]}>
        {message.content}
      </Text>
    </View>
  );
};

export default Message;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./style";

const Message = ({ message }: any) => {
  const isMe = message.user.id === "u1";
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMe ? "#3872E9" : "lightgrey",
          marginStart: !isMe ? "auto" : 10,
        },
      ]}
    >
      <Text style={[styles.content, { color: isMe ? "white" : "black" }]}>
        {message.content}
      </Text>
    </View>
  );
};

export default Message;

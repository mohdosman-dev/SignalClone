import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed";
import styles from "./styke";
import { Entypo, Feather, SimpleLineIcons } from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Entypo
            name="emoji-happy"
            size={24}
            color="grey"
            style={{ marginEnd: 8 }}
          />
        </TouchableOpacity>
        <TextInput
          style={{ flex: 1, marginEnd: 4 }}
          placeholder="Write a message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity>
          <Feather
            name="camera"
            size={24}
            color="grey"
            style={{ marginEnd: 8 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <SimpleLineIcons name="microphone" size={24} color="grey" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnContainer}>
        <Feather
          name={message.length == 0 ? "plus" : "send"}
          size={20}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

export default MessageInput;

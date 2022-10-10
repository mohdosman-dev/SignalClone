import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed";
import styles from "./styles";

const ChatRowItem = ({ chatRoom, navigator }: any) => {
  const user = chatRoom.users[1];
  return (
    <TouchableOpacity onPress={() => navigator}>
      <View style={styles.container}>
        <Image
          source={{
            uri: user.imageUri,
          }}
          style={styles.avatarImage}
          resizeMode="cover"
        />
        {chatRoom.newMessages && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
          </View>
        )}
        <View style={{ marginStart: 10, flex: 7 }}>
          <View style={styles.headerContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.text}>12:00 AM</Text>
          </View>
          <Text style={styles.text} numberOfLines={1}>
            {chatRoom.lastMessage.content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRowItem;

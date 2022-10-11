import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import Message from "../components/MessageComponents/Message";
import chats from "../assets/dummy-data/Chats";

import { Text, View } from "../components/Themed";
import MessageInput from "../components/MessageInputComponents/MessageInput";
import { useRoute } from "@react-navigation/native";

const ChatRoomScreen = () => {
  const route = useRoute();
  const chatRoom = route.params ?? { users: [] };

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chats.messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
  },
});

export default ChatRoomScreen;

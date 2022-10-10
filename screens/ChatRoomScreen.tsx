import { StyleSheet, FlatList } from "react-native";
import Message from "../components/MessageComponents/Message";
import chats from "../assets/dummy-data/Chats";

import { Text, View } from "../components/Themed";

const ChatRoomScreen = () => {
  return (
    <View>
      <FlatList
        data={chats.messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Message message={item} />}
        inverted={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatRoomScreen;

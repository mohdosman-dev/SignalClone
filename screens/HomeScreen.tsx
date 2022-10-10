import { StyleSheet, FlatList } from "react-native";
import { View } from "../components/Themed";
import chats from "../assets/dummy-data/ChatRooms";

import { RootTabScreenProps } from "../types";
import ChatRowItem from "../components/ChatRoomComponents/ChatRowItem";

const HomeScreen = ({ navigation }: RootTabScreenProps<"TabOne">) => (
  <View style={styles.container}>
    <FlatList
      data={chats}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatRowItem chatRoom={item} />}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;

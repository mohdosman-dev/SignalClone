import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 65,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingEnd: 16,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  iconContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;

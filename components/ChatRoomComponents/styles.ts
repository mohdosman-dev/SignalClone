import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  badgeContainer: {
    width: 20,
    height: 20,
    backgroundColor: "#3872E9",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 8,
    zIndex: 1,
    start: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "white",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    top: 0,
    start: 0,
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "space-between",
    marginBottom: 8,
    flex: 1,
    width: "100%",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    overflow: "visible",
    color: "grey",
  },
});

export default styles;

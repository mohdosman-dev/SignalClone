import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    padding: 16,
  },
  inputContainer: {
    flex: 1,
    marginEnd: 8,
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
    justifyContent: "flex-start",
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#dedede",
    flexDirection: "row",
    alignItems: "center",
  },
  btnContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary.text,
    borderRadius: 50,
  },
});

export default styles;

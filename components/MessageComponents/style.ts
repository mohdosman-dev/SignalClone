import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const styles = StyleSheet.create({
  container: {
    maxWidth: "75%",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  leftContainer: {
    backgroundColor: Colors.primary.text,
    marginEnd: "auto",
    marginStart: 10,
  },
  righttContainer: {
    backgroundColor: "lightgrey",
    marginStart: "auto",
    marginEnd: 10,
  },
  content: {
    color: "white",
  },
});

export default styles;

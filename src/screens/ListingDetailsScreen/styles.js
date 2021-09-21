import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  details: {
    backgroundColor: "#f8f4f4",
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  image: {
    flex: 2,
    width: null,
  },
  textSection: {
    flex: 3,
    margin: 20,
  },
  textItem: {
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    color: "green",
    marginBottom: 20,
  },
});

export default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    maxHeight: 300,
    width: "90%",
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
  },
  textSection: {
    flex: 1, 
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15, 
    backgroundColor: "white",
    minHeight: 80,
  },
  textItem: {
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
});

export default styles;
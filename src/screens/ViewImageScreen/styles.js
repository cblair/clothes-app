import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    backgroundColor: "black",
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignContent: "space-between"
  },
  close: {
    flex: 1,
    flexDirection: "row",
  },
  trash: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  imageContainer: {
    position: "absolute",
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: "center", 
    alignItems: "center",
  },
  image: {
    
    // width: "100%",
    height: "30%",
    
  },
});

export default styles;
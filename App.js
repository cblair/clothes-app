import React from "react";
import { Dimensions, StyleSheet, SafeAreaView, View, Text } from "react-native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import AppText from "./src/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";

export default function App() {
  console.log(Dimensions.get("screen"));

  const { landscape } = useDeviceOrientation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <ViewImageScreen image={require("./src/assets/couch.jpg" )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

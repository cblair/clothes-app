import React, { useState } from "react";
import { Dimensions, StyleSheet, SafeAreaView, View, Text, Switch } from "react-native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import AppText from "./src/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import MyAccountScreen from "./src/screens/MyAccountScreen";
import ListScreen from "./src/screens/ListScreen";
import { TextInput } from "react-native-gesture-handler";
import AppTextInput from "./src/components/AppTextInput";
import Screen from "./src/components/Screen";
import AppPicker from "./src/components/AppPicker";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import AAA from "./src/components/AAA";

export default function App() {
  return (
    <AAA unauthenticatedComponent={<LoginScreen />}>
      <ListScreen />
    </AAA>
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

import React from "react";
import { Image, ImageBackground, Platform, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

function WelcomeScreen(props) {
  return (
    <ImageBackground 
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={Platform.OS === "android" ? 3 : 10}
      >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 16 }}>Sell What You Don't Need</Text>
      </View>
      <Button 
        title="Login"
      />
      <Button 
        title="Register"
        secondary
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    flex: 1,
    // justifyContent: "center"
    top: 50,
  }
});

export default WelcomeScreen;

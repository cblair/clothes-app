import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListItem from '../components/ListItem'
import Screen from '../components/Screen';
import colors from '../config/colors';

function IconItem({icon, iconColor, title}) {
  return (
    <View style={iconItemStyles.container}>
      <View style={{...iconItemStyles.iconContainer, backgroundColor: iconColor}}>
        <MaterialCommunityIcons name={icon} size={15} color={colors.white} style={iconItemStyles.icon} />
      </View>
      <View>
        <Text style={iconItemStyles.title}>{title}</Text>
      </View>
    </View>
  );
}

const iconItemStyles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    // margin: 10,
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    marginRight: 10,
  },
  icon: {

  },
});


export default function MyAccountScreen() {
  return (
    <View style={styles.container}>
      <Screen>
          <View>
            <ListItem image={require("../assets/colby.jpg")} title="Colby Blair" subtitle="colby.blair@gmail.com" />
          </View>
          <View style={styles.menu}>
            <IconItem icon="format-list-bulleted" iconColor={colors.red} title="My Listings" />
            <IconItem icon="email" iconColor={colors.green} title="My Messages" />
          </View>
          <View style={styles.logout}>
            <IconItem icon="logout" iconColor={colors.yellow} title="Logout" />
          </View>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  menu: {
    flex: 1,
    paddingTop: 30,
  },
  logout: {
    flex: 1,
  },
})

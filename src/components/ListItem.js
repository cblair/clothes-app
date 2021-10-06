import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import Swipable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors";

export default function ListItem({image, title, subtitle, onPress, renderRightActions}) {
  return (
    <Swipable
      renderRightActions={renderRightActions}
    >
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium} style={styles.rightIcon} />
        </View>
      </TouchableHighlight>
    </Swipable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.medium,
  },
  rightIcon: {

  },
});

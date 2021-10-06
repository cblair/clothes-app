import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, width, ...otherProps }) {
  return (
    <View style={{...styles.container, width}}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
      <TextInput style={styles.textInput}  {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    ...defaultStyles.text,
    width: "100%",
  },
  icon: {
    marginRight: 10,
    
  },
});

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function ListItemDeleteActions({onPress}) {
  return (
    <TouchableWithoutFeedback 
      onPress={onPress}
    >
      <View
        style={styles.wrapper}
      >
        <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "red", 
    height: "100%",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
})

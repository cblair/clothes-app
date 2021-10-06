import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from "./styles";

function Button({title, secondary, children, onPress}) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: secondary ? "#4ecdc4" : "#fc5c65",
      }}
      onPress={onPress}
    >
      <Text style={{ fontWeight: "bold", color: "white" }}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
}

export default Button;
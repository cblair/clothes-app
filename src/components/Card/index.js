import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from "./styles";
  
function Card({title, subtitle, image}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.textSection}>
        <Text style={styles.textItem}>
          {title}
        </Text>
        <Text style={{...styles.textItem, color: "green"}}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}

export default Card;
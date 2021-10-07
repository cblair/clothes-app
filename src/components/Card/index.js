import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from "./styles";
  
function Card({title, subtitle, image, onPress}) {
  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.textSection}>
          <Text style={styles.textItem}>
            {title}
          </Text>
          <Text style={{...styles.textItem, color: "green"}}>
            {subtitle}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Card;
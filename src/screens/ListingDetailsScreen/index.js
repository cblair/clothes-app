import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import styles from './styles';

function ListingDetailsScreen({title, subtitle, image}) {
  // <Image source={image} style={styles.image} resizeMode="contain" />
  console.log({title, subtitle, image})
  return (
    <View style={styles.details}>
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

export default ListingDetailsScreen;
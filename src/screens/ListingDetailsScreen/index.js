import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import styles from './styles';

import ListItem from "../../components/ListItem"

function ListingDetailsScreen({title, subtitle, image}) {
  return (
    <View style={styles.details}>
      <Image source={image} style={styles.image} resizeMode="cover" />

      <View style={styles.textSection}>
        <Text style={styles.textItem}>
          {title}
        </Text>
        <Text style={{...styles.textItem, ...styles.subtitle}}>
          {subtitle}
        </Text>
        <ListItem 
          image={require("../../assets/colby.jpg")}
          title="Colby Blair"
          subtitle="5 listings"
        />
      </View>
    </View>
  );
}

export default ListingDetailsScreen;
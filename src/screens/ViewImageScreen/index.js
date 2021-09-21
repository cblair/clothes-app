import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import styles from './styles';

function ViewImageScreen({image}) {
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.icons}>
        <View style={styles.close}>
          <Ionicons name="close" size={30} color="white" />
        </View>
        <View style={styles.trash}>
          <Ionicons name="trash" size={30} color="white" />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
    </SafeAreaView>
  );
}

export default ViewImageScreen;
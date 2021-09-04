import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from "./styles";
import Card from "../../components/Card";

function ListScreen(props) {
  return (
    <SafeAreaView style={styles.list}>
      <Card 
        title="Red Jacket for Sale" 
        subtitle="$100" 
        image={require("../../assets/jacket.jpg")}
      />
      <Card 
        title="Red Jacket for Sale" 
        subtitle="$100" 
        image={require("../../assets/jacket.jpg")}
      />
      <Card 
        title="Red Jacket for Sale" 
        subtitle="$100" 
        image={require("../../assets/jacket.jpg")}
      />
    </SafeAreaView>
  );
}

export default ListScreen;
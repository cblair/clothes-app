import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from "./styles";
import Card from "../../components/Card";

function ListScreen() {

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:1337/garment", {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        const items = await response.json();
        setItems(items);
      }
    } catch (error) {
      console.error("ERROR: getting ListScreen items, error:", JSON.stringify({error}))
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <SafeAreaView style={styles.list}>
      {items.map(item => (
        <Card
          key={item.id}
          title={item.title} 
          subtitle={item.price}
          image={require("../../assets/jacket.jpg")}
          onPress={() => {}}
        />
    ))}
    </SafeAreaView>
  );
}

export default ListScreen;
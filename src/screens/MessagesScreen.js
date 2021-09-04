import React, { useState } from 'react'
import { StyleSheet, FlatList, SafeAreaView, View } from 'react-native'

import ListItem from "../components/ListItem";
import ListItemDeleteActions from '../components/ListItemDeleteActions';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from "../components/Screen";

const fakeInitialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require("../assets/colby.jpg"),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require("../assets/colby.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(fakeInitialMessages);
  const [refreshing, setRefreshing] = useState(false)
  const handleDelete = message => {
    setMessages(messages.filter(({id}) => id !== message.id))
  };

  return (
    <Screen>
      <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()}
        refreshing={refreshing}
        onRefresh={() => setMessages(fakeInitialMessages)}
        renderItem={({item}) => 
          <ListItem 
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("pressed")}
            renderRightActions={()=> <ListItemDeleteActions onPress={() => handleDelete(item)} />}
          />
        }
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  
});

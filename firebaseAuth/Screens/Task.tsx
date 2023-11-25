import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import database from '@react-native-firebase/database';

export default function Task() {
  const [inputText, setInputText] = useState<any>('');
  const [listData, setListData] = useState<any>([]);

  const addTaskToFirebase = () => {
    if (inputText !== '') {
      // Push the task to Firebase
      database()
        .ref('Tasks')
        .push({
          task: inputText,
        })
    }
  };

  const handlePress = () => {
    
    setListData([...listData, inputText]);
 
    setInputText('');
 
    addTaskToFirebase();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.addButton}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={listData}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  task: {
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

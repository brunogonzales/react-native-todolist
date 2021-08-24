import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState('');

  function submitHandler() {
    addTodo({ text: text, key: Math.random().toString() });
    setText('');
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={setText}
        value={text}
      />
      <Button title="add todo" onPress={submitHandler} color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

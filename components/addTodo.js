import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  function submitHandler() {
    if (text.length > 3) {
      addTodo({ text: text, key: Math.random().toString() });
      setText("");
    } else {
      Alert.alert("OOps", "Todos must be over 3 chars long", [
        { Text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
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
    borderBottomColor: "#ddd",
  },
});

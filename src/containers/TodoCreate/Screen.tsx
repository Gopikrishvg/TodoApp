import React from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface TodoProps {
  placeholder?: string;
  todoChangeHandler: (txt: string) => void;
}

function TodoTextArea({placeholder, todoChangeHandler}: TodoProps) {
  return (
    <View style={styles.textAreaConatiner}>
      <TextInput
        placeholder="Enter your note ahare"
        onChangeText={todoChangeHandler}
      />
    </View>
  );
}

export interface CreateProps {
  todoChangeHandler: (txt: string) => void;
}

export default function TodoCreateScreen({todoChangeHandler}: CreateProps) {
  return (
    <View>
      <SafeAreaView>
        <Text>Create</Text>
        <TodoTextArea todoChangeHandler={todoChangeHandler} />
        <View>
          <Button onPress={() => null} title="Reset Text" />
          <Button title="Save" onPress={() => null} />
          <Button title="Cancel" onPress={() => null} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  textAreaConatiner: {
    width: '90%',
    height: '60%',
    paddingVertical: 12,
    paddingHorizontal: 4,
    backgroundColor: '#fff',
  },
});

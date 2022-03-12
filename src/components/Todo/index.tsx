import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const noteHeight = height * 0.72;

export interface TodoProps {
  todoTitleChangeHandler: (title: string) => void;
  todoChangeHandler: (todo: string) => void;
}

export function Todo({todoTitleChangeHandler, todoChangeHandler}: TodoProps) {
  return (
    <View style={styles.todoConatiner}>
      <TextInput
        placeholder="Enter a title"
        onChangeText={todoTitleChangeHandler}
        style={styles.inputContainer}
      />
      <TextInput
        multiline={true}
        placeholder="Enter a note"
        onChangeText={todoChangeHandler}
        style={[styles.inputContainer, {minHeight: noteHeight}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoConatiner: {
    width: '94%',
    height: '60%',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  inputContainer: {
    margin: '1%',
    height: 42,
    width: '99%',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 2,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

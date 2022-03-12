import React from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {Todo} from '../../components/Todo';

export interface CreateProps {
  todoTitleChangeHandler: (title: string) => void;
  todoChangeHandler: (todo: string) => void;
  saveClickHandler: () => void;
  cancelClickHandler: () => void;
}

function TodoCreateScreen({
  todoTitleChangeHandler,
  todoChangeHandler,
  saveClickHandler,
  cancelClickHandler,
}: CreateProps) {
  return (
    <View>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>New Note</Text>
              <View style={styles.bottonContainer}>
                <Button title="Save" onPress={() => saveClickHandler()} />
                <Button title="Cancel" onPress={() => cancelClickHandler()} />
              </View>
            </View>
            <View style={styles.todoContentContainer}>
              <Todo
                todoTitleChangeHandler={todoTitleChangeHandler}
                todoChangeHandler={todoChangeHandler}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default TodoCreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollContainer: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 6,
  },
  headerContainer: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 2,
    backgroundColor: '#e5e5e5',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  todoContentContainer: {
    alignItems: 'center',
  },
  bottonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

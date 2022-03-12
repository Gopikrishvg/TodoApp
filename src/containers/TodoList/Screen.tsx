import React from 'react';
import {
  View,
  Button,
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Todo from '../../components/Todo';
import CheckBox from '../../components/CheckBox';
import FaIcon from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('screen');

function TodoItem({todo}: any) {
  return (
    <View style={styles.todoContainer}>
      <CheckBox />
      <View style={styles.todoTxtContainer}>
        <View>
          <Text>{todo.note}</Text>
        </View>
      </View>
      <View style={styles.todoIconConatiner}>
        <TouchableOpacity style={styles.iconWrapper}>
          <FaIcon name="edit" size={18} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <FaIcon name="trash" size={18} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

interface Props {
  todo: string;
  showTodo: boolean;
  createTodoHandler: () => void;
  updateTodoHandler: (action: boolean) => void;
  changeTodoHandler: (todo: string) => void;
}

const data = [
  {
    id: 1,
    note: 'this is sample node',
    completed: true,
  },
  {
    id: 2,
    note: 'this is sample node with diddefnt value test testing for multiple line',
    completed: true,
  },
];

function TodoListScreen({
  todo,
  showTodo,
  createTodoHandler,
  updateTodoHandler,
  changeTodoHandler,
}: Props) {
  function renderList({item}: any) {
    return (
      <View>
        <TodoItem todo={item} />
      </View>
    );
  }

  return (
    <View>
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Note List</Text>
            <View style={styles.bottonContainer}>
              <Button title="Create" onPress={() => createTodoHandler()} />
            </View>
          </View>
          <View style={styles.contentContainer}>
            <FlatList data={data} renderItem={renderList} />
          </View>
        </View>

        <View>
          <Todo
            title="New Note"
            todo={todo}
            showTodo={showTodo}
            todoChangeHandler={changeTodoHandler}
            todoUpdateHandler={updateTodoHandler}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

export default TodoListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
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
  contentContainer: {
    width: '100%',
    height: height * 0.74,
    paddingHorizontal: 16,
    paddingVertical: 2,
    backgroundColor: '#f2f2f2',
  },
  todoContainer: {
    width: '100%',
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoTxtContainer: {
    width: '80%',
    minHeight: 52,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 4,
    marginVertical: 4,
    borderRadius: 4,
    elevation: 2,
    backgroundColor: 'lightblue',
  },
  todoIconConatiner: {
    justifyContent: 'space-between',
  },
  iconWrapper: {
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
});

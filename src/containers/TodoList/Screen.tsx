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
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import Todo from '../../components/Todo';
import CheckBox from '../../components/CheckBox';
import {todo} from '../../store/reducers';

const {width, height} = Dimensions.get('screen');

interface TodoItemProps {
  todo: todo;
  editable: boolean;
  changeCheckBoxHandler: (status: boolean) => void;
  editTodoHnandler: (id: number) => void;
  deleteTodoHandler: (id: number) => void;
}

function TodoItem({
  todo,
  editable,
  changeCheckBoxHandler,
  editTodoHnandler,
  deleteTodoHandler,
}: TodoItemProps) {
  return (
    <View style={styles.todoContainer}>
      <CheckBox
        editable={editable}
        changeCheckBoxHandler={changeCheckBoxHandler}
      />
      <View style={styles.todoTxtContainer}>
        <View>
          <Text>{todo.title}</Text>
        </View>
      </View>
      <View style={styles.todoIconConatiner}>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => editTodoHnandler(todo.id)}>
          <FaIcon name="edit" size={18} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => deleteTodoHandler(todo.id)}>
          <FaIcon name="trash" size={18} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

interface Props {
  todo: string | undefined;
  todos: todo[] | null;
  showTodo: boolean;
  editable: boolean;
  changeCheckBoxHandler: (status: boolean) => void;
  createTodoHandler: () => void;
  updateTodoSubmitHandler: (action: boolean) => void;
  changeTodoHandler: (todo: string) => void;
  editTodoHnandler: (id: number) => void;
  deleteTodoHandler: (id: number) => void;
}

function TodoListScreen({
  todo,
  todos,
  showTodo,
  editable,
  createTodoHandler,
  updateTodoSubmitHandler,
  changeTodoHandler,
  changeCheckBoxHandler,
  editTodoHnandler,
  deleteTodoHandler,
}: Props) {
  function renderList({item}: any) {
    return (
      <View>
        <TodoItem
          todo={item}
          editable={editable}
          changeCheckBoxHandler={changeCheckBoxHandler}
          editTodoHnandler={editTodoHnandler}
          deleteTodoHandler={deleteTodoHandler}
        />
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
            <FlatList
              data={todos}
              renderItem={renderList}
              contentContainerStyle={{paddingBottom: 20}}
            />
          </View>
        </View>

        <View>
          <Todo
            title="New Note"
            todo={todo}
            showTodo={showTodo}
            todoChangeHandler={changeTodoHandler}
            todoUpdateHandler={updateTodoSubmitHandler}
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
    height: height * 0.82,
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

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import TodListScreen from './Screen';
import {StackNavParams} from '../../navigation';

type Props = NativeStackScreenProps<StackNavParams, 'TodoList'>;

interface State {
  showTodo: boolean;
  todo: string;
  editable: boolean;
  isCompleted: boolean;
}

class TodoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showTodo: false,
      todo: '',
      editable: true,
      isCompleted: false,
    };
  }

  createTodoHandler = () => {
    this.setState({
      showTodo: true,
    });
  };

  changeTodoHandler = (val: string) => {
    this.setState({
      todo: val,
    });
  };

  updateTodoHandler = (val: boolean) => {
    this.setState({
      showTodo: false,
    });
  };

  changeCheckBoxHandler = (val: boolean) => {
    this.setState({
      isCompleted: val,
    });
  };

  editTodoHnandler = () => {};
  deleteTodoHandler = () => {};

  render() {
    return (
      <TodListScreen
        todo={this.state.todo}
        showTodo={this.state.showTodo}
        editable={this.state.editable}
        createTodoHandler={this.createTodoHandler}
        changeTodoHandler={this.changeTodoHandler}
        updateTodoHandler={this.updateTodoHandler}
        changeCheckBoxHandler={this.changeCheckBoxHandler}
        editTodoHnandler={this.editTodoHnandler}
        deleteTodoHandler={this.deleteTodoHandler}
      />
    );
  }
}

export default TodoList;

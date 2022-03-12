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
}

class TodoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showTodo: false,
      todo: '',
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

  render() {
    return (
      <TodListScreen
        todo={this.state.todo}
        showTodo={this.state.showTodo}
        createTodoHandler={this.createTodoHandler}
        changeTodoHandler={this.changeTodoHandler}
        updateTodoHandler={this.updateTodoHandler}
      />
    );
  }
}

export default TodoList;

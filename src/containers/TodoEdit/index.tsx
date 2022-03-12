import React from 'react';
import {View, Text} from 'react-native';
import TodoList from '../TodoList';
import TodoEditScreen from './Screen';

export interface Props {
  name?: string;
}

interface State {}

class TodoEdit extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return <TodoEditScreen />;
  }
}

export default TodoEdit;

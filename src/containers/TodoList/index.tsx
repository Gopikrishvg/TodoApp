import React from 'react';
import {View, Text} from 'react-native';
import TodListScreen from './Screen';

export interface Props {}

interface State {}

class TodoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return <TodListScreen />;
  }
}

export default TodoList;

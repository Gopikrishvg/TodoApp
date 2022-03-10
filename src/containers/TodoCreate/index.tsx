import React from 'react';
import {View, Text} from 'react-native';
import TodoCreateScreen from './Screen';

export interface Props {
  name?: string;
}

interface State {
  todo: string;
}

class TodoCreate extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todo: '',
    };
  }

  todoChangeHandler = (val: string) => {
    console.log('Val   : ', val);
    this.setState({
      todo: val,
    });
  };

  render() {
    return <TodoCreateScreen todoChangeHandler={this.todoChangeHandler} />;
  }
}

export default TodoCreate;

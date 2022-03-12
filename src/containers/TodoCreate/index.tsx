import React from 'react';
import {View, Text} from 'react-native';
import TodoCreateScreen from './Screen';

export interface Props {
  name?: string;
}

interface State {
  title: string;
  todo: string;
}

class TodoCreate extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todo: '',
      title: '',
    };
  }

  todoChangeHandler = (val: string) => {
    this.setState({
      todo: val,
    });
  };

  todoTitleChangeHandler = (val: string) => {
    this.setState({
      title: val,
    });
  };

  saveClickHandler = () => {
    console.log(this.state);
  };

  cancelClickHandler = () => {
    console.log(this.state);
  };

  render() {
    return (
      <TodoCreateScreen
        todoTitleChangeHandler={this.todoTitleChangeHandler}
        todoChangeHandler={this.todoChangeHandler}
        saveClickHandler={this.saveClickHandler}
        cancelClickHandler={this.cancelClickHandler}
      />
    );
  }
}

export default TodoCreate;

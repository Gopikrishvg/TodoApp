import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {View, Text} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import TodListScreen from './Screen';
import {StackNavParams} from '../../navigation';
import {ActionType, getTodo} from '../../store/actions';
import {AppDispatch, RootState} from '../../store';
import {todo} from '../../store/reducers';

type NavProps = NativeStackScreenProps<StackNavParams, 'TodoList'>;

interface StateProps {
  todos: todo[] | null;
}

interface DispatchProps {
  onGetTodo: () => void;
}

type Props = StateProps & DispatchProps & NavProps;

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

  updateTodoSubmitHandler = (val: boolean) => {
    if (val) {
      const data = {
        userId: 1,
        title: this.state.todo,
        complated: false,
      };
      console.log(data);
    }
    this.setState({
      showTodo: false,
      todo: '',
    });
  };

  changeCheckBoxHandler = (val: boolean) => {
    this.setState({
      isCompleted: val,
    });
  };

  editTodoHnandler = () => {};
  deleteTodoHandler = () => {};

  componentDidMount = () => {
    this.props.onGetTodo();
  };

  render() {
    return (
      <TodListScreen
        todo={this.state.todo}
        todos={this.props.todos}
        showTodo={this.state.showTodo}
        editable={this.state.editable}
        createTodoHandler={this.createTodoHandler}
        changeTodoHandler={this.changeTodoHandler}
        updateTodoSubmitHandler={this.updateTodoSubmitHandler}
        changeCheckBoxHandler={this.changeCheckBoxHandler}
        editTodoHnandler={this.editTodoHnandler}
        deleteTodoHandler={this.deleteTodoHandler}
      />
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    todos: state.todos.todos,
  };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    onGetTodo: () => dispatch({type: ActionType.GET_TODO}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

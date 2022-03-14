import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {View, Text} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import TodListScreen from './Screen';
import {StackNavParams} from '../../navigation';
import {ActionType, getTodo, createTodo} from '../../store/actions';
import {AppDispatch, RootState} from '../../store';
import {todo} from '../../store/reducers';

type NavProps = NativeStackScreenProps<StackNavParams, 'TodoList'>;

export interface CreateTodo {
  title: string | undefined;
  userId: number;
  completed: boolean;
}

interface StateProps {
  todos: todo[] | null;
  postStatus: boolean;
  updateStatus: boolean;
}

interface DispatchProps {
  onGetTodo: () => void;
  onCreateTodo: (data: CreateTodo) => void;
  onUpdateTodo: (data: CreateTodo, id: number | undefined) => void;
  onDeleteTodo: (id: number | undefined) => void;
}

type Props = StateProps & DispatchProps & NavProps;

interface State {
  showTodo: boolean;
  todo: string | undefined;
  editable: boolean;
  isCompleted: boolean;
  kindOfAction: string;
  updateId: number | undefined;
}

class TodoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showTodo: false,
      todo: '',
      editable: true,
      isCompleted: false,
      kindOfAction: 'C',
      updateId: -1,
    };
  }

  createTodoHandler = () => {
    this.setState({
      showTodo: true,
      kindOfAction: 'C',
    });
  };

  changeTodoHandler = (val: string) => {
    this.setState({
      todo: val,
    });
  };

  updateTodoSubmitHandler = (val: boolean) => {
    if (val) {
      if (this.state.kindOfAction == 'C') {
        // create todo
        const data = {
          userId: 1,
          title: this.state.todo,
          completed: false,
        };
        console.log(data);
        this.props.onCreateTodo(data);
      } else {
        //update todo
        console.log('update');
        const data = {
          userId: 1,
          title: this.state.todo,
          completed: false,
        };
        this.props.onUpdateTodo(data, this.state.updateId);
      }
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

  editTodoHnandler = (id: number) => {
    const data = this.props.todos?.find(item => item.id == id);
    this.setState({
      showTodo: true,
      kindOfAction: 'U',
      todo: data?.title,
      updateId: data?.id,
    });
  };
  deleteTodoHandler = (id: number) => {
    this.props.onDeleteTodo(id);
  };

  componentDidMount = () => {
    this.props.onGetTodo();
  };

  componentDidUpdate = (prevProps: Props) => {
    if (
      this.props.postStatus == true &&
      this.props.postStatus !== prevProps.postStatus
    ) {
      this.props.onGetTodo();
    }
    if (
      this.props.updateStatus == true &&
      this.props.updateStatus !== prevProps.updateStatus
    ) {
      this.props.onGetTodo();
    }
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
    postStatus: state.todos.postStatus,
    updateStatus: state.todos.updateStatus,
  };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    onGetTodo: () => dispatch({type: ActionType.GET_TODO}),
    onCreateTodo: (data: CreateTodo) =>
      dispatch({type: ActionType.POST_TODO, data}),
    onUpdateTodo: (data: CreateTodo, id: number | undefined) =>
      dispatch({type: ActionType.UPDATE_TODO, data, id}),
    onDeleteTodo: (id: number | undefined) =>
      dispatch({type: ActionType.DELETE_TODO, id}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

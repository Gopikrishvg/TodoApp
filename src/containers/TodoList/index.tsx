import React from 'react';
import {View, Text} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import TodListScreen from './Screen';
import {StackNavParams} from '../../navigation';

type ScreenNavigationProps<RouteName extends keyof StackNavParams> =
  StackNavigationProp<StackNavParams, RouteName>;

type ScreenRouteProps<RouteName extends keyof StackNavParams> = RouteProp<
  StackNavParams,
  RouteName
>;

type Props<T extends keyof StackNavParams> = {
  route: ScreenRouteProps<T>;
  navigation: ScreenNavigationProps<T>;
};

interface State {
  list: array;
}

class TodoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  createClickHandler = () => {};

  render() {
    return <TodListScreen createClickHandler={this.createClickHandler} />;
  }
}

export default TodoList;

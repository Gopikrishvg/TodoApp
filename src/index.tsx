import React from 'react';
import {View, Text} from 'react-native';
import TodoList from './containers/TodoList';
import TodoCreate from './containers/TodoCreate';
import TodoEdit from './containers/TodoEdit';

interface Props {}

export default function MainApp() {
  return <TodoCreate />;
}

import React from 'react';
import RootNavigation from './navigation';
import TodoList from './containers/TodoList';
import TodoCreate from './containers/TodoCreate';
import TodoEdit from './containers/TodoEdit';

export default function MainApp() {
  return <RootNavigation />;
}

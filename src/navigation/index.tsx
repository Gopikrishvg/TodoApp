import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoList from '../containers/TodoList';
import TodoCreate from '../containers/TodoCreate';
import TodoEdit from '../containers/TodoEdit';
export type StackNavParams = {
  TodoList: undefined;
  TodoCreate: undefined;
  TodoEdit: undefined;
};

const Stack = createNativeStackNavigator<StackNavParams>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="TodoCreate" component={TodoCreate} />
        <Stack.Screen name="TodoEdit" component={TodoEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Todos} from './screens';
import {IRoute} from '../models';
import CompletedTodosIcon from '../assets/svg/completed_todos.svg';
import TodosIcon from '../assets/svg/todos.svg';

const Stack = createNativeStackNavigator();

export const routesConfig: IRoute[] = [
  {
    name: 'Todos',
    title: 'Todos',
    icon: TodosIcon,
    component: Todos,
  },
  // {
  //   name: 'CompletedTodos',
  //   title: 'Completed',
  //   icon: CompletedTodosIcon,
  //   component: CompletedTodos,
  // },
];

function Routes(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {routesConfig.map(({name, component}) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
}

export default Routes;

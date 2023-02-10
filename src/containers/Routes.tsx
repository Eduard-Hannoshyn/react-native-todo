import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Todos} from './screens';

const Stack = createNativeStackNavigator();

function Routes(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Todos" component={Todos} />
    </Stack.Navigator>
  );
}

export default Routes;

import React from 'react';
import {Provider} from 'react-redux';
import {setupStore} from '../store/store';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AppLayout from './AppLayout';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function App(): JSX.Element {
  const store = setupStore();

  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme}>
        <AppLayout />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

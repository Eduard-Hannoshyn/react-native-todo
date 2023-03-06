import React from 'react';
import {useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {setupStore} from '../store/store';
import {SafeBackgroundContainer} from '../components';
import {Notifications, Todos} from './index';

const texture = require('../assets/img/texture.jpeg');

function App(): JSX.Element {
  const store = setupStore();
  const isDarkMode = useColorScheme() === 'light';

  return (
    <Provider store={store}>
      <Notifications isDarkMode={isDarkMode} />
      <SafeBackgroundContainer
        isDarkMode={isDarkMode}
        textureSource={texture}
        component={Todos}
      />
    </Provider>
  );
}

export default App;

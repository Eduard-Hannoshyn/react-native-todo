import React from 'react';
import {useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {setupStore} from '../store/store';
import Todos from './Todos';
import SafeBackgroundContainer from './SafeBackgroundContainer';
import Notifications from './Notifications';

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

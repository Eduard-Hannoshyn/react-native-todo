import React from 'react';
import {useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {setupStore} from '../store/store';
import Todos from './Todos';
import SafeBackgroundContainer from './SafeBackgroundContainer';
import Notifications from './Notifications';
import {NotificationType} from '../models/INotification';

const texture = require('../assets/img/texture.jpeg');

const notifications = [
  {
    id: '1',
    type: NotificationType.success,
    message: 'Some Message',
  },
  {
    id: '2',
    type: NotificationType.info,
    message: 'info',
  },
  {
    id: '3',
    type: NotificationType.failed,
    message: 'info',
  },
];

function App(): JSX.Element {
  const store = setupStore();
  const isDarkMode = useColorScheme() === 'light';

  return (
    <Provider store={store}>
      <Notifications isDarkMode={isDarkMode} notifications={notifications} />
      <SafeBackgroundContainer
        isDarkMode={isDarkMode}
        textureSource={texture}
        component={Todos}
      />
    </Provider>
  );
}

export default App;

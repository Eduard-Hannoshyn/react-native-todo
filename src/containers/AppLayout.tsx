import React from 'react';
import {useColorScheme} from 'react-native';
import {SafeBackgroundContainer} from '../components';
import {Notifications} from './notifications';
import Routes, {routesConfig} from './Routes';
import {Navigation} from './navigation';

const texture = require('../assets/img/texture.jpeg');

function AppLayout(): JSX.Element {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <>
      <Notifications isDarkMode={isDarkMode} />
      <SafeBackgroundContainer isDarkMode={isDarkMode} textureSource={texture}>
        <Routes />
        <Navigation routesConfig={routesConfig} />
      </SafeBackgroundContainer>
    </>
  );
}

export default AppLayout;

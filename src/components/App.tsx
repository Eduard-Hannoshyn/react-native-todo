/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  useColorScheme,
} from 'react-native';
import {Provider} from 'react-redux';
import {setupStore} from '../store/store';
import ToDo from './ToDo';

const texture = require('../assets/img/texture.jpeg');

function App(): JSX.Element {
  const store = setupStore();
  const isDarkMode = useColorScheme() === 'light';

  return (
    <Provider store={store}>
      <ImageBackground
        source={texture}
        resizeMode="cover"
        style={styles.container}>
        <View style={[styles.container, styles.overlay]}>
          <SafeAreaView style={styles.container}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <ToDo />
          </SafeAreaView>
        </View>
      </ImageBackground>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default App;

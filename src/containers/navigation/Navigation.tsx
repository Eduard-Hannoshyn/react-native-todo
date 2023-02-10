import React from 'react';
import {StyleSheet, View} from 'react-native';

function Routes(): JSX.Element {
  return <View style={styles.container} />;
}

export default Routes;

const styles = StyleSheet.create({
  container: {
    height: '80px',
    backgroundColor: 'red',
  },
});

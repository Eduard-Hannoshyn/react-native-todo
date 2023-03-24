import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IRoute} from '../../models';

interface IProps {
  routesConfig: IRoute[];
}

function Navigation(props: IProps): JSX.Element {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'red',
  },
});

export default Navigation;

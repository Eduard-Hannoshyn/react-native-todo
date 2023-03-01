import React, {ComponentType} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';

interface IProps {
  isDarkMode: boolean;
  textureSource: ImageSourcePropType;
  component: ComponentType;
}

function SafeBackgroundContainer(props: IProps): JSX.Element {
  const {isDarkMode, textureSource, component: Component} = props;
  return (
    <ImageBackground
      source={textureSource}
      resizeMode="cover"
      style={styles.container}>
      <View style={[styles.container, styles.overlay]}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Component />
        </SafeAreaView>
      </View>
    </ImageBackground>
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

export default SafeBackgroundContainer;

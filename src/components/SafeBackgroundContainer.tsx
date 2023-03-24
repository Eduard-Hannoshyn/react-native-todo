import React, {PropsWithChildren} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';

type IProps = PropsWithChildren<{
  isDarkMode: boolean;
  textureSource: ImageSourcePropType;
}>;

function SafeBackgroundContainer(props: IProps): JSX.Element {
  const {isDarkMode, textureSource, children} = props;
  return (
    <ImageBackground
      source={textureSource}
      resizeMode="cover"
      style={styles.container}>
      <View style={[styles.container, styles.overlay]}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          {children}
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

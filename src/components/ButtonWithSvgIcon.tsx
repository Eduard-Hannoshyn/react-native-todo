import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';
import {SvgProps} from 'react-native-svg';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';

type IProps = PropsWithChildren<{
  icon: React.FC<SvgProps>;
  onPress: (event: GestureResponderEvent) => void;
  title?: string;
  isLast?: boolean;
}>;

function ButtonWithSvgIcon(props: IProps): JSX.Element {
  const {icon: Icon, onPress, title, isLast, children} = props;
  const text = title || children;

  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="transparent"
      onPress={onPress}>
      <View style={[styles.container, isLast && styles.last]}>
        <Icon width="25" height="25" fill="white" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  last: {
    paddingRight: 0,
  },
  text: {
    paddingLeft: 5,
    color: 'white',
  },
});

export default ButtonWithSvgIcon;

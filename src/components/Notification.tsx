import React, {useRef, useEffect} from 'react';
import {Text, StyleSheet, Animated} from 'react-native';
import {INotification, NotificationType} from '../models/INotification';
import SuccessIcon from '../assets/svg/success.svg';
import FailedIcon from '../assets/svg/failed.svg';
import InfoIcon from '../assets/svg/info.svg';
import {BlurView} from '@react-native-community/blur';

interface IProps {
  isOpen: boolean;
  index: number;
  notification: INotification;
  windowHeight: number;
}

const GAP = 5;
const HEIGHT = 60;

function Notification(props: IProps): JSX.Element {
  const {isOpen, index, notification, windowHeight} = props;
  const {type, message} = notification;
  const Icon = iconMapper[type];
  const translateY = (isOpen ? HEIGHT + GAP : GAP) * index;
  const anim = useRef(new Animated.Value(windowHeight * -1)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: translateY,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [translateY, anim]);

  return (
    <Animated.View
      style={[styles.shadowContainer, {transform: [{translateY: anim}]}]}>
      <BlurView style={styles.blurContainer} blurType="light" blurAmount={2}>
        <Icon width="25" height="25" fill="rgba(0, 255, 0, 0.6)" />
        <Text style={styles.text}>{message}</Text>
      </BlurView>
    </Animated.View>
  );
}

const iconMapper = {
  [NotificationType.success]: SuccessIcon,
  [NotificationType.failed]: FailedIcon,
  [NotificationType.info]: InfoIcon,
};

const styles = StyleSheet.create({
  shadowContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 12,
    shadowOffset: {
      width: 1,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  blurContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: HEIGHT,
  },
  text: {
    paddingLeft: 5,
    color: 'white',
  },
});

export default Notification;

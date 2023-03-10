import React, {useRef, useEffect, memo} from 'react';
import {Text, StyleSheet, Animated, View} from 'react-native';
import {INotification, NotificationType} from '../../models';
import SuccessIcon from '../../assets/svg/success.svg';
import FailedIcon from '../../assets/svg/failed.svg';
import InfoIcon from '../../assets/svg/info.svg';
import CloseIcon from '../../assets/svg/close.svg';
import {BlurView} from '@react-native-community/blur';
import {ButtonWithSvgIcon} from '../../components';
import {globalSlice} from '../../store/reducers/globalSlice';
import {useAppDispatch} from '../../hook';
import {useTimer} from '../../hook';

interface IProps {
  isOpen: boolean;
  isOneNotification: boolean;
  index: number;
  notification: INotification;
  windowHeight: number;
}

const GAP = 5;
const HEIGHT = 60;

function Notification(props: IProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {deleteNotification, toggleNotifications} = globalSlice.actions;
  const {isOpen, isOneNotification, index, notification} = props;
  const {id, type, message} = notification;
  const Icon = iconMapper[type];
  const translateY = (isOpen ? HEIGHT + GAP : GAP) * index;
  const anim = useRef(new Animated.Value(HEIGHT * -3)).current;
  const [clearTimer] = useTimer(() => dispatch(deleteNotification(id)), 4500);

  useEffect(() => {
    if (isOpen) {
      clearTimer();
    }
  }, [isOpen, clearTimer]);

  useEffect(() => {
    Animated.timing(anim, {
      toValue: translateY,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [translateY, anim]);

  const handleCloseNotification = () => {
    dispatch(deleteNotification(id));

    if (isOpen && isOneNotification) {
      dispatch(toggleNotifications());
    }
  };

  return (
    <Animated.View
      style={[styles.shadowContainer, {transform: [{translateY: anim}]}]}>
      <BlurView style={styles.blurContainer} blurType="light" blurAmount={2}>
        <View style={styles.contentContainer}>
          <Icon width="20" height="20" />
          <Text style={styles.text}>{message}</Text>
        </View>
        <ButtonWithSvgIcon
          icon={CloseIcon}
          onPress={handleCloseNotification}
          title="Close"
          isLast
        />
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
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: HEIGHT,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    paddingLeft: 5,
    color: 'white',
  },
});

export default memo(Notification);

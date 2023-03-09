import React, {useEffect, useRef} from 'react';
import Notification from './Notification';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Animated,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {useAppDispatch, useAppSelector} from '../../hook';
import {
  makeSelectIsNotificationsOpen,
  makeSelectNotification,
} from '../../store/selectors/globalSeletor';
import {globalSlice} from '../../store/reducers/globalSlice';
import usePrev from '../../hook/usePrev';

interface IProps {
  isDarkMode: boolean;
}

function Notifications(props: IProps): JSX.Element {
  const {isDarkMode} = props;
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(makeSelectNotification());
  const isOpen = useAppSelector(makeSelectIsNotificationsOpen());
  const {toggleNotifications, deleteNotifications} = globalSlice.actions;
  const windowHeight = Dimensions.get('window').height;
  const isPrevOpen = usePrev(isOpen);
  const anim = useRef(new Animated.Value(-windowHeight)).current;
  const translateY = isOpen ? 0 : -windowHeight;

  useEffect(() => {
    if (!isOpen && isPrevOpen) {
      dispatch(deleteNotifications());
    }
    // eslint-disable-next-line
  }, [isOpen, isPrevOpen]);

  useEffect(() => {
    Animated.timing(anim, {
      toValue: translateY,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [translateY, anim]);

  const handleOpenNotifications = () => {
    dispatch(toggleNotifications());
  };

  return (
    <>
      <Animated.View
        style={[styles.animatedContainer, {transform: [{translateY: anim}]}]}>
        <BlurView blurType="dark" blurAmount={5} style={styles.blurContainer} />
      </Animated.View>
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <TouchableHighlight
          activeOpacity={1}
          underlayColor="transparent"
          style={styles.touchable}
          onPress={handleOpenNotifications}>
          <View>
            {notifications.map((notification, index) => (
              <Notification
                isOpen={isOpen}
                index={index}
                key={notification.id}
                notification={notification}
                windowHeight={windowHeight}
              />
            ))}
          </View>
        </TouchableHighlight>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  animatedContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 100,
  },
  blurContainer: {
    flex: 1,
  },
  safeContainer: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
    zIndex: 100,
  },
  touchable: {
    flex: 1,
  },
});

export default Notifications;

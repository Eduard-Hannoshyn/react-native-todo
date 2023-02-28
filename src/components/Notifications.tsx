import React, {useState} from 'react';
import Notification from './Notification';
import {INotification, NotificationType} from '../models/INotification';
import {View, TouchableHighlight, StyleSheet} from 'react-native';

const notifications: INotification[] = [
  {
    id: '1',
    type: NotificationType.success,
    message: 'Some Message',
  },
  {
    id: '2',
    type: NotificationType.info,
    message: 'info',
  },
  {
    id: '2',
    type: NotificationType.failed,
    message: 'info',
  },
];

function Notifications(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNotifications = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor="transparent"
      style={styles.container}
      onPress={handleOpenNotifications}>
      <View>
        {notifications.map((notification, index) => (
          <Notification
            isOpen={isOpen}
            key={notification.id}
            index={index}
            notification={notification}
          />
        ))}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
  },
});

export default Notifications;

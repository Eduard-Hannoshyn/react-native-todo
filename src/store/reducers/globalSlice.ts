import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import {INotification, INotificationAction} from '../../models';

interface IState {
  isNotificationsOpen: boolean;
  notifications: INotification[];
}

const initialState: IState = {
  isNotificationsOpen: false,
  notifications: [],
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    addNotification(state, action: PayloadAction<INotificationAction>) {
      const {type, message} = action.payload;
      const newNotification: INotification = {
        id: uuid.v4() as string,
        type,
        message,
      };

      state.notifications.push(newNotification);
    },
    deleteNotification(state, action: PayloadAction<INotification['id']>) {
      state.notifications = state.notifications.filter(
        ({id}) => id !== action.payload,
      );
    },
    toggleNotifications(state) {
      state.isNotificationsOpen = !state.isNotificationsOpen;
    },
    deleteNotifications(state) {
      state.notifications = [];
    },
  },
});

export default globalSlice.reducer;

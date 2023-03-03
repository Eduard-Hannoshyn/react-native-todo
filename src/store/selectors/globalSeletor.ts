import {RootState} from '../store';
import {createSelector} from '@reduxjs/toolkit';

const selectGlobal = (state: RootState) => state.global;

export const makeSelectNotification = () =>
  createSelector(selectGlobal, global => global.notifications);

export const makeSelectIsNotificationsOpen = () =>
  createSelector(selectGlobal, global => global.isNotificationsOpen);

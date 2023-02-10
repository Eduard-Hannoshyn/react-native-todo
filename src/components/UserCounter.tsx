import {Button, Text} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../hook/redux';
import {userSlice} from '../store/reducers/UserSlice';

function UserCounter() {
  const {count} = useAppSelector(state => state.userReducer);
  const {increment} = userSlice.actions;
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment(3));
  };

  return (
    <>
      <Text>{count}</Text>
      <Button onPress={handleIncrement} title={'increment'} />
    </>
  );
}

export default UserCounter;

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {IAction} from '../models/IAction';
import DoneIcon from '../assets/svg/done.svg';
import TrashIcon from '../assets/svg/trash.svg';
import ButtonWithSvgIcon from './ButtonWithSvgIcon';
import {todosSlice} from '../store/reducers/todosSlice';
import {useAppDispatch} from '../hook/redux';

interface IProps {
  item: IAction;
  index: number;
}

function TodoItem({item, index}: IProps): JSX.Element {
  const {id, text} = item;
  const dispatch = useAppDispatch();
  const {deleteTodo, toggleTodo} = todosSlice.actions;

  const handleDeleteAction = () => {
    dispatch(deleteTodo(id));
  };

  const handleToggleAction = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {index + 1}. {text}
      </Text>
      <View style={styles.buttonSection}>
        <ButtonWithSvgIcon
          icon={DoneIcon}
          onPress={handleToggleAction}
          title="Done"
        />
        <ButtonWithSvgIcon
          icon={TrashIcon}
          onPress={handleDeleteAction}
          title="Delete"
          isLast
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    flexGrow: 1,
    flexShrink: 1,
    color: 'white',
    fontSize: 17,
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TodoItem;

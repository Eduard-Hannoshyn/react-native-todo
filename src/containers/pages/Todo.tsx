import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ITodo} from '../../models';
import DoneIcon from '../../assets/svg/done.svg';
import TrashIcon from '../../assets/svg/trash.svg';
import {ButtonWithSvgIcon} from '../../components';
import {todosSlice} from '../../store/reducers/todosSlice';
import {useAppDispatch} from '../../hook';

interface IProps {
  todo: ITodo;
  index: number;
}

function Todo({todo, index}: IProps): JSX.Element {
  const {id, text} = todo;
  const dispatch = useAppDispatch();
  const {deleteTodo, toggleTodo} = todosSlice.actions;

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = () => {
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
          onPress={handleToggleTodo}
          title="Done"
        />
        <ButtonWithSvgIcon
          icon={TrashIcon}
          onPress={handleDeleteTodo}
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

export default Todo;

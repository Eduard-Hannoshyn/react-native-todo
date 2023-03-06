import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hook/redux';
import {todosSlice} from '../../store/reducers/todosSlice';
import Todo from './Todo';
import {makeSelectUncompletedTodos} from '../../store/selectors/todosSelector';
import {globalSlice} from '../../store/reducers/globalSlice';
import {NotificationType} from '../../models';

function Todos(): JSX.Element {
  const dispatch = useAppDispatch();
  const {addTodo} = todosSlice.actions;
  const {addNotification} = globalSlice.actions;
  const uncompletedTodos = useAppSelector(makeSelectUncompletedTodos());

  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    const notification = {
      type: NotificationType.success,
      message: 'Todo successful added',
    };

    dispatch(addTodo(inputText));
    dispatch(addNotification(notification));

    setInputText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todos</Text>
      <TextInput
        selectionColor={'white'}
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={handleSubmit}
      />
      <View style={[styles.container, styles.listContainer]}>
        <FlatList
          data={uncompletedTodos}
          renderItem={({item, index}) => <Todo todo={item} index={index} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingTop: 30,
  },
  header: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
    color: 'white',
  },
  input: {
    borderRadius: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    padding: 10,
  },
});

export default Todos;

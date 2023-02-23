import React, {useState} from 'react';
import {StyleSheet, TextInput, FlatList, View, Text} from 'react-native';
import {IAction} from '../models/IAction';
import {useAppDispatch, useAppSelector} from '../hook/redux';
import {todosSlice} from '../store/reducers/todosSlice';
import TodoItem from './TodoItem';
import uuid from 'react-native-uuid';

function ToDo(): JSX.Element {
  const [inputText, setInputText] = useState('');
  const actions = useAppSelector(state =>
    state.todos.filter(({done}) => !done),
  );
  const dispatch = useAppDispatch();
  const {addTodo} = todosSlice.actions;

  const handleSubmit = () => {
    const newAction: IAction = {
      id: uuid.v4() as string,
      text: inputText,
      done: false,
      // date: new Date(),
    };

    dispatch(addTodo(newAction));
    setInputText('');
  };

  return (
    <View style={[styles.container]}>
      <Text style={styles.header}>ToDo</Text>
      <TextInput
        selectionColor={'white'}
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={handleSubmit}
      />
      <View style={[styles.container, styles.listContainer]}>
        <FlatList
          data={actions}
          renderItem={({item, index}) => <TodoItem item={item} index={index} />}
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

export default ToDo;

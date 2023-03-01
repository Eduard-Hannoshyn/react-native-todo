import React, {useState} from 'react';
import {StyleSheet, TextInput, FlatList, View, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hook/redux';
import {todosSlice} from '../store/reducers/todosSlice';
import Todo from './Todo';
import {selectUncompletedTodos} from '../store/selectors/todosSelector';

function Todos(): JSX.Element {
  const [inputText, setInputText] = useState('');
  const uncompletedTodos = useAppSelector(selectUncompletedTodos);
  const dispatch = useAppDispatch();
  const {addTodo} = todosSlice.actions;

  const handleSubmit = () => {
    dispatch(addTodo(inputText));
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

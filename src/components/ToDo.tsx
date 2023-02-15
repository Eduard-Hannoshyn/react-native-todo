import React, {useState} from 'react';
import {StyleSheet, TextInput, FlatList, View, Text} from 'react-native';
import {IAction} from '../models/IAction';
import {useAppDispatch, useAppSelector} from '../hook/redux';
import {actionSlice} from '../store/reducers/ActionSlice';

function ToDo(): JSX.Element {
  const [inputText, setInputText] = useState('');
  const {actions} = useAppSelector(state => state.actionSlice);
  const dispatch = useAppDispatch();
  const {addAction} = actionSlice.actions;
  const handleSubmit = () => {
    const newAction: IAction = {
      id: actions.length,
      text: inputText,
      done: false,
      // date: new Date(),
    };

    dispatch(addAction(newAction));
    setInputText('');
  };

  return (
    <>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={handleSubmit}
      />
      <View style={styles.container}>
        <FlatList
          data={actions}
          renderItem={({item}) => (
            <Text style={styles.item}>
              {item.id}. {item.text}
            </Text>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 12,
    fontSize: 18,
    height: 44,
  },
});

export default ToDo;

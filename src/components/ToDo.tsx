import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  FlatList,
  View,
  Text,
  Button,
} from 'react-native';
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
          style={styles.container}
          renderItem={({item}) => (
            <View style={[styles.container, styles.itemContainer]}>
              <Text style={styles.item}>
                {item.id + 1}. {item.text}
              </Text>
              <View style={styles.buttonSection}>
                <Button title={'done'} />
                <Button title={'remove'} />
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  listContainer: {
    paddingTop: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    color: 'white',
    padding: 12,
    fontSize: 18,
    height: 44,
    width: '40%',
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ToDo;

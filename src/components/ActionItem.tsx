import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {IAction} from '../models/IAction';
import DoneIcon from '../assets/svg/done.svg';
import TrashIcon from '../assets/svg/trash.svg';
import ButtonWithSvgIcon from './ButtonWithSvgIcon';

interface IProps {
  item: IAction;
}

function ActionItem({item}: IProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {item.id + 1}. {item.text}
      </Text>
      <View style={styles.buttonSection}>
        <ButtonWithSvgIcon icon={DoneIcon} onPress={() => {}} title="Done" />
        <ButtonWithSvgIcon
          icon={TrashIcon}
          onPress={() => {}}
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
    flexShrink: 1,
    color: 'white',
    fontSize: 18,
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ActionItem;

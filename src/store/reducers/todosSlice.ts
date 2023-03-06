import {ITodo} from '../../models';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

const initialState: ITodo[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo['text']>) {
      const newAction: ITodo = {
        id: uuid.v4() as string,
        text: action.payload,
        completed: false,
      };

      state.unshift(newAction);
    },
    deleteTodo(state, action: PayloadAction<ITodo['id']>) {
      return state.filter(({id}) => id !== action.payload);
    },
    toggleTodo(state, action: PayloadAction<ITodo['id']>) {
      const item = state.find(({id}) => id === action.payload);

      if (item) {
        item.completed = !item.completed;
      }
    },
  },
});

export default todosSlice.reducer;

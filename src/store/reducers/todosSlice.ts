import {IAction} from '../../models/IAction';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: IAction[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<IAction>) {
      state.unshift(action.payload);
    },
    deleteTodo(state, action: PayloadAction<IAction['id']>) {
      return state.filter(({id}) => id !== action.payload);
    },
    toggleTodo(state, action: PayloadAction<IAction['id']>) {
      const item = state.find(({id}) => id === action.payload);

      if (item) {
        item.done = !item.done;
      }
    },
  },
});

export default todosSlice.reducer;

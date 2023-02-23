import {ITodo} from '../../models/ITodo';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: ITodo[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.unshift(action.payload);
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

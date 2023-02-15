import {IAction} from '../../models/IAction';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ActionState {
  actions: IAction[];
}

const initialState: ActionState = {
  actions: [],
};

export const actionSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addAction(state, action: PayloadAction<IAction>) {
      state.actions.unshift(action.payload);
    },
  },
});

export default actionSlice.reducer;

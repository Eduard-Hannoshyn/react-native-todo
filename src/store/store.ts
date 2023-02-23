import {combineReducers, configureStore} from '@reduxjs/toolkit';
import todosReducer from './reducers/todosSlice';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

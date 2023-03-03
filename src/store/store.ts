import {combineReducers, configureStore} from '@reduxjs/toolkit';
import todosReducer from './reducers/todosSlice';
import globalReducer from './reducers/globalSlice';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  todos: todosReducer,
  global: globalReducer,
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

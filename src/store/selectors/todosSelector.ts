import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

const selectTodos = (state: RootState) => state.todos;

export const selectCompletedTodos = createSelector(selectTodos, todos =>
  todos.filter(todo => todo.completed),
);

export const selectUncompletedTodos = createSelector(selectTodos, todos =>
  todos.filter(todo => !todo.completed),
);

import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

export const selectTodos = (state: RootState) => state.todos;

export const makeSelectCompletedTodos = () =>
  createSelector(selectTodos, todos => todos.filter(todo => todo.completed));

export const makeSelectUncompletedTodos = () =>
  createSelector(selectTodos, todos => todos.filter(todo => !todo.completed));

import * as types from '../constants/ActionTypes';

export const fetchTodos = () => ({
  type: types.FETCH_TODOS
})

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  todo
})

export const updateTodo = (data) => ({
  type: types.UPDATE_TODO,
  data
})

export const removeTodo = (data) => ({
  type: types.REMOVE_TODO,
  data
})

import * as types from '../constants/ActionTypes';

const initialState = [
  {
    todo: 'ES6',
    read: true
  },
  {
    todo: 'React JS basic',
    read: true
  },
  {
    todo: 'Reactjs todo app',
    read: false
  }
]

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_TODOS:
      return state;
    case types.ADD_TODO:
      return [...state, {todo: action.todo, read: false}]
    case types.UPDATE_TODO:
      let todo = state[action.data.index]
      todo.read = action.data.read
      todo.todo = action.data.todo
      return [...state]
    case types.REMOVE_TODO:
      state.splice(action.data.index, 1)
      return [...state]
    default:
      return state;
  }
}

export default reducer;

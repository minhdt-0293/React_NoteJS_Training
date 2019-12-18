import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';
import Form from './Form';

const todoList = todos => {
  let result = null;
  if(todos.length > 0) {
    result = todos.map((todo, index) => (<Todo read={todo.read} todo={todo.todo} key={index} index={index} />))
  }
  return result;
};

const Todos = props => {
  const {todos} = props;
  return(
    <div className="container">
      <p className="text-center mt-3">Todo List Today</p>
      <div className="d-flex justify-content-center mb-3">
        <ul className="list-group text-center w-25">
          {todoList(todos)}
        </ul>
      </div>
      <Form />
    </div>
  )
}

const mapStateToProp = state => ({
  todos: state.todos
})

export default connect(mapStateToProp, null)(Todos);

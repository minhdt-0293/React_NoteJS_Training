import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

const handleReadTodo = (props, index) => {
  props.updateTodo({
    index: index,
    read: !props.read,
    todo: props.todo
  })
}

const handleRemoveTodo = (props, index) => {
  props.removeTodo({index: index})
}

const Todo = props => {
  const {todo, index, read} = props;
  const styleRead = read ? {textDecoration: 'line-through', color: 'red'} : {textDecoration: 'none', color: 'blue'};
  const styleRemoveTodo = read ? {cursor: 'pointer', display: 'block'} : {display: 'none'}
  return(
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <input type="checkbox" aria-label="Checkbox for following text input"
          className="mr-3"
          checked={read}
          onChange={() => handleReadTodo(props, index)}
        />
        <span style={styleRead}>{todo}</span>
      </div>
      <div style={styleRemoveTodo} onClick={() => handleRemoveTodo(props, index)}>x</div>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  updateTodo: data => dispatch(actions.updateTodo(data)),
  removeTodo: data => dispatch(actions.removeTodo(data))
})

export default connect(null, mapDispatchToProps)(Todo);

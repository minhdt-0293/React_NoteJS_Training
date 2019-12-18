import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

const addTodo = (e, props, todo, setTodo) => {
  e.preventDefault();
  setTodo('');
  props.addTodo(todo)
}


const Form = props => {
  const [todo, setTodo] = useState('');

  return (
    <div className="d-flex justify-content-center">
      <form className="form-inline" onSubmit={(e) => addTodo(e, props, todo, setTodo)}>
        <div className="form-group mx-sm-3 mb-2">
          <input type="text" className="form-control"
            placeholder={'Add a new todo...'}
            onChange={e => setTodo(e.target.value)}
            value={todo}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Add</button>
      </form>
    </div>
  )
}

const mapDispatchToProp = dispatch => ({
  addTodo: todo => {
    dispatch(actions.addTodo(todo));
  }
});

export default connect(null, mapDispatchToProp)(Form);

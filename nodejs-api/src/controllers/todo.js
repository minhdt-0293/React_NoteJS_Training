import Todo from '../models/todo.js';

export const index = (req, res) => {
  Todo.find().then(notes => {
    res.send(notes)
  }).catch(err =>{
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving notes'
    })
  })
}

export const show = (req, res) => {
  Todo.findOne({todo: req.params.todo}).then(todo => {
    if(!todo) {
      return res.status(404).send({
          message: `todo not found with todo ${req.params.todo}`
      });
    }
    res.send(todo);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: `todo not found with todo ${req.params.todo}`
        });
    }
    return res.status(500).send({
        message: `Error retrieving todo with todo ${req.params.todo}`
    });
  });
};

export const create = (req, res) => {
  if(!req.body.todo) {
    return res.status(400).send({
      message: 'Todo content can not by empty'
    })
  }

  const todo = new Todo({
    todo: req.body.todo,
    read: false
  })

  todo.save().then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the Todo'
    })
  })
}

export const update = (req, res) => {
  if(!req.body.todo) {
    return res.status(400).send({
      message: 'Todo content can not by empty'
    })
  }

  Todo.findOneAndUpdate(
    {todo: req.params.todo},
    {todo: req.body.todo, read: req.body.read},
    {new: true}
  ).then(todo =>{
    if(!todo){
      return res.status(404).send(({
        message: `Todo not found with id ${req.params.todo}`
      }))
    }
    res.send(todo)
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
          message: `todo not found with todo ${req.params.todo}`
      });
    }
    return res.status(500).send({
        message: `Error retrieving todo with todo ${req.params.todo}`
    });
  })
}

export const destroy = (req, res) => {
  Todo.findOneAndDelete({todo: req.params.todo}).then(todo =>{
    if(!todo){
      return res.status(404).send(({
        message: `Todo not found with id ${req.params.todo}`
      }))
    }
    res.send(todo)
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
          message: `todo not found with todo ${req.params.todo}`
      });
    }
    return res.status(500).send({
        message: `Error retrieving todo with todo ${req.params.todo}`
    });
  })
}

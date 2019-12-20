const { Service } = require('feathers-mongoose');

exports.Todos = class Todos extends Service {
  async get(id, params) {
    try{
      const todo = await this.options.Model.findOne({todo: id});

      if(!todo){
        return {status: 404, message: `todo not found with todo ${id}`};
      }
      return todo;
    } catch(err) {
      if(err.kind === 'ObjectId') {
        return {status: 404, message: `todo not found with todo ${id}`};
      }
      return {status: 500, message: `Error retrieving todo with todo ${id}`};
    }
  }

  async remove(id, params) {
    const todo = await this.options.Model.findOneAndDelete({todo: id});
    if(!todo){
      return {status: 404, message: `todo not found with todo ${id}`};
    }
    return todo;
  }
};

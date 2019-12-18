import * as todoController from '../controllers/todo'

const todos = (app) => {
  app.get('/todos', todoController.index);
  app.get('/todos/:todo', todoController.show);
  app.post('/todos', todoController.create);
  app.put('/todos/:todo', todoController.update);
  app.delete('/todos/:todo', todoController.destroy);
}

export default todos;

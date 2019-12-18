import todos from './todo'

const home = (app) => {
  app.get('/', function(req, res){
    res.send('<b>This is Home Page</b>');
  })
}

const routers = (app) => {
  todos(app),
  home(app)
}

export default routers;

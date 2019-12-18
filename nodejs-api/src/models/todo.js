import mongoose from 'mongoose';

const TodoSchema = mongoose.Schema({
  todo: String,
  read: Boolean
},{
  timestamps: true
});

const todo = mongoose.model('Todo', TodoSchema);

export default todo

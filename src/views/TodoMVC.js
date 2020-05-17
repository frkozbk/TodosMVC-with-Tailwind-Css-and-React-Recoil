import React from 'react';
import 'styles/todosMVC.scss';
import AddTodo from '../components/AddTodo';

const TodoMVC = () => {
  return (
    <div className="todosMVC">
      <h1 className="todosMVC-title">todos</h1>
      <AddTodo />
    </div>
  );
};
export default TodoMVC;

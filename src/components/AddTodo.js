import React, { useState, useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { todoListState } from '../store/atoms/todoListState';
import getUniqueId from '../util/getUniqueNumber';

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);
  useEffect(() => {
    console.log(todoList);
  }, [todoList]);
  const addNewTodo = (event) => {
    if (event.key !== 'Enter' || newTodo.length === 0) return;
    setTodoList((todoList) => [
      ...todoList,
      {
        id: getUniqueId(),
        text: newTodo,
        isCompleted: false,
      },
    ]);
  };
  return (
    <section className="todosMVC-addTodo">
      <input id="toggleAll" type="checkbox" />
      <label htmlFor="toggleAll"></label>
      <input
        type="text"
        placeholder="What need to be done?"
        className="addTodo-input w-128 h-16 px-4 pr-4 pl-16 text-2xl tracking-wide"
        value={newTodo}
        onKeyDown={addNewTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
    </section>
  );
};

export default AddTodo;

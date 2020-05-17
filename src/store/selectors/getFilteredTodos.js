import { selector } from 'recoil';
import { todoListFilterState } from '../atoms/todoListFilterState';
import { todoListState } from '../atoms/todoListState';
import filters from '../../constants/filters';

const getFilteredTodos = selector({
  key: 'getFilteredTodos',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const todoList = get(todoListState);

    switch (filter) {
      case filters.ACTIVE:
        return todoList.filter((todo) => !todo.isCompleted);
      case filters.COMPLETED:
        return todoList.filter((todo) => !todo.isCompleted);
      default:
        return todoList;
    }
  },
});

export default getFilteredTodos;

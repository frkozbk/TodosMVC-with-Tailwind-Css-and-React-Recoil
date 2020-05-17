import { atom } from 'recoil';
import filters from '../../constants/filters';

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: filters.ALL,
});

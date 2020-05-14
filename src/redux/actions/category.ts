import Category from '../../models/Category';
import { CATEGORY_FETCH_ALL, CATEGORY_SET_DATA } from '../actions/types';

export interface CategoryAction {
  type: string;
  category?: Array<Category>;
}

export function fetch(): CategoryAction {
  return {
    type: CATEGORY_FETCH_ALL
  };
}

export function set(category: any): CategoryAction {
  return {
    type: CATEGORY_SET_DATA,
    category
  };
}

import { Reducer } from 'redux';
import Category from '../../models/Category';
import { CategoryAction } from '../actions/category';
import { CATEGORY_SET_DATA } from '../actions/types';

export interface CategoryState {
  isLoading: boolean;
  data: Array<Category>;
  error: string;
}

const initState = {
  isLoading: false,
  data: [],
  error: '',
};

const categoryState: Reducer<CategoryState> = (
  state: CategoryState = initState,
  action: CategoryAction | any
): CategoryState => {
  switch (action.type) {
    case CATEGORY_SET_DATA: {
      return {
        ...state,
        data: action.category,
      };
    }
    default:
      return state;
  }
};

export default categoryState;

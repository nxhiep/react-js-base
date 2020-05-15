import { Reducer } from 'redux';
import Topic from '../../models/Topic';
import { LessonAction } from '../actions/lesson';
import { LESSON_SET_DATA } from '../actions/types';

export interface LessonState {
  loading: boolean;
  data: Array<Topic>;
  error: string;
}

const initState = {
  loading: false,
  data: [],
  error: '',
};

const lessonState: Reducer<LessonState> = (
  state: LessonState = initState,
  action: LessonAction | any
): LessonState => {
  switch (action.type) {
    case LESSON_SET_DATA: {
      return {
        ...state,
        data: action.lesson,
      };
    }
    default:
      return state;
  }
};

export default lessonState;

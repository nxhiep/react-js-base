import { Reducer } from 'redux';
import Course from '../../models/Course';
import { CourseAction } from '../actions/course';
import { COURSE_SET_DATA } from '../actions/types';

export interface CourseState {
  loading: boolean;
  data: Array<Course>;
  error: string;
}

const initState = {
  loading: false,
  data: [],
  error: ''
};

const courseState: Reducer<CourseState> = (
  state: CourseState = initState,
  action: CourseAction | any
): CourseState => {
  switch (action.type) {
    case COURSE_SET_DATA: {
      return {
        ...state,
        data: action.course
      };
    }
    default:
      return state;
  }
};

export default courseState;

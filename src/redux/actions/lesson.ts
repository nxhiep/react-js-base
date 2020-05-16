import Topic from '../../models/Topic';
import {
  LESSON_SET_DATA,
  LESSON_FETCH_SUCCESS,
  LESSON_FETCH_ON_PROGRESS,
} from '../actions/types';

export interface LessonAction {
  type: string;
  lesson?: Array<Topic>;
}

export function set(lesson: any): LessonAction {
  return {
    type: LESSON_SET_DATA,
    lesson,
  };
}

export function fetchSuccess(): LessonAction {
  return {
    type: LESSON_FETCH_SUCCESS,
  };
}

export function fetchOnProgress(): LessonAction {
  return {
    type: LESSON_FETCH_ON_PROGRESS,
  };
}

import Topic from '../../models/Topic';
import { LESSON_SET_DATA } from '../actions/types';

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

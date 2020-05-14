import Course from '../../models/Course';
import { COURSE_FETCH_BY_CATEGORY, COURSE_SET_DATA } from '../actions/types';

export interface CourseAction {
  type: string;
  categoryId?: number;
  course?: Array<Course>;
}

export function fetchCourseByCategoryId(categoryId: number): CourseAction {
  return {
    type: COURSE_FETCH_BY_CATEGORY,
    categoryId
  };
}

export function set(course: any): CourseAction {
  return {
    type: COURSE_SET_DATA,
    course
  };
}

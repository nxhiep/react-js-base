import Course from '../../models/Course';
import {
  COURSE_FETCH_BY_CATEGORY_ID,
  COURSE_FETCH_BY_COURSE_ID,
  COURSE_SET_DATA,
} from '../actions/types';

export interface CourseAction {
  type: string;
  categoryId?: number;
  courseId?: number;
  course?: Array<Course>;
}

export function fetchCourseByCategoryId(categoryId: number): CourseAction {
  return {
    type: COURSE_FETCH_BY_CATEGORY_ID,
    categoryId,
  };
}

export function fetchCourseByCourseId(courseId: number): CourseAction {
  return {
    type: COURSE_FETCH_BY_COURSE_ID,
    courseId,
  };
}

export function set(course: any): CourseAction {
  return {
    type: COURSE_SET_DATA,
    course,
  };
}

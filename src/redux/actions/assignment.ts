import Topic from '../../models/Topic';
import { ASSIGNMENT_SET_DATA } from '../actions/types';

export interface AssignmentAction {
  type: string;
  assignment?: Array<Topic>;
}

export function set(assignment: any): AssignmentAction {
  return {
    type: ASSIGNMENT_SET_DATA,
    assignment,
  };
}

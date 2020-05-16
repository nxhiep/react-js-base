import Topic from '../../models/Topic';
import {
  TOPIC_FETCH_BY_PARENT_ID,
  TOPIC_FETCH_BY_TOPIC_ID,
  TOPIC_FETCH_SUCCESS,
  TOPIC_FETCH_ON_PROGRESS,
  TOPIC_SET_DATA,
} from '../actions/types';

export interface TopicAction {
  type: string;
  parentId?: number;
  topicId?: number;
  topic?: Array<Topic>;
}

export function fetchTopicByParentId(parentId: number): TopicAction {
  return {
    type: TOPIC_FETCH_BY_PARENT_ID,
    parentId,
  };
}

export function fetchTopicByTopicId(topicId: number): TopicAction {
  return {
    type: TOPIC_FETCH_BY_TOPIC_ID,
    topicId,
  };
}

export function fetchSuccess(): TopicAction {
  return {
    type: TOPIC_FETCH_SUCCESS,
  };
}

export function fetchOnProgress(): TopicAction {
  return {
    type: TOPIC_FETCH_ON_PROGRESS,
  };
}

export function set(topic: any): TopicAction {
  return {
    type: TOPIC_SET_DATA,
    topic,
  };
}

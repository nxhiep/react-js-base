import { Reducer } from 'redux';
import Topic from '../../models/Topic';
import { TopicAction } from '../actions/topic';
import {
  TOPIC_SET_DATA,
  TOPIC_FETCH_SUCCESS,
  TOPIC_FETCH_ON_PROGRESS,
} from '../actions/types';

export interface TopicState {
  isLoading: boolean;
  data: Array<Topic>;
  error: string;
}

const initState = {
  isLoading: true,
  data: [],
  error: '',
};

const topicState: Reducer<TopicState> = (
  state: TopicState = initState,
  action: TopicAction | any
): TopicState => {
  switch (action.type) {
    case TOPIC_SET_DATA: {
      return {
        ...state,
        data: action.topic,
      };
    }
    case TOPIC_FETCH_ON_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TOPIC_FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default topicState;

import { Reducer } from 'redux';
import Topic from '../../models/Topic';
import { TopicAction } from '../actions/topic';
import { TOPIC_SET_DATA } from '../actions/types';

export interface TopicState {
  loading: boolean;
  data: Array<Topic>;
  error: string;
}

const initState = {
  loading: false,
  data: [],
  error: ''
};

const topicState: Reducer<TopicState> = (
  state: TopicState = initState,
  action: TopicAction | any
): TopicState => {
  switch (action.type) {
    case TOPIC_SET_DATA: {
      return {
        ...state,
        data: action.topic
      };
    }
    default:
      return state;
  }
};

export default topicState;

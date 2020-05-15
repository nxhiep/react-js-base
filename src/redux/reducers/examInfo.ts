import { Reducer } from 'redux';
import { REHYDRATE } from 'redux-persist';
import ExamInfo from '../../models/ExamInfo';
import { replaceItem } from '../../utils';
import * as Types from '../actions';
import { ExamInfoAction } from './../actions/examinfo';

export interface ExamInfoState {
    loading: boolean,
    examInfo: ExamInfo,
    error: any,
}

const examInfo : ExamInfo = {
    topicId: 0,
    duration: 1,
    conditionalPass: 1,
    numberParticipants: 1,
    numberQuestion: 1,
    pauseTime: 1,
    reworkTime: 1,
    title: '',
    questions: []
}

const initState = {
    loading: false,
    examInfo: examInfo,
    error: null,
}

const examState: Reducer<ExamInfoState> = (state: ExamInfoState = initState, action: ExamInfoAction | any ): ExamInfoState => {
    console.log(action);
    switch (action.type) {
        case Types.GET_EXAM_INFO_BY_TOPIC_ID: {
            return { 
                ...state, loading: true };
        }
        case Types.GET_EXAM_QUESTION_BY_PARENT_ID: {
            return { ...state, loading: false, error: action.error };
        }
        case Types.CHOOSE_ANSWER: {
            console.log(action);
            return { ...state, loading: false, error: action.error };
        }
        default:
            return state;
    }
}

export default examState;
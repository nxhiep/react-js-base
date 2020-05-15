import ExamInfo from '../../models/ExamInfo';
import * as Types from './types';

export interface ExamInfoAction {
    type: string,
    examId?: number,
    data?: Array<ExamInfo>,
    error?: any,
}

export function getExamInfoByTopicId(examId: number): ExamInfoAction {
    return {
        type: Types.GET_EXAM_INFO_BY_TOPIC_ID, 
        examId: examId,
    };
}

export function getQuestionByParent(examInfos: Array<ExamInfo>): ExamInfoAction {
    return {
        type: Types.GET_EXAM_QUESTION_BY_PARENT_ID, 
        data: examInfos,
    };
}

export function chooseAnswer(questionId: number, answer: string): any {
    return {
        type: Types.CHOOSE_ANSWER, 
        examId: questionId,
        answer: answer,
    };
}



interface ExamInfoEntity {
    topicId: number;
    title: string;
    numberQuestion: number;
    conditionalPass: number;
    duration: number;
    pauseTime: number;
    reworkTime: number;
    numberParticipants: number;
}
class ExamInfo implements ExamInfoEntity {
    public topicId: number;
    public title: string;
    public numberQuestion: number;
    public conditionalPass: number;
    public duration: number;
    public pauseTime: number;
    public reworkTime: number;
    public numberParticipants: number;

    constructor(props: ExamInfoEntity) {
        let { topicId, title, numberQuestion, conditionalPass, duration, pauseTime, reworkTime, numberParticipants } = props;
        this.topicId = topicId ?? -1;
        this.title = title ?? '';
        this.numberQuestion = numberQuestion ?? 0;
        this.conditionalPass = conditionalPass ?? 0;
        this.duration = duration ?? 0;
        this.pauseTime = pauseTime ?? 0;
        this.reworkTime = reworkTime ?? 0;
        this.numberParticipants = numberParticipants ?? 0;
    }

    public static fromJS(examInfo: ExamInfoEntity | string | Object): ExamInfo {
        if (typeof examInfo === 'string') {
            return new ExamInfo(JSON.parse(examInfo));
        } else {
            let obj = Object.create(ExamInfo.prototype);
            return new ExamInfo(Object.assign(obj, examInfo));
        }
    }
}

export default ExamInfo;
import { Grid, Paper } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Image from '../../components/Image';
import { TitleBlock, MainWidget } from '../../components/Widgets';
import { ExamInfoState } from '../../redux/reducers/examInfo';
import Emoji from '../../resources/images/icon-un-smile.png';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    borderAround: {
        border: '1px solid #ddd',
        margin: '5px 0',
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        margin: '7px 0',
    },
    paddingSpace: {
        padding: 7,
    },
    button: {
        backgroundColor: '#c21b17',
        color: '#fff',
        margin: '5px 10px',
    },
    processPanel: {
        textAlign: 'center',
    }
  }),
);

const ResultExam: FunctionComponent<({
    examInfoState: ExamInfoState
    })> = ({
        examInfoState
    }) => {
    let classes = useStyles();

    const resultExam = {
        note: 'Bạn chưa vượt qua bài thi này',
        grade: 0,
        numberCorrect: 0,
        useTime: '5m 00s',
        date: '12/05/2020',
        typeTest: 'Part 1',
        numberQuestions: 10
    }
    return (
        <Paper className='custom-block-panel'>
            <TitleBlock title='Kết quả' />
            <MainWidget className={"content-block-panel"}>
                <Grid className={classes.processPanel}>
                    <div >Tiến độ học </div>
                    <div ><Image src={Emoji} height='45px' /></div>
                    <div >{ resultExam.note }</div>
                </Grid>
                <Grid className='row-info-panel' >
                    <div >Tổng điểm: </div>
                    <div >{ resultExam.grade } Điểm</div>
                </Grid>
                <Grid className='row-info-panel' >
                    <div >Số câu đúng: </div>
                    <div >{ resultExam.numberCorrect } / { resultExam.numberQuestions }</div>
                </Grid>
                <Grid className='row-info-panel' >
                    <div >Thời gian làm bài: </div>
                    <div >{ resultExam.useTime }</div>
                </Grid>
                <Grid className='row-info-panel' >
                    <div>Ngày: </div>
                    <div >{ resultExam.date }</div>
                </Grid>
                <Grid className='row-info-panel' >
                    <div >{  resultExam.typeTest }</div>
                    <div >{ resultExam.numberCorrect } / { resultExam.numberQuestions } Câu đúng</div>
                </Grid>
            </MainWidget>
        </Paper>
    );
}

export default ResultExam;
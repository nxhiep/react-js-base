import { Grid, Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { FunctionComponent, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { AppState } from '../../redux/appstate';
import { ExamInfoState } from '../../redux/reducers/examInfo';
import { TitleBlock, MainWidget } from '../../components/Widgets';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  }),
);

const GeneralTestInfo: FunctionComponent<({ 
    examInfoState: ExamInfoState
})> = ({ 
    examInfoState
}) => {
    useEffect(() => {
      
    }, []);

    const classes = useStyles();
    
    return (
        <Paper className='custom-block-panel'>
            <TitleBlock title='Thông tin chung' />
            <MainWidget className={"content-block-panel"}>
                <Grid className='row-info-panel' >
                    <div >Số câu hỏi: </div>
                    <div >{ examInfoState?.examInfo?.numberQuestion ??  0 } Câu</div>
                </Grid>
                <Grid className='row-info-panel' >
                    <div >Điều kiện qua(% đúng): </div>
                    <div >{ examInfoState?.examInfo?.conditionalPass ??  0 } %</div>
                </Grid>
                <Grid className='row-info-panel' >
                    <div >Thời gian làm bài: </div>
                    <div >{ examInfoState?.examInfo?.duration ??  0 } Phút</div>
                </Grid>
                <Grid className='row-info-panel' >
                    <div>Số lần tạm dừng: </div>
                    <div >{ examInfoState?.examInfo?.pauseTime ??  0 } /3</div>
                </Grid>
                <Grid className='row-info-panel' >
                    <div >Số lần làm lại: </div>
                    <div >{ examInfoState?.examInfo?.reworkTime ??  0 } /10</div>
                </Grid>
                <Grid className='row-info-panel' >
                    <div >Số người đã tham gia:</div>
                    <div >{ examInfoState?.examInfo?.numberParticipants ??  0 } </div>
                </Grid>
                <Grid  className={classes.btn}>
                    <Button  variant="contained" href={`/detail-exam?topicId=` + examInfoState?.examInfo.topicId} className={classes.button}>XEM LẠI KẾT QUẢ</Button>
                    <Button variant="contained" className={classes.button}>LÀM LẠI</Button>
                </Grid>
            </MainWidget>
        </Paper>
    );
}

const mapDispatchToProps = {
    // showResultTest: (id: number) => showResultTest(id)
    // rework: (id: number) => rework(id)
}

export default connect((state: AppState, ownProps: any) => ({
    appValueState: state.appValueState,
    ...ownProps
}), mapDispatchToProps)(GeneralTestInfo);

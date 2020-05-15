import { Grid, Paper } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Line, Bar } from 'react-chartjs-2';

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
    chart: {
        height: '325px',
    },
    paddingSpace: {
        padding: 7,
    },
    
  }),
);

const data= {
  labels: ["Part 1"],
  datasets: [{
  label: "Tỷ lệ đúng (%)",
  borderColor: 'rgb(255, 99, 132)',
  backgroundColor: 'rgba(139,195,74,1)',
  data: [0],
  },
  {
    label: "Tỷ lệ sai (%)",
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(227,71,88,1)',
    data: [100],
  }]
}


const SkillStatistics: FunctionComponent<({
    examInfoState: ExamInfoState,
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
          <TitleBlock title="Thống kê kỹ năng" />
          <MainWidget className={"content-block-panel"}>
              <Grid className={classes.chart}>
                <Bar 
                  data={data} 
                  width={100} 
                  height={30}
                  options={{
                    maintainAspectRatio: false
                  }}
                />
              </Grid>
          </MainWidget>
        </Paper>
    );
}

export default SkillStatistics;
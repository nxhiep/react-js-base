import { Grid, Paper } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';

import { TitleBlock, MainWidget } from '../../components/Widgets';
import { ExamInfoState } from '../../redux/reducers/examInfo';


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
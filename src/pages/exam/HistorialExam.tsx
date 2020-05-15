import { Grid, Paper } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Line } from 'react-chartjs-2';

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
  labels: ["16:59 13/05", "16:59 14/05" , "16:59 15/05", "16:59 16/05", "16:59 17/05", "12:59 18/05"],
  datasets: [{
  label: "Số câu trả lời đúng",
  borderColor: 'rgba(0,169,157,1)',
  data: [0,0,0,10,0,2,3],
  }]
}


const HistorialExam: FunctionComponent<({
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
                    <Line 
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

export default HistorialExam;
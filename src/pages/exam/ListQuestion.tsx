import { Button, Grid, Typography, Paper } from '@material-ui/core';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Image from '../../components/Image';
import { FixedContainer, LoadingWidget } from '../../components/Widgets';
import AppInfo from '../../models/AppInfo';
import { getAllAppInfo } from '../../redux/actions';
import { AppState } from '../../redux/appstate';
import { AppInfoState } from '../../redux/reducers/appInfo';
import HourGlass from '../../resources/images/hourglass.gif';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    question: {
        margin: 10,
        padding: 15,
    },
    formLabel: {
        textAlign: 'left',
    },
    root: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background: 'rgba(206,217,224,.5)',
        },
      },
      checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: '#106ba3',
        },
      },
    
  }));

const ListQuestion: FunctionComponent<({
    getAllAppInfo: any,
    appInfoState: AppInfoState
    })> = ({
    getAllAppInfo = () => {},
    appInfoState
    }) => {
    useEffect(() => {
        getAllAppInfo();
    }, []);
    if(appInfoState.loading === true || !appInfoState.data){
        return <LoadingWidget />
    }
    let appInfos: Array<AppInfo> = Object.values(appInfoState.data);
   
    return (
        <section className="list-great-apps">
            <FixedContainer>
                <Grid container>
                    <Grid item md={9} className="list-question">
                        {
                            appInfos
                            .sort((a: AppInfo, b: AppInfo) => a.appName.localeCompare(b.appName))
                            .map((appInfo: AppInfo, index: number) => {
                                return <Question appInfo={appInfo} key={"AppInfoItem-" + index} no={index + 1} />
                            })
                        }
                    </Grid>
                    <Grid item md={3} >
                        <div className="answer-sheet">
                            <Grid container justify='center' style={{padding: 5}}>
                                <Image src={HourGlass} width='25px'></Image>
                                <div>04m 36s</div>
                            </Grid>
                            <Grid  
                                container 
                                className="this_is_title_answer_sheet_panel"
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <span style={{ width: 30}}>TT</span>
                                <span className="numberAnswerQuestion" >A</span>
                                <span className="numberAnswerQuestion" >B</span>
                                <span className="numberAnswerQuestion" >C</span>
                                <span className="numberAnswerQuestion" >D</span>
                            </Grid>
                            <Grid className="list-answer">
                                {
                                    appInfos
                                    .sort((a: AppInfo, b: AppInfo) => a.appName.localeCompare(b.appName))
                                    .map((appInfo: AppInfo, index: number) => {
                                        return <AnswerSheetItem appInfo={appInfo} key={"AppInfoItem-" + index} no={index + 1} />
                                    
                                    })
                                }       
                            </Grid>
                            <div className="div-btn">
                                <Button style={{ backgroundColor: '#c21b17'}}>Nộp bài</Button>
                                <Button style={{ backgroundColor: '#ff7077'}}>Tạm dừng</Button>
                            </div>      
                        </div>
                    </Grid>
                </Grid>                       
            </FixedContainer>
            <div style={{width: "100%", height: "100px"}}></div>
        </section>
    );
}

function StyledRadio(props: RadioProps) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={[classes.icon, classes.checkedIcon].join(' ')} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }


const Question: FunctionComponent<({
    appInfo: AppInfo,
    no: number
    })> = ({
    appInfo,
    no
    }) => {
    const [explain, setExplain] = useState(false);
    const [answer, setAnswer] = useState('');
    let appName = appInfo.appName ? appInfo.appName : appInfo.title;

    const handleChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
      };

    const classes = useStyles();
    return (
        <Paper className={classes.question}>
            <Typography>Câu {no}</Typography>
            <Grid container className="app-info-item">
                <Grid item md={12}>
                       Âm thanh
                </Grid>
                <Grid item md={12}>
                   <Image src={HourGlass} width="100px"></Image>
                </Grid>
                <Grid item md={12}>
                    <FormControl component="fieldset" fullWidth>
                        <RadioGroup aria-label="answer" name="customized-radios" onChange={ handleChangeAnswer }>
                            <FormLabel component="legend" className={classes.formLabel}>Lựa chon đáp án</FormLabel>
                            <FormControlLabel value="A" control={<StyledRadio />} label="(A)" />
                            <FormControlLabel value="B" control={<StyledRadio />} label="(B)" />
                            <FormControlLabel value="C" control={<StyledRadio />} label="(C)" />
                            <FormControlLabel value="D" control={<StyledRadio />} label="(D)" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {explain && (
                    <Grid item md={12}>
                        Lời giải
                    </Grid>
                    )
                }
            </Grid>
        </Paper>
    );
}

const AnswerSheetItem: FunctionComponent<({
    appInfo: AppInfo,
    no: number
    })> = ({
    appInfo,
    no
    }) => {

    return (
        <Grid  
            container 
            className="app-info-item"
            direction="row"
            justify="flex-start"
            alignItems="center">
            <span style={{ width: 30}}>{no}</span>
            <button className="radioButtonAnswer" >A</button>
            <button className="radioButtonAnswer" >B</button>
            <button className="radioButtonAnswer" >C</button>
            <button className="radioButtonAnswer" >D</button>
        </Grid>
    );
}
const mapStateToProps = (state: AppState, ownProps: any) => {
    return {
        appInfoState: state.appInfoState,
        ...ownProps
    };
}
const mapDispatchToProps = (dispatch: any) => ({
    getAllAppInfo: () => dispatch(getAllAppInfo()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListQuestion);
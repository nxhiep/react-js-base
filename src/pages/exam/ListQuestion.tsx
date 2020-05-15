import { Button, Grid, Typography, Paper } from '@material-ui/core';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles, Theme }  from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Image from '../../components/Image';
import Audio from '../../components/Audio';
import { FixedContainer, LoadingWidget } from '../../components/Widgets';
import AppInfo from '../../models/AppInfo';
import { getAllAppInfo } from '../../redux/actions';
import * as action from '../../redux/actions/examinfo';
import { AppState } from '../../redux/appstate';
import { AppInfoState } from '../../redux/reducers/appInfo';
import HourGlass from '../../resources/images/hourglass.gif';
import { convertSecondToMinute } from '../../utils';
import { ExamInfoState } from '../../redux/reducers/examInfo';
import { CommentModal, NoteModal, FeedBackModal} from './DialogExam';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    question: {
        margin: 10,
        padding: 15,
    },
    formLabel: {
        textAlign: 'left',
        color: '#000',
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
    chooseAnswer: any,
    appInfoState: AppInfoState,
    })> = ({
        chooseAnswer = () => {}, appInfoState
    }) => {

    const [timeLeft, setTimeLeft] = useState(2);
    // const [timeLeft, setTimeLeft] = useState(2);


    useEffect(() => {
        const myTimeOut = setTimeout(() => {
            if( timeLeft > 0 ){
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);

        return () => {
            clearTimeout(myTimeOut);
        };
    });
    

    if(appInfoState.loading === true || !appInfoState.data){
        return <LoadingWidget />
    }
    let appInfos: Array<AppInfo> = Object.values(appInfoState.data);
    
   
    return (
        <section className="list-container">
            <FixedContainer>
                <Grid container>
                    <Grid item md={9} className="list-question">
                        {
                            appInfos
                            .sort((a: AppInfo, b: AppInfo) => a.appName.localeCompare(b.appName))
                            .map((appInfo: AppInfo, index: number) => {
                                return <Question appInfo={appInfo} key={"AppInfoItem-" + index} no={index + 1} chooseAnswer={chooseAnswer} />
                            })
                        }
                    </Grid>
                    <Grid item md={3} >
                        <div className="answer-sheet content-block-panel">
                            <Grid container justify='center' style={{padding: 5}}>
                                <Image src={HourGlass} width='25px'></Image>
                                <div>{convertSecondToMinute(timeLeft)}</div>
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
                                        return <AnswerSheetItem appInfo={appInfo} key={"AppInfoItem-" + index} no={index + 1} chooseAnswer={chooseAnswer} />
                                    
                                    })
                                }       
                            </Grid>
                            <div className="div-btn">
                                <Button className={"btn-submit"}>Nộp bài</Button>
                                <Button className={"btn-pause"}>Tạm dừng</Button>
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
    appInfo?: AppInfo,
    no: number,
    examInfoState?: ExamInfoState,
    chooseAnswer: Function,
    })> = ({
    appInfo,
    no,
    examInfoState,
    chooseAnswer,
    }) => {
    const [hintAnswer, setHintAnswer] = useState(true);
    const [answer, setAnswer] = useState('');
    const [openCommentModal, setOpenCommentModal] = useState(false);
    const [openNoteModal, setOpenNoteModal] = useState(false);
    const [openFeedBackModal, setOpenFeedBackModal] = useState(false);

    const handleChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        chooseAnswer(1, "A");
        setAnswer(event.target.value);
    };

    const classes = useStyles();
    
    const handleClickOpenCommentModal = () => {
		setOpenCommentModal(true);
	};
	const handleCloseCommentModal = () => {
		setOpenCommentModal(false);
    };
    const handleClickOpenNoteModal = () => {
		setOpenNoteModal(true);
	};
	const handleCloseNoteModal = () => {
		setOpenNoteModal(false);
    };
    const handleClickOpenFeedBackModal = () => {
		setOpenFeedBackModal(true);
	};
	const handleCloseFeedBackModal = () => {
		setOpenFeedBackModal(false);
	};

    return (
        <Paper className={classes.question}>
            <Typography>Câu {no}</Typography>
            <Grid container className="question">
                <Grid item md={12}>
                    <Audio/>
                </Grid>
                <Grid item md={12}>
                   <Image src={"https://storage.googleapis.com/comaiphuong-edu-media/images/2746859_1532663575639.png"}></Image>
                </Grid>
                <Grid item md={12}> 
                    <FormControl component="fieldset" fullWidth>
                        <RadioGroup aria-label="answer" name="customized-radios" onChange={ handleChangeAnswer }>
                            <FormLabel component="legend" className={classes.formLabel}>Lựa chọn đáp án</FormLabel>
                            <FormControlLabel value="A" control={<StyledRadio />} label="(A)" className={"radioButtonAnswer " + (answer === "A" ? "choosed" : "")} />
                            <FormControlLabel value="B" control={<StyledRadio />} label="(B)" className={"radioButtonAnswer " + (answer === "B" ? "choosed" : "")}/>
                            <FormControlLabel value="C" control={<StyledRadio />} label="(C)" className={"radioButtonAnswer " + (answer === "C" ? "choosed" : "")}/>
                            <FormControlLabel value="D" control={<StyledRadio />} label="(D)" className={"radioButtonAnswer " + (answer === "D" ? "choosed" : "")}/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {hintAnswer && (
                    <Grid item md={12} className={"hint-answer"}>
                        <p className={"remark"}>Bạn đã trả lời đúng</p>
                        <p className={"hint-answer-title"}>Kỹ nằng: Part 1</p>
                        <div>
                            <p className={"hint-answer-title"}>Giải thích: Transcript:</p>
                            <p className={"hint-choosed-answer"}>(A) She is doing the dishes.</p>
                            <p>(B) She is cleaning the kitchen counter.</p>
                            <p>(C) She is preparingn a dish for her fammily.</p>
                            <p>(D) She is looking out the window.</p>
                        </div>
                        <div>
                            <p className={"hint-answer-title"}>Translation:</p>
                            <p>(A) Cô ấy đang rửa bát đĩa.</p>
                            <p>(B) Cô ấy đang kau dọn quầy bếp.</p>
                            <p>(C) Cô áy đang chuẩn bị một món ăn cho gia đình.</p>
                            <p>(D) Cô ấy đang  nhìn ra ngoài của sổ.</p>

                            <p>-counter(n): mặt phẳng trong bếp dùng để nấu nướng</p>
                        </div>
                        <Grid container spacing={1} justify={"flex-end"}>
                            <Grid item onClick={handleClickOpenCommentModal}><Image src={"https://ngoaingu24h.vn/resources/images/comment-game.png"} width="25px"/></Grid>
                            <Grid item ><Image src={"https://ngoaingu24h.vn/resources/images/bookmark-game.png"} width="25px"/></Grid>
                            <Grid item onClick={handleClickOpenNoteModal}><Image src={"https://ngoaingu24h.vn/resources/images/note-game.png"} width="25px"/></Grid>
                            <Grid item onClick={handleClickOpenFeedBackModal}><Image src={"https://ngoaingu24h.vn/resources/images/feedback-game.png"} width="25px"/></Grid>
                        </Grid>
                        <CommentModal open={openCommentModal} handleCloseModal={handleCloseCommentModal}/>
                        <NoteModal open={openNoteModal} handleCloseModal={handleCloseNoteModal} />
                        <FeedBackModal open={openFeedBackModal} handleCloseModal={handleCloseFeedBackModal}/>
                    </Grid>
                    )
                }
               
            </Grid>
        </Paper>
    );
}

const AnswerSheetItem: FunctionComponent<({
    appInfo: AppInfo,
    no: number,
    examInfoState?: ExamInfoState,
    chooseAnswer: any,
    })> = ({
    appInfo,
    no,
    examInfoState,
    chooseAnswer = () => {}
    }) => {

    const [answer, setAnswer] = useState('');
    const handleChooseAnswer = (questionId: number, answer: string)  => (event: React.MouseEvent) => {
        chooseAnswer(questionId, answer);
        setAnswer(answer);
      };

    return (
        <Grid  
            container 
            className="answer-sheet-item"
            direction="row"
            justify="flex-start"
            alignItems="center">
            <span style={{ width: 30}}>{no}</span>
            <button className={"radioButtonAnswer " + (answer === "A" ? "choosed" : "")} onClick={handleChooseAnswer(no, "A")}>A</button>
            <button className={"radioButtonAnswer " + (answer === "B" ? "choosed" : "")} onClick={handleChooseAnswer(no, "B")}>B</button>
            <button className={"radioButtonAnswer " + (answer === "C" ? "choosed" : "")} onClick={handleChooseAnswer(no, "C")}>C</button>
            <button className={"radioButtonAnswer " + (answer === "D" ? "choosed" : "")} onClick={handleChooseAnswer(no, "D")}>D</button>
        </Grid>
    );
}
const mapStateToProps = (state: AppState, ownProps: any) => {
    return {
        appInfoState: state.appInfoState,
        examInfoState: state.examInfoState,
        ...ownProps
    };
}
const mapDispatchToProps = (dispatch: any) => ({
    getAllAppInfo: () => dispatch(getAllAppInfo()),
    chooseAnswer: (questionId: number, answer: string) => dispatch(action.chooseAnswer(questionId, answer)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListQuestion);
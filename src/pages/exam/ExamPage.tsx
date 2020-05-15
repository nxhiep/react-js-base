import React, { useState, FunctionComponent, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import UserImage from '../../resources/images/user.png';
import { Paper, Grid, Avatar } from '@material-ui/core';
import {
    Assignment as AssignmentIcon,
    Group as GroupIcon,
    EventNote as EventNoteIcon,
    Note as NoteIcon,
  } from '@material-ui/icons';


import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MainWidget, FixedContainer } from '../../components/Widgets';
import GeneralExamInfo from './GeneralExamInfo';
import ResultExam from './ResultExam';
import RankExam from './RankExam';
import SkillStatistics from'./SkillStatistics';
import HistorialExam from'./HistorialExam';
import * as examActions from '../../redux/actions/examinfo';
import ExamInfo from '../../models/ExamInfo';
import { getIdByPathName } from '../../utils';
import { AppState } from '../../redux/appstate';
import '../../resources/scss/exam.scss';
import '../../resources/scss/main.scss';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
    },
    gridLeft: {
        padding: '0px 5px 0 0',
        marginTop: '10px',
    },
    gridRight: {
        padding: '0px 0 0 5px',
        marginTop: '10px',
    },
    spaceAroundLeft: {
        paddingLeft: '5px',
    },
    spaceAroundRight:{
        paddingRight: '5px',
    }
  }),
);

const topicArray = [
    { id: 1, name: '(Part 1) Photo of People' },
    { id: 2, name: 'Bài thi online Part 1 (1)' },
    { id: 3, name: 'Bài thi online Part 1 (2)' },
    { id: 4, name: '(Part 1) Photo of people (2) & Photo of objects and views' },
  ];
  
  const referenceArray = [
    { id: 1, name: '700 từ vựng Part 1' },
    { id: 2, name: 'Photo of people (Part 1)' },
    { id: 3, name: 'Audio Photos of people (Part 1)' },
  ];

const ExamPage: FunctionComponent<{
    fetchTopicByTopicId: Function;
    match: any;
  }> = ({ fetchTopicByTopicId, match }) => {
    useEffect(() => {
      const pathname = match.params.pathname;
      if (match.params.pathname) {
        const topicId = getIdByPathName(pathname);
        fetchTopicByTopicId(topicId);
      }
      //eslint-disable-next-line
    }, []);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const classes = useStyles();

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

    const examInfoState = {
        loading: false,
        examInfo: examInfo,
        error: null,
    }

    return (
        <MainWidget className={'exam-page'}>    
            <Header />
            <FixedContainer style={{ marginTop: '112px'}}>
                <Grid container>
                    <Grid item container md={9} className={classes.gridLeft}>
                        <Grid item md={12} >
                            <GeneralExamInfo examInfoState={examInfoState} ></GeneralExamInfo>
                        </Grid>
                        <Grid item md={6} className={classes.spaceAroundRight}>
                            <ResultExam examInfoState={examInfoState} ></ResultExam>
                        </Grid>
                        <Grid item md={6} className={classes.spaceAroundLeft}>
                            <SkillStatistics examInfoState={examInfoState}></SkillStatistics>
                        </Grid>
                        <Grid item md={12} >
                            <RankExam ></RankExam>
                        </Grid>
                        <Grid item md={12} >
                            <HistorialExam  examInfoState={examInfoState}></HistorialExam>
                        </Grid>
                        <Grid item md={12} >
                            <Paper elevation={1} className='custom-block-panel comment-panel'>
                                <div className='main-block-header-panel'>Bình luận</div>
                                <div className='main-block-content-panel'>
                                    Nothing to show right now
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid item md={3} className={classes.gridRight}>
                        <Paper elevation={1} className='custom-block-panel topic-tree-panel'>
                            <div className='custom-block-header-panel'>Bài tập</div>
                            <div className='custom-block-content-panel'>
                            {topicArray.map((topic) => (
                                <div key={topic.id} className='topic-item'>
                                <a href='www.google.com' className='link'>
                                    {topic.name}
                                </a>
                                </div>
                            ))}
                            </div>
                        </Paper>
                        <Paper elevation={1} className='custom-block-panel user-info-panel'>
                            <div className='custom-block-header-panel'>Thông tin cá nhân</div>
                            <div className='custom-block-content-panel'>
                            <Grid container spacing={1} className='user-info-title-panel'>
                                <Grid item xs={3}>
                                <Avatar
                                    alt='user default image'
                                    src={UserImage}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                </Grid>
                                <Grid item xs={9}>
                                <div style={{ fontWeight: 'bold' }}> La Manh Cuong </div>
                                <div style={{ fontStyle: 'italic' }}>
                                    cuong.lm150487@sis.hust.edu.vn
                                </div>
                                </Grid>
                            </Grid>
                            <div className='user-info-content-panel'>
                                Điểm kinh nghiệm: 600
                            </div>
                            <div className='user-info-content-panel'>
                                Bài học gần đây:{' '}
                                <a href='www.google.com'>{'(Part 1) Photo of People'}</a>
                            </div>
                            </div>
                        </Paper>
                        <Paper
                            elevation={1}
                            className='custom-block-panel course-utility-panel'
                        >
                            <div className='custom-block-header-panel'>Tiện ích</div>
                            <div className='custom-block-content-panel'>
                            <div className='ultility-content-panel'>
                                <AssignmentIcon className='ultility-content-item' />
                                <div className='ultility-content-item'>
                                <a href='www.google.com' style={{ textDecoration: 'none' }}>
                                    {'Tài liệu '}
                                    <span className='ultility-quantity'>104</span>
                                </a>
                                </div>
                            </div>
                            <div className='ultility-content-panel'>
                                <GroupIcon className='ultility-content-item' />
                                <div className='ultility-content-item'>
                                <a href='www.google.com' style={{ textDecoration: 'none' }}>
                                    {'Thành viên '}
                                    <span className='ultility-quantity'>1080</span>
                                </a>
                                </div>
                            </div>
                            <div className='ultility-content-panel'>
                                <EventNoteIcon className='ultility-content-item' />
                                <div className='ultility-content-item'>
                                <a href='www.google.com' style={{ textDecoration: 'none' }}>
                                    {'Lịch học '}
                                    <span className='ultility-quantity'>0</span>
                                </a>
                                </div>
                            </div>
                            <div className='ultility-content-panel'>
                                <NoteIcon className='ultility-content-item' />
                                <div className='ultility-content-item'>
                                <a href='www.google.com' style={{ textDecoration: 'none' }}>
                                    {'Ghi chú '}
                                </a>
                                </div>
                            </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </FixedContainer>
            <Footer />
        </MainWidget>
    );
}

const mapStateToProps = (state: AppState, ownProps: any) => {
    return {
      examInfoState: state.examInfoState,
      ...ownProps,
    };
  };
  const mapDispatchToProps = (dispatch: any) => ({
    fetchTopicByTopicId: (topicId: number) =>
      dispatch(examActions.getExamInfoByTopicId(topicId)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ExamPage);

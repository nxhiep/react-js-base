import React, { FunctionComponent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/appstate';
import * as topicAction from '../../redux/actions/topic';
import { getIdByPathName } from '../../utils';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MainWidget } from '../../components/Widgets';
import VideoDialog from './VideoDialog';
import '../../resources/scss/game.scss';

import UserImage from '../../resources/images/user.png';
import { Paper, Grid, Avatar } from '@material-ui/core';
import {
  Description as DescriptionIcon,
  GetApp as GetAppIcon,
  Assignment as AssignmentIcon,
  Group as GroupIcon,
  EventNote as EventNoteIcon,
  Note as NoteIcon,
} from '@material-ui/icons';

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

const LessonPage: FunctionComponent<{
  fetchTopicByTopicId: Function;
  match: any;
}> = ({ fetchTopicByTopicId, match }) => {
  const [isOpenVideo, setOpenVideo] = useState(false);

  useEffect(() => {
    const pathname = match.params.pathname;
    if (match.params.pathname) {
      const topicId = getIdByPathName(pathname);
      fetchTopicByTopicId(topicId);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <MainWidget className={'home-page'}>
      <Header />
      <Grid container className='container'>
        <VideoDialog isOpenVideo={isOpenVideo} setOpenVideo={setOpenVideo} />
        <Grid item xs={9}>
          <Paper
            elevation={1}
            className='main-block-panel topic-content-find-media-element'
          >
            <div className='main-block-header-panel'>Mô tả</div>
            <div className='video-panel'>
              <img
                className='video-panel-img'
                alt='video img'
                src='https://storage.googleapis.com/comaiphuong-edu-media/images/images_default_videojs.jpg'
                src-video-js='https://ngonngu.vncdn.vn/output/toeic450/part1/part1bai1304499552.mp4/1/2/1119/304499552.m3u8'
                onClick={() => setOpenVideo(true)}
              />
            </div>
          </Paper>
          <Paper elevation={1} className='main-block-panel content-block-panel'>
            <div className='main-block-header-panel'>Nội dung bài học</div>
            <div className='main-block-content-panel'>
              Nothing to show right now
            </div>
          </Paper>
          <Paper elevation={1} className='main-block-panel reference-panel'>
            <div className='main-block-header-panel'>Tài liệu tham khảo</div>
            <div className='main-block-content-panel'>
              {referenceArray.map((reference) => (
                <div className='reference-item' key={reference.id}>
                  <DescriptionIcon className='reference-item-icon' />
                  <div className='reference-item-content'>
                    <a href='https://www.google.com/' className='link'>
                      {reference.name}
                    </a>
                  </div>
                  <GetAppIcon className='reference-item-icon' />
                </div>
              ))}
            </div>
          </Paper>
          <Paper elevation={1} className='main-block-panel comment-panel'>
            <div className='main-block-header-panel'>Bình luận</div>
            <div className='main-block-content-panel'>
              Nothing to show right now
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={1} className='custom-block-panel topic-tree-panel'>
            <div className='custom-block-header-panel'>Bài tập</div>
            <div className='custom-block-content-panel'>
              {topicArray.map((topic) => (
                <div key={topic.id} className='topic-item'>
                  <a href='https://www.google.com/' className='link'>
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
                  <div style={{ fontWeight: 'bold' }}> Mai Gia Bao Anh </div>
                  <div style={{ fontStyle: 'italic' }}>
                    anh.mgb150078@gmail.com
                  </div>
                </Grid>
              </Grid>
              <div className='user-info-content-panel'>
                Điểm kinh nghiệm: 600
              </div>
              <div className='user-info-content-panel'>
                Bài học gần đây:{' '}
                <a href='https://www.google.com/'>
                  {'(Part 1) Photo of People'}
                </a>
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
                  <a
                    href='https://www.google.com/'
                    style={{ textDecoration: 'none' }}
                  >
                    {'Tài liệu '}
                    <span className='ultility-quantity'>104</span>
                  </a>
                </div>
              </div>
              <div className='ultility-content-panel'>
                <GroupIcon className='ultility-content-item' />
                <div className='ultility-content-item'>
                  <a
                    href='https://www.google.com/'
                    style={{ textDecoration: 'none' }}
                  >
                    {'Thành viên '}
                    <span className='ultility-quantity'>1080</span>
                  </a>
                </div>
              </div>
              <div className='ultility-content-panel'>
                <EventNoteIcon className='ultility-content-item' />
                <div className='ultility-content-item'>
                  <a
                    href='https://www.google.com/'
                    style={{ textDecoration: 'none' }}
                  >
                    {'Lịch học '}
                    <span className='ultility-quantity'>0</span>
                  </a>
                </div>
              </div>
              <div className='ultility-content-panel'>
                <NoteIcon className='ultility-content-item' />
                <div className='ultility-content-item'>
                  <a
                    href='https://www.google.com/'
                    style={{ textDecoration: 'none' }}
                  >
                    {'Ghi chú '}
                  </a>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </MainWidget>
  );
};

const mapStateToProps = (state: AppState, ownProps: any) => {
  return {
    lessonState: state.lessonState,
    ...ownProps,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  fetchTopicByTopicId: (topicId: number) =>
    dispatch(topicAction.fetchTopicByTopicId(topicId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonPage);

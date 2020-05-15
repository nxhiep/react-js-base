import React, { FunctionComponent, useState } from 'react';
import ReactPlayer from 'react-player';
import { convertSecondToMinute } from '../../utils';
import { Dialog, IconButton, Slide, Tooltip } from '@material-ui/core';
import {
  Cancel as CancelIcon,
  Description as DescriptionIcon,
  GetApp as GetAppIcon,
  Assignment as AssignmentIcon,
} from '@material-ui/icons';
import { TransitionProps } from '@material-ui/core/transitions';
import AssignmentDialog from '../../components/AssignmentDialog';

import '../../resources/scss/videoDialog.scss';
import '../../resources/scss/game.scss';

const referenceArray = [
  { id: 1, name: '700 từ vựng Part 1' },
  { id: 2, name: 'Photo of people (Part 1)' },
  { id: 3, name: 'Audio Photos of people (Part 1)' },
];

// let assignmentArray = [
//   { id: 1, name: 'Bài tập 1', timeShowUp: 120, duration: 120, isOpen: false },
//   { id: 2, name: 'Bải tập 2', timeShowUp: 400, duration: 60, isOpen: false },
//   { id: 3, name: 'Bải tập 3', timeShowUp: 800, duration: 90, isOpen: false },
//   { id: 4, name: 'Bải tập 4', timeShowUp: 1200, duration: 75, isOpen: false }
// ];

const Transition: any = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const VideoDialog: FunctionComponent<{
  isOpenVideo: any;
  setOpenVideo: Function;
}> = ({ isOpenVideo, setOpenVideo }) => {
  const [assignmentArray, setAssignmentArray] = useState([
    { id: 1, name: 'Bài tập 1', timeShowUp: 120, duration: 120, isOpen: false },
    { id: 2, name: 'Bải tập 2', timeShowUp: 400, duration: 60, isOpen: false },
    { id: 3, name: 'Bải tập 3', timeShowUp: 800, duration: 90, isOpen: false },
    { id: 4, name: 'Bải tập 4', timeShowUp: 1200, duration: 75, isOpen: false },
  ]);

  const handleOpenAssignment = (id: any) => {
    const newAssignmentArray = assignmentArray.map((assignment) => {
      if (id === assignment.id)
        return { ...assignment, isOpen: !assignment.isOpen };
      else return { ...assignment, isOpen: false };
    });
    setAssignmentArray(newAssignmentArray);
  };

  const handleOpenAssignmentWhenTimeCome = (state: any) => {
    assignmentArray.forEach((assignment) => {
      if (Math.round(state.playedSeconds) === assignment.timeShowUp)
        handleOpenAssignment(assignment.id);
    });
  };

  return (
    <Dialog
      open={isOpenVideo}
      aria-labelledby='responsive-dialog-title'
      TransitionComponent={Transition}
      classes={{ paper: 'video-dialog-container' }}
    >
      {assignmentArray.map((assignment) => (
        <AssignmentDialog
          key={assignment.id}
          assignment={assignment}
          handleOpenAssignment={handleOpenAssignment}
        />
      ))}
      <div className='video-dialog-header'>
        <div className='video-dialog-header-title'>Bài tập</div>
        <IconButton
          className='video-dialog-close-icon'
          onClick={() => setOpenVideo(false)}
        >
          <CancelIcon />
        </IconButton>
      </div>
      <div className='video-dialog-content-panel'>
        <div className='video-dialog-left-panel'>
          <ReactPlayer
            className='react-player'
            width='100%'
            height='77%'
            url='https://www.youtube.com/watch?v=Rq5SEhs9lws'
            controls={true}
            onProgress={handleOpenAssignmentWhenTimeCome}
          />
          <div className='video-dialog-left-assignment-panel'>
            {assignmentArray.map((assignment) => (
              <div
                key={assignment.id}
                className='video-dialog-left-assignment-item-panel'
              >
                <Tooltip
                  title={
                    <div style={{ textAlign: 'center' }}>
                      {assignment.name}
                      <br />
                      {`Thời điểm xuất hiện ${convertSecondToMinute(
                        assignment.timeShowUp
                      )}`}
                    </div>
                  }
                  placement='top'
                >
                  <IconButton
                    className='video-dialog-left-assignment-icon-panel'
                    onClick={() => handleOpenAssignment(assignment.id)}
                  >
                    <AssignmentIcon />
                  </IconButton>
                </Tooltip>
              </div>
            ))}
          </div>
          <div className='video-dialog-left-reference-panel'>
            <div className='video-dialog-header'>Tài liệu tham khảo</div>
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
        </div>
        <div className='video-dialog-right-panel'>
          Nothing to show right now
        </div>
      </div>
    </Dialog>
  );
};

export default VideoDialog;

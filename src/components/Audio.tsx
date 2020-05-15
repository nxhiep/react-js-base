import React, { FunctionComponent, useState, useEffect, useRef} from 'react';
import { LoadingWidget } from './Widgets';
import ImageError from '../resources/images/error-image-generic.png';
import { PauseCircleFilled } from "@material-ui/icons";
import { PlayCircleFilled } from "@material-ui/icons";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { formatTime } from '../utils';

interface AudioInfo {
    duration: number,
    curTime: number,
    playing: boolean,
}

const useStyle = makeStyles((theme: Theme) => 
    createStyles({
        controls: {
            flexGrow: 1,
            margin: "0 20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          },
          barProgressKnob: {
            position: "relative",
            height: "16px",
            width: "16px",                      
            border: "1.5px solid white",
            borderRadius: "50%",
            backgroundColor: "orange",
          },
          playerButton: {
            width: "fit-content",
            backgroundColor: "transparent",
            border: "none",
        
            '&:focus': {
              outline: "none",
            },
            '&:hover': {
                cursor: "pointer",
                svg: {
                    color: "orange",
                }
            },
            svg: {
              fontSize: "3em",
              color: "#e1450d",
            }
          },
        barTime: {
            color: "#333",
            fontSize: "16px",
        },
        barProgress: {
            flex: 1,
            borderRadius: "5px",
            margin: "0 20px",
            height: "10px",
            display: "flex",
            alignItems: "center",
            border: "1px solid #e1450d",
            cursor: "pointer",
        },
        bar: {
            userSelect: "none",
            width: "100%",
            display: "flex",
            alignItems: "center",
        },
        player: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
            backgroundColor: "transparent",
        }
            
    })
);

const Audio: FunctionComponent<({ 
    src?: string,
    onLoaded?: Function,
    onError?: Function,
    className?: string
})> = ({ 
    src, 
    onLoaded = () => {},
    onError = () => {},
    className
}) => {
    const audioRef = useRef<HTMLMediaElement>(null);
    const [loading, setLoading] = useState(true);
    const [duration, setDuration] = useState(1);
    const [curTime, setCurTime] = useState(0.1);
    const [playing, setPlaying] = useState(false);
    const [clickedTime, setClickedTime] = useState();

    const classes = useStyle();

    const curPercentage = (curTime / duration) * 100;

    function calcClickedTime(e: React.MouseEvent) {
        const clickPositionInPage = e.pageX;
        const bar = document.querySelector(".bar__progress") as HTMLDivElement;
        const barStart = bar!.getBoundingClientRect().left + window.scrollX;
        const barWidth = bar!.offsetWidth;
        const clickPositionInBar = clickPositionInPage - barStart;
        const timePerPixel = duration / barWidth;
        return timePerPixel * clickPositionInBar;
    }

    const onTimeUpdate = (time: any) => {
        setClickedTime(time);
    }

    function handleTimeDrag(e: React.MouseEvent) {
        onTimeUpdate(calcClickedTime(e));
    
        const updateTimeOnMove = (eMove: any)  => {
          onTimeUpdate(calcClickedTime(eMove));
        };
    
        document.addEventListener("mousemove", updateTimeOnMove);
    
        document.addEventListener("mouseup", () => {
          document.removeEventListener("mousemove", updateTimeOnMove);
        });
      }

    useEffect(() => {
        setLoading(true);
        
        const setAudioData = () => {
            setDuration(audioRef.current!.duration);
            setCurTime(audioRef.current!.currentTime);
        };
      
        const setAudioTime = () => setCurTime(audioRef.current!.currentTime);
      
        audioRef.current!.addEventListener("loadeddata", setAudioData);

        audioRef.current!.addEventListener("timeupdate", setAudioTime);

        playing ? audioRef.current!.play() : audioRef.current!.pause();

        if (clickedTime && clickedTime !== curTime) {
            audioRef.current!.currentTime = clickedTime;
            setClickedTime(null);
          }

        return () => {
            audioRef.current!.removeEventListener("loadeddata", setAudioData);
            audioRef.current!.removeEventListener("timeupdate", setAudioTime);
          };
    });

    const handlePlay = () => {
		setPlaying(true);
    };
    
    const handlePause = () => {
		setPlaying(false);
	};

    return (
        <div className="player">
            <audio id="audio" ref={audioRef} >
                <source src={process.env.PUBLIC_URL + '/song.mp3'} />
                Your browser does not support the <code>audio</code> element.
            </audio>
            <div className="controls">
                {!playing &&
                    (
                        <button className="player__button  1" onClick={handlePlay}>
                            <PlayCircleFilled />
                        </button>
                    )
                }
                { playing &&
                    (
                        <button className="player__button 2" onClick={handlePause}>
                            <PauseCircleFilled />
                        </button>
                    )
                }
                <div className="bar">
                    <span className="bar__time">{formatTime(curTime)}</span>
                    <div
                        className="bar__progress"
                        style={{
                        background: `linear-gradient(to right, #e1450d ${curPercentage}%, white 0)`
                        }}
                        onMouseDown={e => handleTimeDrag(e)}
                      
                    >
                        <span
                        className="bar__progress__knob"
                        style={{ left: `${curPercentage - 2}%` }}
                        />
                    </div>
                    <span className="bar__time">{formatTime(duration)}</span>
                </div>
            </div>
        </div>
    );
}

export default Audio;
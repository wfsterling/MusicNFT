import React, { useRef, useState } from "react";
import './Player.css'

export default function Player(props){

  const song = props.song;
  const audioPlayer = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);

  const play = () => {
    audioPlayer.current.play();
  };

  const pause = () => {
    audioPlayer.current.pause();
  };

  const stop = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
  };

  const onPlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    setSeekValue(
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
    );
  };

  return (
    <>
      <audio
        src={song}
        ref={audioPlayer}
        onTimeUpdate={onPlaying}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      

      <div className="player-bar">
        <div>
          <button onClick={play} className="play-btn">play</button>
          <button onClick={pause} className="pause-btn">pause</button>
          {/* <button onClick={stop}>stop</button> */}
        </div>
        <div className="playbar-wrapper">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={seekValue}
            className="playbar-track"
            onChange={(e) => {
              const seekto = audioPlayer.current.duration * (+e.target.value / 100);
              audioPlayer.current.currentTime = seekto;
              setSeekValue(e.target.value);
            }}
          />
          <p className="currentTime">{currentTime}</p>
        </div>
      </div>
    </>
  );
}
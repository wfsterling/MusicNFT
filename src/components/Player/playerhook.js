import React, { useRef, useState } from "react";

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

  const setSpeed = (speed) => {
    audioPlayer.current.playbackRate = speed;
  };

  const onPlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    setSeekValue(
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
    );
  };

  return (
    <div className="App">
      <audio
        src={song}
        ref={audioPlayer}
        onTimeUpdate={onPlaying}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <br />
      <p>{currentTime}</p>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={seekValue}
        onChange={(e) => {
          const seekto = audioPlayer.current.duration * (+e.target.value / 100);
          audioPlayer.current.currentTime = seekto;
          setSeekValue(e.target.value);
        }}
      />
      <div>
        <button onClick={play}>play</button>
        <button onClick={pause}>pause</button>
        <button onClick={stop}>stop</button>
        <button onClick={() => setSpeed(0.5)}>0.5x</button>
        <button onClick={() => setSpeed(1)}>1x</button>
        <button onClick={() => setSpeed(1.5)}>1.5x</button>
        <button onClick={() => setSpeed(2)}>2x</button>
      </div>
    </div>
  );
}
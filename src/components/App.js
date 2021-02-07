import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import logo from '../logo.png';
import './App.css';

const HIGHREZ_AUDIO_FILE = "music/RussianBlues.mp3";
const COVER_IMAGE = "images/cover.jpeg"
// const HIGHREZ_AUDIO_FILE = "music/RussianBlues.mp3"

class App extends Component {

  

  render() {
    return (
      <div>
        <nav className="navbar navbar-ui fixed-top flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            MusicStreams
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="card nft-card">
                <div className="card-image">
                  <img src={COVER_IMAGE} alt="cover image" />
                </div>
              <ReactAudioPlayer
                // src="music/RussianBlues.mp3"
                src={HIGHREZ_AUDIO_FILE}
                // autoPlay
                controls
              />
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

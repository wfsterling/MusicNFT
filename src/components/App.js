import React, { Component } from 'react';
import Header from'./Header';
import MusicPreviewCard from './MusicPreviewCard'
import './App.css';

const HIGHREZ_AUDIO_FILE = "music/RussianBlues.mp3";
const COVER_IMAGE = "images/cover.jpeg"
const TOKEN_TITLE = "Russian Blues"
const TOKEN_ARTIST = "Nick, Sergey, and William"
const TOKEN_PRICE = ".001"
// const HIGHREZ_AUDIO_FILE = "music/RussianBlues.mp3"

class App extends Component {

  

  render() {
    return (
      <div> 
        <Header/>

        <div className="container-fluid mt-5">
          <div className="row">
              <main role="main" className="nft-flex-layout">

                <MusicPreviewCard
                  sample={HIGHREZ_AUDIO_FILE}
                  cover={COVER_IMAGE}
                  title={TOKEN_TITLE}
                  artist={TOKEN_ARTIST}
                  price={TOKEN_PRICE}
                />
                <MusicPreviewCard
                  sample={HIGHREZ_AUDIO_FILE}
                  cover={COVER_IMAGE}
                  title={TOKEN_TITLE}
                  artist={TOKEN_ARTIST}
                  price={TOKEN_PRICE}
                />
                <MusicPreviewCard
                  sample={HIGHREZ_AUDIO_FILE}
                  cover={COVER_IMAGE}
                  title={TOKEN_TITLE}
                  artist={TOKEN_ARTIST}
                  price={TOKEN_PRICE}
                />
                <MusicPreviewCard
                  sample={HIGHREZ_AUDIO_FILE}
                  cover={COVER_IMAGE}
                  title={TOKEN_TITLE}
                  artist={TOKEN_ARTIST}
                  price={TOKEN_PRICE}
                />

              </main>
            </div>
        </div>

      </div>
    );
  }
}

export default App;

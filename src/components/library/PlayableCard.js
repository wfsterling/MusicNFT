import React, { Component } from 'react';
import '../App.css';
import './PlayableCard.css'
import Typography from '@material-ui/core/Typography';

// import Sample from 'QmUhK2dTTGpRXNE8xNN3SsFobmTFmRnYZQCYnHDh8qRzp4'
// import Master from 'QmbYx6iBhJSuYY4SBvyThTsDeoSiNMapM79WQQEccicENm'
// import Hero from 'QmT6iGtffKzqjkgsVVi6jUytcecGLgwd9XjNjcmXcMU2UY'
// const sample = 'QmUhK2dTTGpRXNE8xNN3SsFobmTFmRnYZQCYnHDh8qRzp4'
// const master = 'QmbYx6iBhJSuYY4SBvyThTsDeoSiNMapM79WQQEccicENm'
const hero = 'QmT6iGtffKzqjkgsVVi6jUytcecGLgwd9XjNjcmXcMU2UY'



// While learning REACT components, used the following
// to run a list of local list of tokens using MetaMask account:
// const TOKEN_SAMPLE = 'https://ipfs.io/ipfs/' + sample ;
// const TOKEN_MASTER = 'https://ipfs.io/ipfs/' + master ;
const TOKEN_COVER ='https://ipfs.io/ipfs/' +  hero;
// const TOKEN_COVER = 'https://ipfs.io/ipfs/QmNaPs8M7d1w1Y8hNyqQTF7gBBaJZNooDU44zaDtqfFh5B';
const TOKEN_TITLE = "Russian Blues";
// const TOKEN_ARTIST = "Nick, Sergey, and William";
// const TOKEN_PRICE = ".001";



class PlayableCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="playableCard">
        <div className="playableCard-Hero">
          <img src={TOKEN_COVER} alt="Album Cover" />
        </div>
        <Typography variant="h6">{TOKEN_TITLE}</Typography>
        <Typography variant="subtitle1">{TOKEN_TITLE}</Typography>
      </div>
    );
  }
}

export default PlayableCard;
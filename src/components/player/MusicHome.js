import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import '../App.css';
import './MusicHome.css';
import DisplayTokens from './DisplayTokens';
import Footer from './Footer';
import Button from '@material-ui/core/Button';
import Layers from '@material-ui/icons/Layers';
import ChevronRight from '@material-ui/icons/ChevronRight'
import Album from '@material-ui/icons/Album'
import LibraryMusic from '@material-ui/icons/LibraryMusic'


class MusicHome extends Component {

    componentWillMount() {
    //   this.loadBlockchainData()
    }

  
    async loadBlockchainData() {
     
    } 
  
  
    constructor(props){
      super(props);
      this.state = {
      }
    }
  
    render() {
      return (
        <div> 
          {/* <div className="create-bar">
              <Link to="/tokenForm">
                <Button variant="contained" 
                  color="primary"
                  className="create-btn">
                    Create Collectible
                  </Button>
              </Link>
          </div> */}
  
          <div className="playerMenu">
              <ul className="playerMenuList">
                  <li>
                      <Layers fontSize="large" className="menulist-icon" />
                      <span>Collections I'm following</span>
                      <ChevronRight fontSize="large" className="angle-button" />
                  </li>
                  <li>
                      <Album fontSize="large" className="menulist-icon" />
                      <span>Artists</span>
                      <ChevronRight fontSize="large" className="angle-button" />
                  </li>
                  <li>
                      <LibraryMusic fontSize="large" className="menulist-icon" />
                      <span>Playlists</span>
                      <ChevronRight fontSize="large" className="angle-button" />
                  </li>
              </ul>
          </div>



          <DisplayTokens />

          <Footer />
        
        </div>
      );
    }
  }
  
  export default withRouter(MusicHome);
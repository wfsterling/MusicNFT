import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import '../App.css';
import './MusicHome.css';
import DisplayTokens from './DisplayTokens';
import PlayableCard from './PlayableCard';
import Footer from './Footer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
  
          <div className="playerMenu">
              <ul className="playerMenuList">
              <Link to="/tokenForm"><li>
                    
                      <Layers fontSize="large" className="menulist-icon" />
                      <span>Create New Collectible</span>
                      <ChevronRight fontSize="large" className="angle-button" />
                    
                  </li></Link>
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

          {/* Recently Added Section */}
          <div className="musicSection section--recentlyAdded">
            <Typography variant="h3">Recently Added</Typography>
            <div classsName="scrollableContent">
              {/* <DisplayTokens /> */}
              <PlayableCard />
            </div>
          </div>

          

          <Footer />
        
        </div>
      );
    }
  }
  
  export default withRouter(MusicHome);
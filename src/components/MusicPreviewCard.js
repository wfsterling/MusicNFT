import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './MusicPreviewCard.css'


class MusicPreviewCard extends Component {

    render() {
        return (
            
            <div className="card nft-card">
                <div className="card-image">
                    <img src={this.props.cover} alt="cover" />
                </div>
                <h5>{this.props.title}</h5>
                <p>{this.props.artist}</p>
                <ReactAudioPlayer
                    src={this.props.sample}
                    // autoPlay
                    controls
                    controlsList='nodownload'
                />
                <div className="token-price-container">
                    <p>Price:</p>
                    <p className="right-align">{this.props.price}ETH</p>
                </div>
                <button name="Buy">Buy</button>
            </div>
        );
    }
}

export default MusicPreviewCard;





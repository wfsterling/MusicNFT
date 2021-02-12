import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './MusicPreviewCard.css'

// This is the first REACT component I've buiilt 
// that actually works (*receives props)

class MusicPreviewCard extends Component {

    render() {
        return (
            
            <div className="card nft-card">
                <div className="card-image">
                    <img src={this.props.cover} alt="cover" />
                </div>
                {/* Still learning how to grab token data. Currently able to show name, address and the symbol */}
                <h5>{this.props.title}</h5>
                <p>{this.props.artist}</p>
                <ReactAudioPlayer
                    // For now, they're all loading a local music file to preview
                    src={this.props.sample}
                    // autoPlay
                    controls
                    // Why make a Music NFT if they could just download it?
                    controlsList='nodownload'
                />
                <div className="token-price-container">
                    <p>Price:</p>
                    {/* Currently displaying the token address, not price: */}
                    <p className="right-align">{this.props.price}ETH</p>
                </div>
                <button name="Buy">Buy</button>
            </div>
        );
    }
}

export default MusicPreviewCard;





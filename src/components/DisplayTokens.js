import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Melomaniac from '../abis/Melomaniac.json'
import MusicPreviewCard from './MusicPreviewCard'
import './App.css';
import Web3 from 'web3';
import Button from '@material-ui/core/Button';

// While learning REACT components, used the following
// to run a list of local list of tokens using MetaMask account:
const SAMPLE_AUDIO_FILE = "https://ipfs.io/ipfs/QmUhK2dTTGpRXNE8xNN3SsFobmTFmRnYZQCYnHDh8qRzp4";
// const HIGHREZ_AUDIO_FILE = "music/RussianBlues-full.mp3";
const TOKEN_COVER = "https://ipfs.io/ipfs/QmNaPs8M7d1w1Y8hNyqQTF7gBBaJZNooDU44zaDtqfFh5B";
// const TOKEN_TITLE = "Russian Blues";
// const TOKEN_ARTIST = "Nick, Sergey, and William";
const TOKEN_PRICE = ".001";

class DisplayTokens extends Component {

  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detectefd. You should consider tryig MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    // const web3 = window.web3
  
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    

    // Find which network
    const networkId = await web3.eth.net.getId()
    // Find the network id for the contract on the network
    const networkData = Melomaniac.networks[networkId]
    
    if(networkData) {
      const abi = Melomaniac.abi // from ubi json
      // contract address on the network
      const address = networkData.address
      this.setState({ address })
      const contract = new web3.eth.Contract(abi, address);
      this.setState({ contract })
      const totalSupply = await contract.methods.totalSupply().call()
      this.setState({ totalSupply })
      // 
      
      
      
      for (var i = 1; i <= totalSupply; i++) {
        // Grab Artist
        const type_ = 'mmc-token'
        const artist_ = await contract.methods.artist(i-1).call()
        const title_ = await contract.methods.title(i-1).call()
        const description_ = await contract.methods.description(i-1).call()
        const price_ = await contract.methods.price(i-1).call()
        const supply_ = await contract.methods.supply(i-1).call()

        let data_ = [ type_, artist_, title_, description_, price_, supply_];


        this.setState({
          data: [ this.state.data, data_ ]
        });
      }
    }
    else {
      window.alert("Smart contract not deployed to detected network")
    }
  } 


  constructor(props){
    super(props);
    this.state = {
      account: '',
      contract: null,
      totalSupply: 0,
      data: []
    }
  }

  render() {
    return (
      <div> 
        <div className="create-bar">
            <Link to="/tokenForm">
              <Button variant="contained" 
                color="primary"
                className="create-btn">
                  Create Collectible
                </Button>
            </Link>
        </div>

        <div className="sample-section">
            <main role="main" className="nft-flex-layout">
              { console.log("this.state.data: ", this.state.data[1]) }

              {this.state.data.map((token) => {
                if(token[0] === 'mmc-token') 
                  return (
                    <div className="nft-wrapper">
                      <MusicPreviewCard
                        sample={SAMPLE_AUDIO_FILE}
                        cover={TOKEN_COVER}
                        title={token[2]} 
                        artist = {token[1]}
                        price = {TOKEN_PRICE}
                      />
                    </div>
                  );

                return null
              })}


            </main>
          </div>
      
      </div>
    );
  }
}

export default withRouter(DisplayTokens);
import React, { Component } from 'react';
import Header from'./Header';
import MusicPreviewCard from './MusicPreviewCard'
import './App.css';
import Web3 from 'web3';
import Raribletoken from '../abis/RaribleToken.json'

const HIGHREZ_AUDIO_FILE = "music/RussianBlues.mp3";
const COVER_IMAGE = "images/cover.jpg"
const TOKEN_TITLE = "Russian Blues"
const TOKEN_ARTIST = "Nick, Sergey, and William"
const TOKEN_PRICE = ".001"
// const HIGHREZ_AUDIO_FILE = "music/RussianBlues.mp3"

class App extends Component {

  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})

    // const networkID = await web3.eth.net.getId()
    // const networkData = Raribletoken.networks[networkID]
    // const abi = Raribletoken.abi
    // const address = networkData.initialValue
    // const contract = new web3.eth.Contract(abi, address)
    // console.log(networkData)
  } 

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ehtereum.enable()
    }
    else if (window.web3) {
      window.web3 = Web3(window.web3.currentProvider)
    }
    else {
      window.alert("Non-Ethereum browser detected. You should consider installing MetaMask!")
    }
  }


  constructor(props){
    super(props);
    this.state = {
      account: ''
    }
  }

  render() {
    return (
      <div> 
        <Header
          account={this.state.account}
        />
          <div className="sample-section">
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
                  cover={"images/cover2.jpg"}
                  title={TOKEN_TITLE}
                  artist={TOKEN_ARTIST}
                  price={TOKEN_PRICE}
                />
                <MusicPreviewCard
                  sample={HIGHREZ_AUDIO_FILE}
                  cover={"images/cover3.jpg"}
                  title={TOKEN_TITLE}
                  artist={TOKEN_ARTIST}
                  price={TOKEN_PRICE}
                />
                <MusicPreviewCard
                  sample={HIGHREZ_AUDIO_FILE}
                  cover={"images/cover4.jpg"}
                  title={TOKEN_TITLE}
                  artist={TOKEN_ARTIST}
                  price={TOKEN_PRICE}
                />

              </main>
            </div>
        </div>

    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from'./Header';
import Melomaniac from '../abis/Melomaniac.json'
import MusicPreviewCard from './MusicPreviewCard'
import './App.css';
import Web3 from 'web3';
<<<<<<< HEAD
// import Raribletoken from './abis/RaribleToken.json'
=======
>>>>>>> 29f5c19b8da5bd3d36ca44de296e4f80562cd03e

// While learning REACT components, used the following
// to run a list of local list of tokens using MetaMask account:
const SAMPLE_AUDIO_FILE = "music/RussianBlues-sample.mp3";
// const HIGHREZ_AUDIO_FILE = "music/RussianBlues-full.mp3";
// const COVER_IMAGE = "images/concert/concert1.jpg";
// const TOKEN_TITLE = "Russian Blues";
// const TOKEN_ARTIST = "Nick, Sergey, and William";
// const TOKEN_PRICE = ".001";

class App extends Component {

  componentWillMount() {
    this.loadBlockchainData()
  }

<<<<<<< HEAD
=======
  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})

    fetch('https://api.ethplorer.io/getAddressInfo/' + this.state.account + '?apiKey=freekey')
      .then(response => response.json())
      .then((jsonData) => {
        // jsonData is parsed json object received from url
        this.setState({tokens: jsonData.tokens})
        // console.log(tokens)
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      })
    

    // Used the following scripts to access tokens. Need more education on how best to read
    // from tokens, and how to iterate on an ERC1155 (using TokenID) token vs ERC721


    // GET ACCOUNT
    // https://api.etherscan.io/api?module=account&action=balance&address=0xe3379f752660d4545c3b54D18dE176Bf347365d7&tag=latest&apikey=2AG9EC16HG97UB9WKT4A2JTY8PT55G95R2 

    // GET ERC721 Token Transfer Events by address (does show tokens)
    // https://api.etherscan.io/api?module=account&action=tokennfttx&address=0xe3379f752660d4545c3b54D18dE176Bf347365d7&startblock=0&endblock=999999999&sort=asc&apikey=2AG9EC16HG97UB9WKT4A2JTY8PT55G95R2

    // Get ERC20-Token Account Balance for TokenContractAddress
    // https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xd07dc4262bcdbf85190c01c996b4c06a461d2430&address=0xe3379f752660d4545c3b54D18dE176Bf347365d7&tag=latest&apikey=2AG9EC16HG97UB9WKT4A2JTY8PT55G95R2

    // Get ERC20-Token TotalSupply by ContractAddress
    // https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x2aea4add166ebf38b63d09a75de1a7b94aa24163&apikey=2AG9EC16HG97UB9WKT4A2JTY8PT55G95R2

    // Get token info with Token Address
    // http://api.ethplorer.io/getTokenInfo/0xd07dc4262bcdbf85190c01c996b4c06a461d2430?apiKey=freekey

    //Address Info
    // https://api.ethplorer.io/getAddressInfo/0xe3379f752660d4545c3b54D18dE176Bf347365d7?apiKey=freekey

  } 

>>>>>>> 29f5c19b8da5bd3d36ca44de296e4f80562cd03e
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
      const contract = new web3.eth.Contract(abi, address);
      this.setState({ contract })
      const totalSupply = await contract.methods.totalSupply().call()
      // console.log(totalSupply)
      this.setState({ totalSupply })
      // 
      for (var i = 1; i <= totalSupply; i++) {
        const mmc = await contract.methods.mmcs(i-1).call()
        this.setState({
          mmcs: [...this.state.mmcs, mmc]
        })
      }
      console.log(this.state.mmcs)
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
      mmcs: []
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

              {this.state.mmcs.map((token, i) => {
                return (
                  <div key={i} className="nft-wrapper">
                    <MusicPreviewCard
                      sample={SAMPLE_AUDIO_FILE}
                      cover={'images/concert/concert' + (i+1) + '.jpg'}
                      title={token} // artist
                      artist = {TOKEN_ARTIST}
                      price = {TOKEN_PRICE}
                      // price={token.tokenInfo.symbol}
                    />
                  </div>
                );
              })}
<<<<<<< HEAD
=======
              
>>>>>>> 29f5c19b8da5bd3d36ca44de296e4f80562cd03e

            </main>
          </div>
      
      </div>
    );
  }
}

export default App;

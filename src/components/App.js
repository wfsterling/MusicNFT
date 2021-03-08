import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from'./Header';
import DisplayTokens from'./library/DisplayTokens';
import UploadToIPFS from'./UploadToIPFS';
import TokenForm from'./TokenForm';
import MusicHome from'./library/MusicHome';
import Player from'./Player/Player';
import Melomaniac from '../abis/Melomaniac.json'
import './App.css';
import Web3 from 'web3';


class App extends Component {

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
      <div className="App-container">
        
          <Router>
            <Header
              account={this.state.account}
            />
            <div className="header-spacer"></div>
          
            <Switch>
              <Route path="/" exact component={() => <MusicHome />} />
              <Route path="/displayTokens" exact component={() => <DisplayTokens />} />
              <Route path="/tokenForm" exact component={() => <TokenForm />} />
              <Route path="/upload" exact component={() => <UploadToIPFS />} />
              {/* Experiments */}
              <Route path="/musicHome" exact component={() => <MusicHome />} />
            </Switch>
          </Router>
        

          {/* Hard coded, but passing an IPFS file to the player */}
          <Player
            song='https://ipfs.io/ipfs/QmbYx6iBhJSuYY4SBvyThTsDeoSiNMapM79WQQEccicENm'
          />
      </div>
    );
  }
}

export default App;

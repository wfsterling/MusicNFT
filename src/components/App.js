import React, { Component } from 'react';
import Header from'./Header';
import Melomaniac from '../abis/Melomaniac.json'
import MusicPreviewCard from './MusicPreviewCard'
import './App.css';
import Web3 from 'web3';

// While learning REACT components, used the following
// to run a list of local list of tokens using MetaMask account:
const SAMPLE_AUDIO_FILE = "https://ipfs.io/ipfs/QmUSeLArt2H7Pr1nsj4Md94tkjGyQoWWj2iRFhddSYfany";
// const HIGHREZ_AUDIO_FILE = "music/RussianBlues-full.mp3";
const TOKEN_COVER = "https://ipfs.io/ipfs/QmT6iGtffKzqjkgsVVi6jUytcecGLgwd9XjNjcmXcMU2UY";
// const TOKEN_TITLE = "Russian Blues";
// const TOKEN_ARTIST = "Nick, Sergey, and William";
const TOKEN_PRICE = ".001";

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
      // 
      
      // Create a new array based on current state:
      let data_ = [];
      
      
      for (var i = 1; i <= totalSupply; i++) {
        // Grab Artist
        const artist_ = await contract.methods.artist(i-1).call()
        const title_ = await contract.methods.title(i-1).call()
        const description_ = await contract.methods.description(i-1).call()
        const price_ = await contract.methods.price(i-1).call()
        const supply_ = await contract.methods.supply(i-1).call()

        // Add item to it
        // data = [artist: artist_, title: title_, description: description_, price: price_, supply: supply_];
        
        // data_ = [ artist_, title_, description_, price_, supply_];
        // const data_ = artist_
        let data_ = [ artist_, title_, description_, price_, supply_];
        
        // this.setState({
        //   data: [ this.state.data, [ artist_, title_, description_, price_, supply_] ]
        // });

        this.setState({
          data: [ this.state.data, data_ ]
        });
        
        // Set state
        // this.setState({ 
        //   data: { ...data_ }
        // });


        // const mmc = await contract.methods.mmcs(i-1).call()
        // this.setState({
        //   mmcs: [...this.state.mmcs, mmc]
        // })
      }

      // console.log(this.state.data)
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
      // artist: '',
      // description: '',
      // price: 0,
      // supply: 0
    }
  }

  render() {
    return (
      <div> 
        <Header
          account={this.state.account}
          // account={this.state.data}
        />


        <div className="sample-section">
            <main role="main" className="nft-flex-layout">
              { console.log("this.state.data: ", this.state.data[1]) }

              {this.state.data.map((token) => {
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
              })}



            {/* {this.state.data.map(function(item) { return (
              <div key={item.mmcId}>
              <span>
              <p>{item.title}</p>
              </span> <span>{item.artist}</span> <span>{item.description}</span> <span>{item.supply}</span>
              </div> );
            })} */}


              
              {/* {this.state.tokenArray.map(function(token) {
                // Object.keys(obj)
                return (
                  <div className="nft-wrapper">
                    <MusicPreviewCard
                      sample={SAMPLE_AUDIO_FILE}
                      cover={'images/concert/concert1.jpg'}
                      title={token.title} 
                      artist = {token.artist}
                      price = {token.price}
                    />
                  </div>
                );
              })} */}
              
             

            </main>
          </div>
      
      </div>
    );
  }
}

export default App;

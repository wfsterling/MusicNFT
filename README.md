# MusicNFT
MusicNFT 

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
Melomaniac is a Musica Collectible platform for NRC155 tokens. Create tokens, buy/sell/trade, LISTEN to them, and interact with the music community.
	
## Technologies
Project is created with:
* ReacjtJS
* Web3JS
* Ganache-cli
* Truffle Framework
	
## Setup
To run this project, install it locally using npm:

```
$ cd ../MusicNFT
$ npm install
$ npm start
```
### Launch Ganache
```
$ ganache-cli
```
Grab the Master Key for the FIRST address. Create a new account in MetaMask. Connect MetaMask to the app.

### Migrate Contract. 
Open a new console tab:
```
$ truffle migrate
```
You should see a new contract in your /build/contracts. Copy the Melomaniac.json and replace the text in /src/abis/Melomaniac.json

## About the token
This is a basic ERC721 Token that uses OpenZeppelin ERC 721; The token creates a list of Artist Names into an array. The number of the array is associated with the tokenID. There is 1 public funtion to this contract, addMelomaniac() which accepts a string name. A token is created, called the string name.

### Create Token
```
$ melo = await Melomaniac.deployed()
$ // Creates local reference
$ melo.addMelomaniac("Dirty Old Men - Live")
$ // creates new token "Dirty Old Men - Live"
```

### View tokens in a browser
Listen on localhost:3000, connect 
```
http://localhost:3000/
```

Tokens should be listed to the browser as cards. The titles of the tokens are listed as both Artist and Title. Price, Hero Image and sample music are local src vars.

##TODO:
Add to the contract:
* Artist
* Quantity (tokens to mint)
* Price
* IPFS hash to HERO_IMAGE
* IPFS hash to SAMPLE_FILE
* IPFS hash to MASTER_FILE

Pass new vars to <MusicPreviewCard/>

Create UI to upload images to IPFS, grab the hash returned, and add to the contract for HERO, SAMPLE, MASTER.

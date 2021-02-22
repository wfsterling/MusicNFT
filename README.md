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

## About the token
This is a basic ERC721 Token that uses OpenZeppelin ERC 721; The token creates a list of Artist Names into an array. The number of the array is associated with the tokenID. There is 1 public funtion to this contract, addMelomaniac() which accepts a string name. A token is created, called the string name.

### Create Token
```
$ melo = await Melomaniac.deployed()
$ // Creates local reference
$ melo.addMelomaniac("TranzicTrip","In the studio","The bands last performance, was it fate? Battle of the bands with the fastest performance of 'You Don't Have to Find Jesus' and 'Slip Inside'.", 3, 10)
$ // creates new token based on the title "In the studio"
```

### View tokens in a browser
Listen on localhost:3000, connect 
```
http://localhost:3000/
```

Tokens should be listed to the browser as cards. The titles of the tokens are listed as both Artist and Title. Price, Hero Image and sample music are local src vars.


Added to the contract:
* Artist

* Price
* IPFS hash to HERO_IMAGE
* IPFS hash to SAMPLE_FILE
* IPFS hash to MASTER_FILE


##TODO:
* Weigh ERC1155 (create contract)
* Add quantity of tokens (ERC1155?)
Create UI to upload images to IPFS, grab the hash returned, and add to the contract for HERO, SAMPLE, MASTER. As of the latest commit, IPFS works unreliably--requires running my local IPFS node?

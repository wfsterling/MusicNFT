const { assert } = require('chai');

const Mellowmaniac = artifacts.require('../contracts/Mellowmaniac.sol');

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Mellowmaniac', (accounts) => {
    let contract

    before(async () => {
        contract = await Mellowmaniac.deployed()
    })

    describe('deployment', async() => {
        it('deploys successfully', async () => {
            const address = contract.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
    })

    // describe('minting', async() => {
    //     it('creates a new token', async () => {
            
    //         const result = await contract.addMellowmaniac("Dirty Old Men","A night of snow, madness and wonder. East meets west in a battle against the Yeti.","Russian Blues Festival, 2021","http://localhost:3000/images/concert/concert1.jpg","http://localhost:3000/music/RussianBlues-sample.mp3","http://localhost:3000/music/RussianBlues-full.mp3",10)
    //         const totalSupply = await contract.balanceOf(msg.sender, )
    //     })
    //     assert.equal(totalSupply, 10)
    // })
})
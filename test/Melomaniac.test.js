const { assert } = require('chai')

const Melomaniac = artifacts.require('../contracts/Melomaniac.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Melomaniac', (accounts) => {
    let contract

    before(async () => {
        contract = await Melomaniac.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = contract.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
        it('has a name', async () => {
            const name = await contract.name()
            assert.equal(name, 'Melomaniac')
        })

        it('has a symbol', async () => {
            const symbol = await contract.symbol()
            assert.equal(symbol, 'MMC')
        })    
    })

    describe('minting', async () => {
        it('creates new token', async () => {
            const result = await contract.addMelomaniac('Dirty old men')
            const totalSupply = await contract.totalSupply()
            
            // SUCCESS
            assert.equal(totalSupply, 1)
            const event = result.logs[0].args
            // assert.equal(event.tokenId.toNumber(), 1, 'id is correct')
            assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct')
            assert.equal(event.to, accounts[0])

            // FAILURE
            await contract.addMelomaniac('Dirty old men 2')
            assert.equal(event.tokenId.toNumber(), 1, 'id is incorrect')
        })    
    })

    describe('indexing', async () => {
        it('lists maniacs', async () => {
            await contract.addMelomaniac('Dirty old men 2')
            await contract.addMelomaniac('Low Rider')
            await contract.addMelomaniac('TranzicTrip')
            for (var i = 1; i <= totalSupply; i++) {
                const mmc = await contract.methods.mmcs(i - 1).call()
                this.setState({
                  mmcs: [...this.setState.mmcs, mmc]
                })
              }
        })
  
    })
})
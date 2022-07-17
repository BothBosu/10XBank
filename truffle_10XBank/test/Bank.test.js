const Bank = artifacts.require('Bank.sol')

contract("Bank", async (accounts) => {
    it("can deposit", async () => {
        const bank = await Bank.new()
        const depositor = accounts[1] 

        let bankTotalBalance = await web3.eth.getBalance(bank.address)
        bankTotalBalance = web3.utils.fromWei(bankTotalBalance)
        console.log(bankTotalBalance)

        const amount = web3.utils.toWei('10', 'ether') //deposit 10 ETH

        await bank.deposit({ from: depositor, value: amount})

        let balance = await bank.balanceOf(depositor)
        balance = parseInt(web3.utils.fromWei(balance, 'ether'))

        assert.equal(balance, 10)
    })

    it("can withdraw", async () => {
        const bank = await Bank.new()
        const depositor = accounts[1]

        //deposit 20 ETH
        const deposit_amount = web3.utils.toWei('20', 'ether')
        await bank.deposit({ from: depositor, value: deposit_amount})

        bankTotalBalance = await web3.eth.getBalance(bank.address)
        bankTotalBalance = web3.utils.fromWei(bankTotalBalance)
        console.log(bankTotalBalance)

        let balance = await bank.balanceOf(depositor)
        balance = parseInt(web3.utils.fromWei(balance, 'ether'))
        assert.equal(balance, 20)

        //withdraw 10 ETH
        const withdraw_amount = web3.utils.toWei('10', 'ether')
        await bank.withdraw(withdraw_amount, { from: depositor})

        bankTotalBalance = await web3.eth.getBalance(bank.address)
        bankTotalBalance = web3.utils.fromWei(bankTotalBalance)
        console.log(bankTotalBalance)
        
        balance = await bank.balanceOf(depositor)
        balance = parseInt(web3.utils.fromWei(balance, 'ether'))
        assert.equal(balance, 10)

        assert.equal(parseInt(bankTotalBalance), 10)
    })
})
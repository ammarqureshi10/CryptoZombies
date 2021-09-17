
const truffleAssert = require("truffle-assertions");
//const time = require("./helpers/time");
const { assert } = require("chai");

 
const CryptoZombies = artifacts.require("CryptoZombies");
const zombieNames = ["Zombie 1", "Zombie 2"];

contract("CryptoZombies", (accounts) => {
    
    const [alice, bob, ammar] = accounts;
    
    let contractInstance;

    // it gives new contract instance after every it() 
    beforeEach(async () => {
        contractInstance = await CryptoZombies.new();
    })

    /// test: 1
    /// @notice Alice create a zombie 
    it("Alice should be able to create a new zombie", async () => {
        let result = await contractInstance.createRandomZombie(zombieNames[0], { from: alice });
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[0].args.name, zombieNames[0]);
    })

    /// test: 2
    /// @notice it should reverts
    it("Alice not allowed to create two zombie", async () => {
        let result = await contractInstance.createRandomZombie(zombieNames[0], { from: alice });
        // Alice try to create another zombie
        // Since Alice count increase by 1 at first
        // so transaction will revert 
        await truffleAssert.reverts(
            contractInstance.createRandomZombie(zombieNames[1], { from: alice }),
            ""
        );
    })

    /// test: 3
    describe("with the single-step transfer scenario", () => {
        it("should trnsfer a zombie", async () => {
            // alice create a zombie
            let result = await contractInstance.createRandomZombie(zombieNames[0], { from: alice });
            // zombieId alice gets
            let zombieId = result.logs[0].args.zombieId;
            // alice transfer zombie to bob
            await contractInstance.transferFrom(alice, bob, zombieId, { from: alice });
            // check If bob is the new onwer
            let newOwner = await contractInstance.ownerOf(zombieId);
            assert.equal(newOwner, bob);
        })
    })

    /// test: 4
    describe("with the two-step transfer scenario", async () => {

        it("should approve and then transfer a zombie when the approved address calls transferFrom", async () => {
            let result = await contractInstance.createRandomZombie(zombieNames[0], { from: alice });
            let zombieId = result.logs[0].args.zombieId;
            // Alice approve zombie to Bob 
            await contractInstance.approve(bob, zombieId, { from: alice });
            // Bob tries transfer approved zombie to himself
            let tx = await contractInstance.transferFrom(alice, bob, zombieId, { from: bob });
            let newOwner = await contractInstance.ownerOf(zombieId);
            assert.equal(tx.receipt.status, true);
            assert.equal(newOwner, bob);

        })

        it("should approve and then transfer a zombie when the owner calls transferFrom", async () => {
            let result = await contractInstance.createRandomZombie(zombieNames[0], { from: alice });
            let zombieId = result.logs[0].args.zombieId;
            // Alice approve zombie to Bob 
            await contractInstance.approve(bob, zombieId, { from: alice });
            // Alice try to transfer approved zombie to ammar
            let tx = await contractInstance.transferFrom(alice, ammar, zombieId, { from: alice });
            let newOwner = await contractInstance.ownerOf(zombieId);
            assert.equal(tx.receipt.status, true);
            assert.equal(newOwner, ammar);
        })
    })

    /// test: 5
    // stuck here in web3
    xit("should be able to attack the zombie", async()=>{
        //create a zombie for alice
        let aliceTx = await contractInstance.createRandomZombie(zombieNames[0], {from: alice});
        let aliceZombieId = aliceTx.logs[0].args.zombieId;
         //create a zombie for bob
        let bobTx = await contractInstance.createRandomZombie(zombieNames[1], {from: bob});
        let bobZombieId = bobTx.logs[0].args.zombieId;

        // alice attack at bob zombie
        // increase the time 
        await time.increase(time.duration.days(1))
        let result =  await contractInstance.attack(aliceZombieId, bobZombieId, {from: alice});
        assert.equal(result.receipt.status, true);
    })


    // SOME EXTRA TESTS

     /// test: 6
    it("Only owner can approve their zombie", async()=>{
        let result = await contractInstance.createRandomZombie(zombieNames[0], {from: alice});
        let zombieId = result.logs[0].args.zombieId;
         await truffleAssert.reverts(
            contractInstance.approve(bob, zombieId, {from: bob}),
            ""
        )
    }) 


     /// test: 7
    it("should approve a zombie", async () => {
        let result = await contractInstance.createRandomZombie(zombieNames[0], { from: alice });
        let zombieId = result.logs[0].args.zombieId;
        let tx = await contractInstance.approve(bob, zombieId, { from: alice });
        assert.equal(tx.receipt.status, true);
    })
    

})

//console.log("web3", web3);
//console.log("Web3", Web3);
//ethereum.enable();
//connect();
// const Web3 = require("web3");
// var web3js = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

//const address = "0x118F2a58A17ca3accCb826A62CE2F3935d8A94E8";


/* web3js.eth.getBalance(address, function (err, wei) {
    console.log("balance = ", wei);
    console.log("err ", err);
    let balance = web3js.utils.fromWei(wei, 'ether')
    console.log("balance = ", balance)
}); */

/*  //callback practice
 web3js.eth.getBalance(address).then((wei)=>{
    console.log(wei)
}).catch((err)=>{
    console.log(err)
}) */

   // with async/await 
/* async function checkBalance() {
    let wei = await web3js.eth.getBalance(address);
    console.log("balance in wei", wei);
} 
checkBalance(); */








/* async function increase(duration) {

  //first, let's increase time
  await web3.currentProvider.sendAsync({
      jsonrpc: "2.0",
      method: "evm_increaseTime",
      params: [duration], // there are 86400 seconds in a day
      id: new Date().getTime()
  }, () => {});

  //next, let's mine a new block
  web3.currentProvider.send({
      jsonrpc: '2.0',
      method: 'evm_mine',
      params: [],
      id: new Date().getTime()
  })

}

const duration = {

  seconds: function (val) {
      return val;
  },
  minutes: function (val) {
      return val * this.seconds(60);
  },
  hours: function (val) {
      return val * this.minutes(60);
  },
  days: function (val) {
      return val * this.hours(24);
  },
}

module.exports = {
  increase,
  duration,
};  */
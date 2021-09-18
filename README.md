# Testing-contracts-with-truffle and deployed to ropsten testnet


### Testing contracts with Truffle 
#### Requirements
-  chai Javascript testing library



  ## Tested Functionalities
- A user can create only zombie at a time
- User can transfer their zombie to others
- Only zombie owner can approve their zombie
- Resist non-owner to call approve on other zombies 





## Ropsten Deployment Using Truffle
#### Requirements
-  Install Truffle Globally, npm i truffle -g
-  Create new Directory and initialize Truffle 
-  Install HDWallet Provider, npm install truffle truffle-hdwallet-provider
-  Copy All Cryptozombies contracts till Lesson 9, Paste it in own ./contracts directory
-  Create new contract named as CryptoZombies which Inherits from ZombieOwnership (For Better Naming)
-  Setup Migration like,![image](https://user-images.githubusercontent.com/58142882/133895209-ff4a6a46-09a7-4b65-8aca-d359c37006cb.png)
- Configure File(truffle-config.js)
- Setup Ropsten Provider using https://infura.io/ 
- Create .secret file in root directory and save mnemonic phrases here
- Compile contracts, using truffle compile
- Deploy using, truffle migrate --network ropsten 
### Note:
make sure you add .secret in .gitignore before uploading to Github in Future

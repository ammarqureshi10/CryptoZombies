# Cyptozombies.io, Module1 Advance Solidity 

### Testing contracts with Truffle 
#### Requirements
-  chai Javascript testing library

  ## Tested Functionalities
- A user can create only zombie at a time
- User can transfer their zombie to others
- Only zombie owner can approve their zombie
- Resist non-owner to call approve on other zombies 



# Cyptozombies.io, Module2 Advance Solidity 
### Contract Deployment Using Truffle
This Project aim to deploy contract on Ropsten Testnet
#### Requirements
-  Install Truffle Globally, npm i truffle -g
-  Create new Directory and initialize Truffle 
-  Install HDWallet Provider, npm install truffle truffle-hdwallet-provider


### Steps
-  Copy All Cryptozombies contracts till Lesson 9, Paste it in own ./contracts directory
-  Create new contract named as CryptoZombies which Inherits from ZombieOwnership (For Better Naming)
- Compile contracts and create migration for CryptoZombies 
- set network truffle-config.js
- Create .secret file in root directory and save mnemonic phrases here
- Deploy using, truffle migrate --network ropsten 
### Note:
make sure you add .secret in .gitignore before uploading to Github in Future

## Ropsten Link 
https://ropsten.etherscan.io/tx/0x3998f6d6bfc17526acab55cb50c960b8a38d369b97fb3d432c64d6812b701a10

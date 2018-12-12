const HDWalletProvider = require("truffle-hdwallet-provider");

// Store environment-specific variable from '.env' to process.env
require('dotenv').config();

module.exports = {
    networks: {
        // testnets
        // properties
        // network_id: identifier for network based on ethereum blockchain. Find out more at https://github.com/ethereumbook/ethereumbook/issues/110
        // gas: gas limit
        // gasPrice: gas price in gwei
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*'
        },
        // your ganache client
        ganache: {
            host: 'localhost',
            port: '7545',
            network_id: '5777' // Match any network id
        },
        ropsten: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY),
            network_id: 3,
            gas: 6700000,
            //gasPrice: 21
        },
        kovan: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY),
            network_id: 42,
            gas: 6700000,
            //gasPrice: 21
        },
        rinkeby: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY),
            network_id: 4,
            gas: 6700000,
            //gasPrice: 21
        },
        // main ethereum network(mainnet)
        main: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY),
            network_id: 1,
            gas: 6700000,
            //gasPrice: 21
        }
    }
}
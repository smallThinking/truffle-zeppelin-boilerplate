# truffle-zeppelin-boilerplate

Minimalistic base configuration for using Truffle with Open Zeppelin.

## Prerequisites

You will need the following to be installed on your system:

- Node.js (8.2+)
- Npm (5.6+)

_Note: we recommend to always stick with the newest stable version of node and npm_

## Install

1. Checkout the repository into a directory

```
git clone git@github.com:smallThinking/truffle-zeppelin-boilerplate.git .
```

2. Global Install Truffle with Npm

```
npm install -g truffle
```

3. Install other packages with Npm

```
npm install
```

## how to use

### run develop blockchain-local-server(truffle develop server)

Start the Ganache CLI mock ethereum client if you don't have a client configured for testing.

_Note: please run this in a separate console_

```
// truffle develop server...
npm run dev
or
// please modify truffle.js and .env files!
ganache-cli
```

### build

1. build your solidity-contract

```
npm run build:contract
```

2. build your react-app

```
not yet...
```

### migrate(only truffle)

```
// truffle-local-server(truffle develop)
npm run migrate

// ganache-cli-local-server(ganache-cli)
npm run migrate:ganache

// using infura...
// please editing .env files
npm run migrate:ropsten
or
npm run migrate:rinkeby
```

### testing(only truffle)

---

Made with ❤️ to Ethereum by SmallThinking :kr::heart::jp:

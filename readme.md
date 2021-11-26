# ngi
**ngi** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

## Get started

```
starport chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

### Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

### Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.starport.network/stan14100/NGI@latest! | sudo bash
```
`stan14100/NGI` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/cosmosnetwork)

## Cosmos DIDs
Cosmos DIDs are identifiable by their cosmos method string and conform to the [Generic DID Scheme](https://w3c.github.io/did-core/).

A DID that uses this method MUST begin with the following prefix: did:cosmos:. Per the DID specification, this string MUST be in lowercase. The remainder of the DID, after the prefix, is specified below:

cosmos-did                = "did:cosmos:" cosmos-identifier-type
cosmos-identifier-type    = [ cosmos-type ":" ] cosmos-key
cosmos-type               = "ngi"
cosmos-key                = 1*255id-char "1" 20*255HEXDIG 

DIDs of `key` type are always generated from the Cosmos blockchain address they refer to. For example, see a DID of `key` type:

- `did:cosmos:key:cosmos1hjct6q7npsspsg3dgvzk3sdf89spmlpfg8wwf7`
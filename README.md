# DeFi Challenge

This project presents a user-friendly interface for token management (USDC and DAI). Interacting with the blockchain, connecting user wallets, fetching allowances and balances, and performing token-related transactions.

Deployed frontend: https://defi-challenge-seven.vercel.app/

## allowance

![Gif funcionamiento](/readmeAssets/allowance.gif)

## transfer

![Gif funcionamiento](/readmeAssets/transfer.mov)

## Keypoints

1. Connect wallet - detecting if the correct network has been connected (goerli)
2. Fetch balances of DAI and USDC tokens and display them in a human way
3. Has 2 buttons for each token: APPROVE and TRANSFER
4. Has an input for target wallet address and amount of tokens
5. Has some validations in place and notify pop up when errors show up

## How it works

### Token Data Fetch (ballance and allowance)

![Gif funcionamiento](/readmeAssets/DAIData.png)
![Gif funcionamiento](/readmeAssets/USDCData.png)

### Jest simple testing

![Gif funcionamiento](/readmeAssets/addressTesting.png)

### Invalid Address input

![Gif funcionamiento](/readmeAssets/notifyInvalidAddress.png)

## Tech stack

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png"  title="Sass" alt="Sass" width="40" height="40"/>&nbsp;
  <img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" title="Typescript" alt="Typescript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" **alt="Git" width="40" height="40"/>
    <img src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" title="Redux" **alt="Redux" width="40" height="40"/>
    <img src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png" title="Jest" **alt="Jest" width="40" height="40"/>
</div>

## How to run this repo

1. git clone
2. npm install
3. npm run start

To test the app you can use MetaMask extension, connect with any Goerli account and fund it from faucet: https://goerlifaucet.com

## Deployment links

Deploy frontend: https://defi-challenge-seven.vercel.app/

Thanks!

![Gif funcionamiento](/readmeAssets/WonderlandCheshireCar.webp)

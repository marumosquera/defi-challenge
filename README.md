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
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" **alt="Git" width="40" height="40"/>
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

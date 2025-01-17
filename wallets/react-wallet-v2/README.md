# Wallet Example (React, Typescript, Ethers, NextJS, Cosmos)

This example aims to demonstrate basic and advanced use cases enabled by WalletConnect. Please only use this for refference and development purposes, otherwise you are at risk of loosing your funds.

# Useful links

🔗 Live wallet app - https://react-wallet.walletconnect.com <br />
🔗 Live dapp - https://react-app.walletconnect.com <br />
📚 WalletConnect docs - https://docs.walletconnect.com/2.0

## Getting started

Eexample is built atop of [NextJS](https://nextjs.org/) in order to abstract complexity of setting up bundlers, routing etc. So there are few steps you need to follow in order to set everything up

1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com/sign-in) and obtain a project id
2. Add your project details in [WalletConnectUtil.ts](https://github.com/WalletConnect/web-examples/blob/main/wallets/react-wallet-v2/src/utils/WalletConnectUtil.ts) file
3. Install dependencies `yarn install` or `npm install`
4. Run `yarn dev` or `npm run dev` to start local development

## Navigating through example

1. Initial setup and initializations happen in [_app.ts](https://github.com/WalletConnect/web-examples/blob/main/wallets/react-wallet-v2/src/pages/_app.tsx) file
2. WalletConnect client, ethers and cosmos wallets are initialized in [useInitialization.ts ](https://github.com/WalletConnect/web-examples/blob/main/wallets/react-wallet-v2/src/hooks/useInitialization.ts) hook
3. Subscription and handling of WalletConnect events happens in [useWalletConnectEventsManager.ts](https://github.com/WalletConnect/web-examples/blob/main/wallets/react-wallet-v2/src/hooks/useWalletConnectEventsManager.ts) hook, that oppens related [Modal views](https://github.com/WalletConnect/web-examples/tree/main/wallets/react-wallet-v2/src/views) and passes them all necesary data
4. [Modal views](https://github.com/WalletConnect/web-examples/tree/main/wallets/react-wallet-v2/src/views) are responsible for data display and handling approval or rejection actions
5. Uppon approval or rejection modals pass request data to [RequestHandlerUtil.ts](https://github.com/WalletConnect/web-examples/blob/main/wallets/react-wallet-v2/src/utils/RequestHandlerUtil.ts) that performs all necesary work based on request method and returns formated json rpc result data that can be then used for WallteConnect client responses

## Preview of wallet and dapp examples in action

https://user-images.githubusercontent.com/3154053/156764521-3492c232-7a93-47ba-88bd-2cee3f8366d4.mp4

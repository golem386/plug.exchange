import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { EIP1193 } from '@web3-react/eip1193';
import { BscConnector } from '@binance-chain/bsc-connector';
import Fortmatic from 'fortmatic';
import { MewConnectConnector } from '@myetherwallet/mewconnect-connector';
import { Venly } from '@venly/web3-provider';
import { initializeConnector } from '@web3-react/core';

// metamask provider
export const metamask = initializeConnector<MetaMask>(
  (actions) =>
    new MetaMask({
      actions,
    }),
);

// coinbase wallet
export const coinbase = initializeConnector<CoinbaseWallet>(
  (actions) =>
    new CoinbaseWallet({
      actions,
      options: {
        url: '',
        appName: 'Plug Exchange',
        appLogoUrl: '',
        reloadOnDisconnect: false,
      },
    }),
);

// bsc wallet
export const bscWallet = initializeConnector<EIP1193>(
  (actions) =>
    new EIP1193({
      actions,
      provider: new BscConnector({
        supportedChainIds: [],
      }).getProvider(),
    }),
);

// wallet connect
export const wc = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: '',
        qrcode: true,
        bridge: '',
        qrcodeModalOptions: {
          desktopLinks: [
            'ledger',
            'tokenary',
            'wallet',
            'wallet 3',
            'secuX',
            'ambire',
            'wallet3',
            'apolloX',
            'zerion',
            'sequence',
            'punkWallet',
            'kryptoGO',
            'nft',
            'riceWallet',
            'vision',
            'keyring',
          ],
          mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar'],
        },
      },
    }),
);

// fortmatic
export const fortmaticWallet = initializeConnector<EIP1193>(
  (actions) => new EIP1193({ actions, provider: new Fortmatic('').getProvider() }),
);

// my ether wallet
export const mew = initializeConnector<EIP1193>(
  (actions) =>
    new EIP1193({
      actions,
      provider: new MewConnectConnector({
        url: '',
        windowClosedError: true,
      }).getProvider(),
    }),
);

// akrane
export const akrane = initializeConnector<EIP1193>(
  (actions) =>
    new EIP1193({
      actions,
      provider: Venly.createProviderEngine({
        clientId: 'YOUR_CLIENT_ID',
        environment: 'staging', //optional, production by default
        signMethod: 'POPUP', //optional, REDIRECT by default
        bearerTokenProvider: () => 'obtained_bearer_token', //optional, default undefined
        skipAuthentication: false,
      }),
    }),
);

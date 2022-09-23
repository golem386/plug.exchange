import { AbstractConnector } from '@web3-react/abstract-connector';
import {
  binanceWallet,
  coinbase,
  injectedEIP1193,
  supportedChainIds,
  walletConnect,
  fortmatic,
  mew,
} from '../connectors';
import { SUPPORTED_CHAIN_IDS } from './chains';

// web3 wallets
export interface Web3Wallet {
  [wallet: string]: {
    /** web3 wallet name */
    walletName: string;
    /** web3 wallet icon */
    walletIcon: string;
    /** provider API */
    provider: AbstractConnector;
    /** supported networks */
    supportedNetworks: number[];
    /** external URL */
    externalUrl?: string;
    /** tell you about provider mobile support */
    isMobileSupported?: boolean;
  };
}

const wallets: Web3Wallet = {
  INJECTED: {
    walletName: 'Injected',
    walletIcon: '',
    provider: injectedEIP1193,
    supportedNetworks: supportedChainIds,
  },
  METAMASK: {
    walletName: 'Metamask',
    walletIcon: '/images/wallets/metamask.png',
    provider: injectedEIP1193,
    supportedNetworks: supportedChainIds,
  },
  BINANCE_WALLET: {
    walletName: 'BSC',
    walletIcon: '/images/wallets/bsc.png',
    provider: binanceWallet,
    supportedNetworks: [SUPPORTED_CHAIN_IDS.Binance],
  },
  COINBASE: {
    walletName: 'Coinbase',
    walletIcon: '/images/wallets/coinbase.png',
    provider: coinbase,
    supportedNetworks: supportedChainIds,
    isMobileSupported: true,
  },
  WALLET_CONNECT: {
    walletName: 'Wallet Connect',
    walletIcon: '/images/wallets/walletconnect.png',
    provider: walletConnect,
    supportedNetworks: supportedChainIds,
    isMobileSupported: true,
  },
  FORMATIC: {
    walletName: 'Formatic',
    walletIcon: '/images/wallets/fortmatic.png',
    provider: fortmatic,
    supportedNetworks: [SUPPORTED_CHAIN_IDS.Mainnet],
    isMobileSupported: true,
  },
  MY_ETHER_WALLET: {
    walletName: 'MEW',
    walletIcon: '/images/wallets/mew.png',
    provider: mew,
    supportedNetworks: [SUPPORTED_CHAIN_IDS.Mainnet],
    isMobileSupported: true,
  },
};

export default wallets;

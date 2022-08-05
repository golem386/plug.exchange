import { Connector } from '@web3-react/types';
import { Web3ReactHooks } from '@web3-react/core';

// web3 wallets
export interface Web3Wallet {
  [wallet: string]: {
    /** web3 wallet name */
    walletName: string;
    /** web3 wallet icon */
    walletIcon: string;
    /** provider API */
    provider: [Connector, Web3ReactHooks];
    /** supported networks */
    supportedNetworks: number[];
    /** external URL */
    externalUrl?: string;
    /** tell you about provider mobile support */
    isMobileSupported?: boolean;
  };
}

const wallets: Web3Wallet = {
  METAMASK: {
    walletName: 'Metamask',
    walletIcon: '',
    provider: [],
    supportedNetworks: [],
  },
};

export default wallets;

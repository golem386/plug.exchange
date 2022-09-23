import { CHAINS, SUPPORTED_CHAIN_IDS } from 'config/chains';
import { APP_LOGO, APP_NAME } from 'config';

// connectors
import { InjectedConnector } from '@web3-react/injected-connector';
import { BscConnector } from '@binance-chain/bsc-connector';
import { CoinbaseConnector } from './CoinbaseConnector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import { MewConnectConnector } from '@myetherwallet/mewconnect-connector';

export let supportedChainIds = Object.keys(SUPPORTED_CHAIN_IDS).map((key) =>
  parseInt(SUPPORTED_CHAIN_IDS[parseInt(key)]),
);
let rpcUrls = {} as { [chainId: number]: string };

for (let k = 0; k < supportedChainIds.length; k++) {
  rpcUrls[supportedChainIds[k]] = CHAINS[supportedChainIds[k]]?.rpc_url;
}

export const injectedEIP1193 = new InjectedConnector({
  supportedChainIds,
});

export const binanceWallet = new BscConnector({
  supportedChainIds,
});

export const coinbase = new CoinbaseConnector({
  url: CHAINS[1].rpc_url,
  appName: APP_NAME,
  appLogoUrl: APP_LOGO,
  supportedChainIds,
});

export const walletConnect = new WalletConnectConnector({
  supportedChainIds,
  qrcode: true,
  bridge: 'https://bridge.walletconnect.org',
  rpc: rpcUrls,
});

export const fortmatic = new FortmaticConnector({
  apiKey: '',
  chainId: SUPPORTED_CHAIN_IDS.Mainnet,
});

export const mew = new MewConnectConnector({
  url: CHAINS[SUPPORTED_CHAIN_IDS.Mainnet]?.rpc_url,
  windowClosedError: true,
});

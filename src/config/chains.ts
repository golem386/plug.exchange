// types

export type Chain = {
  /** name */
  name: string;
  /** icon */
  icon: string;
  /** rpc url */
  rpc_url: string | undefined;
  /** native currency */
  nativeCurrency?: string;
  /** chain exploler */
  exploler?: string;
  /** exclude */
  exclude?: boolean;
};

export type ChainInfo = {
  [chainId: number]: Chain;
};

export enum SUPPORTED_CHAIN_IDS {
  Mainnet = 1,
  Goerli = 5,
  Binance = 56,
  Polygon = 137,
  Avalanche = 43114,
  Fantom = 250,
  Arbitrum = 10,
  Optimism = 42161,
}

export const CHAINS: ChainInfo = {
  [SUPPORTED_CHAIN_IDS.Mainnet]: {
    name: 'Ethereum',
    icon: '/images/chains/ethereum.png',
    rpc_url: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
    nativeCurrency: 'ETH',
    exploler: 'https://etherscan.io/',
  },
  [SUPPORTED_CHAIN_IDS.Goerli]: {
    name: 'Ethereum Goerli',
    icon: '/images/chains/ethereum.png',
    rpc_url: process.env.NEXT_PUBLIC_GOERLI_RPC_URL,
    nativeCurrency: 'Goerli ETH',
    exploler: 'https://goerli.etherscan.io/',
    exclude: true,
  },
  [SUPPORTED_CHAIN_IDS.Binance]: {
    name: 'BSC',
    icon: '/images/chains/smartchain.png',
    rpc_url: process.env.NEXT_PUBLIC_BSC_RPC_URL,
    nativeCurrency: 'BSC',
    exploler: 'https://bscscan.com/',
  },
  [SUPPORTED_CHAIN_IDS.Polygon]: {
    name: 'Polygon',
    icon: '/images/chains/polygon.png',
    rpc_url: process.env.NEXT_PUBLIC_POLYGON_RPC_URL,
    nativeCurrency: 'MATIC',
    exploler: 'https://polygonscan.com/',
  },
  [SUPPORTED_CHAIN_IDS.Avalanche]: {
    name: 'Avalanche',
    icon: '/images/chains/avalanche.png',
    rpc_url: process.env.NEXT_PUBLIC_AVALANCHE_RPC_URL,
    nativeCurrency: 'MATIC',
    exploler: 'https://snowtrace.io/',
  },
  [SUPPORTED_CHAIN_IDS.Fantom]: {
    name: 'Fantom',
    icon: '/images/chains/fantom.png',
    rpc_url: process.env.NEXT_PUBLIC_FANTOM_RPC_URL,
    nativeCurrency: 'FTM',
    exploler: 'https://ftmscan.com/',
  },
  [SUPPORTED_CHAIN_IDS.Optimism]: {
    name: 'Optimism',
    icon: '/images/chains/optimism.png',
    rpc_url: process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL,
    nativeCurrency: 'OP',
    exploler: 'https://optimistic.etherscan.io/',
  },
  [SUPPORTED_CHAIN_IDS.Arbitrum]: {
    name: 'Arbitrum',
    icon: '/images/chains/arbitrum.png',
    rpc_url: process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL,
    nativeCurrency: 'ETH',
    exploler: 'https://arbiscan.io/',
  },
};

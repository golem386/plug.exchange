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

export const SUPPORTED_CHAIN_IDS = [1, 3, 56, 137, 43114, 250, 10, 42161];

export const CHAINS: ChainInfo = {
  /** mainnet */
  1: {
    name: 'Ethereum',
    icon: '/images/ethereum.png',
    rpc_url: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
    nativeCurrency: 'ETH',
    exploler: 'https://etherscan.io/',
  },
  /** ropsten */
  3: {
    name: 'Ropsten',
    icon: '/images/ethereum.png',
    rpc_url: process.env.NEXT_PUBLIC_ROPSTEN_RPC_URL,
    nativeCurrency: 'Ropsten ETH',
    exploler: 'https://ropsten.etherscan.io/',
    exclude: true,
  },
  /** bsc mainnet */
  56: {
    name: 'BSC',
    icon: '/images/smartchain.png',
    rpc_url: process.env.NEXT_PUBLIC_BSC_RPC_URL,
    nativeCurrency: 'BSC',
    exploler: 'https://bscscan.com/',
  },
  /** polygon mainnet */
  137: {
    name: 'Polygon',
    icon: '/images/polygon.png',
    rpc_url: process.env.NEXT_PUBLIC_POLYGON_RPC_URL,
    nativeCurrency: 'MATIC',
    exploler: 'https://polygonscan.com/',
  },
  /** avalanche mainnet */
  43114: {
    name: 'Avalanche',
    icon: '/images/avalanche.png',
    rpc_url: process.env.NEXT_PUBLIC_AVALANCHE_RPC_URL,
    nativeCurrency: 'MATIC',
    exploler: 'https://snowtrace.io/',
  },
  /** fantom mainnet */
  250: {
    name: 'Fantom',
    icon: '/images/fantom.png',
    rpc_url: process.env.NEXT_PUBLIC_FANTOM_RPC_URL,
    nativeCurrency: 'FTM',
    exploler: 'https://ftmscan.com/',
  },
  /** optimism mainnet */
  10: {
    name: 'Optimism',
    icon: '/images/optimism.png',
    rpc_url: process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL,
    nativeCurrency: 'OP',
    exploler: 'https://optimistic.etherscan.io/',
  },
  /** arbitrum mainnet */
  42161: {
    name: 'Arbitrum',
    icon: '/images/arbitrum.png',
    rpc_url: process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL,
    nativeCurrency: 'ETH',
    exploler: 'https://arbiscan.io/',
  },
};

export const MAINNET = 1;

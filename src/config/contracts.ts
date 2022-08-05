// multi call contracts

interface Multicall {
  [chainId: number]: string;
}

export const multiCall: Multicall = {
  /** Mainnet */
  1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
  /** BSC Mainnet */
  56: '0x41263cba59eb80dc200f3e2544eda4ed6a90e76c',
  /** Polygon Mainnet */
  137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
  /** Avalanche Mainnet */
  43114: '0xed386Fe855C1EFf2f843B910923Dd8846E45C5A4',
};

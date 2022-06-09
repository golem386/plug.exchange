// this is a omponent index file and Provede a Component

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export type SwapProps = {
  btnTitle: String;
};
export type CurrencyInputProps = {
  ETH: string;
  //   userInputTokenBalance: number;
  //   showMaxButton: boolean;
  //   inputValue: number;
  //   inputOnChangeHandler: () => void;
  //   toggleCurrencyModal: () => void;
  //   selectedCurrency: any;
};
export type CurrencyOutputProps = {
  //   inputOnChangeHandler: () => void;
  //   inputValue: number;
  //   selectedCurrency: any;
  //   toggleCurrencyModal: () => void;
};

export type SwapHeaderProps = {
  // transactionSettingHandler: () => void
};

type LiquiditySource = {
  protocol: string;
  amountSavedInUSD: number;
  minimumReceived: number;
  minimumReceivedInUSD: number;
  gasEstimateInETH: number;
  gasEstimateInUSD: number;
};
type RouteWithValidQuotes = {};
type BestRoute = {
  route: RouteWithValidQuotes[];
  protocol: string;
  proportion: string;
};
export type SwapRouterProps = {
  btnTitle: String;
  // liquiditySources: LiquiditySource[];
  // router: BestRoute[];
};
export type TransactionSettingsProps = {
  //   isOpen: boolean;
};
export type SwapTransactionDetailsProps = {
  btnTitle: String;
  // expectedOutput: number;
  // priceImpact: number;
  // minReceived: number;
  // maxSent: number;
  // allowedSlippage: number;
};
export type SwapArrowProps = {
  // switchCurrencyHandler: Function
};

type Protocol = {
  protocolIcon: string;
  protocolUrl: string;
  protocolLabel: string;
};
type Quotes = {
  protocol: Protocol;
  protocolIcon: string;
  protocolUrl: string;
  protocolLabel: string;
  price: number;
  inversePrice: number;
  gasEstimateUSD: number;
};
export type QuoteTableProps = {
  //   allowedSlippage: number;
  //   lastRefresh: number;
  //   userSelectedGasPrice: number;
  //   quotes: Quotes[];
};
export type TransactionCompletedProps = {
  handleClose: any;
  // transactionUrl: string
  // watchAssetHandler: () => void
};
export type TransactionWaitingProps = {
  //   swapCurrency: string;
  //   receivedCurrency: string;
};
type Currency = {};
type ENUM = {};
type SWAP = {};
type ERROR = {};
type WAITING = {};
type COMPLETED = {};
export type SwapConfirmModalProps = {
  handleClose: any;
  //   inputToken: Currency;
  //   outputToken: Currency;
  //   swapAmount: number;
  //   expectedOutput: number;
  //   minReceived: number;
  //   allowedSlippage: number;
  //   gasEstimateInUSD: number;
  //   priceImpact: number;
  //   swapHandler: () => void;
  //   swapTXStatus: ENUM | SWAP | ERROR | WAITING | COMPLETED;
};

export type Currencys = {};

export type SelecttokenProps = {
  select: String;
  //   activeList: Currencys[]
  // currencySearchHandler: () => void
  // isOpen: boolean
  // actionHandler: () => void
  // activeTokenId: string
};

export type CurrencySearchProps = {
  //   searchValue: string | number;
};
type Token = {};

export type ImportTokenProps = {
  handleClose: any;
  // importedToken: Token[]
};
type Setting = {};

export type SettingsProps = {
  //   settings: Setting[];
};
export type SwitchNetworkProps = {
  connetNetworkData: any;
};
export type UserAssetsProps = {
  connetWalletData: any;
};
export type WalletModalProps = {
  open: boolean;
  handleClose: any;
  NetworkData: String;
  connetNetworkFunction: any;
  handleOpenError: any;
  handleCloseError: any;
  ErrorStatus: boolean;
  connetWalletFunction: any;
  WalletData: String;
  Check: Boolean;
  Network: any;
  satCheck: any;
  SelectData: any;
};

import AppBar from './AppBar/AppBar';
import AppFooter from './AppFooter/AppFooter';

export { AppBar, AppFooter };

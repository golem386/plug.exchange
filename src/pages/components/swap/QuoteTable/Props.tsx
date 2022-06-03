// this is a QuoteTable Props file a Provide a Props type 
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
export type ComponentProps = {
//   allowedSlippage: number;
//   lastRefresh: number;
//   userSelectedGasPrice: number;
//   quotes: Quotes[];
};

// this is a SwapRouter Props file and Provide Props type 
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
export type ComponentProps = {
  btnTitle: String;
  // liquiditySources: LiquiditySource[];
  // router: BestRoute[];
};

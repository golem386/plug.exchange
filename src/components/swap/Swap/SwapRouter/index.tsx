// this is a SwapRouter index file and export SwapRouter Component
type RouteWithValidQuotes = {};
type BestRoute = {
  route: RouteWithValidQuotes[];
  protocol: string;
  proportion: string;
};
type LiquiditySource = {
  protocol: string;
  amountSavedInUSD: number;
  minimumReceived: number;
  minimumReceivedInUSD: number;
  gasEstimateInETH: number;
  gasEstimateInUSD: number;
};
export type SwapRouterProps = {
  btnTitle: String;
  // liquiditySources: LiquiditySource[];
  // router: BestRoute[];
};
import SwapRouter from './SwapRouter';

export { SwapRouter };

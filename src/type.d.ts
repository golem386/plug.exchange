interface IArticle {
  model: String;
}
interface ICoin {
  name: String;
  image: String;
}
type ArticleState = {
  model: any;
  CoinDetail: {
    name: String;
    image: String;
  };
  receiveCoinDetail: {
    name: String;
    image: String;
  };
};

type ArticleAction = {
  type: string;
  model: IArticle;
};
type CoinAction = {
  type: string;
  Coin: ICoin;
};
type DispatchType = (
  args: ArticleAction | CoinAction
) => ArticleAction | CoinAction;

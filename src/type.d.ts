interface IArticle {
  modal: String;
}
interface ICoin {
  name: String;
  image: String;
}
interface StatusPayload {
  name: String;
  Modal: boolean;
}

type ArticleState = {
  modal: any;
  Modal: {
    name: '';
    Status: boolean;
  };
  CoinDetail: {
    name: String;
    image: String;
    fullName: String;
  };
  receiveCoinDetail: {
    name: String;
    image: String;
    fullName: String;
  };
  ConnectWallet: {
    name: String;
    image: String;
    Subname: String;
    Price: String;
  };
  ConnectNetwork: {
    name: String;
    image: String;
  };
};

type ArticleAction = {
  type: string;
  modal: IArticle;
};
type CoinAction = {
  type: string;
  Coin: ICoin;
};
type StatusAction = {
  type: string;
  Status: StatusPayload;
};

type DispatchType = (args: ArticleAction | CoinAction) => ArticleAction | CoinAction | StatusAction;

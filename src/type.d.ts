interface IArticle {
  modal: string | boolean;
}
interface ICoin {
  name: String;
  image: String;
}

interface Alert {
  open: Boolean;
  vertical: String;
  horizontal: String;
  type: String;
}

type ArticleState = {
  Alert: Alert;
  modal: string | boolean;
  Search: boolean;
  Menu: boolean | string;
  Modal: boolean;
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
  modal: string | boolean;
};
type CoinAction = {
  type: string;
  Coin: ICoin;
};

type AlertAction = {
  type: string;
  Alert: Alert;
};
type ModalStatus = {
  type: string;
  Data: boolean;
};
type StatusAction = {
  type: string;
  Status: StatusPayload;
};

type OpenModel = { type: String; Data: Boolean };

type DispatchType = (
  args: ArticleAction | CoinAction | AlertAction | OpenModel,
) => ArticleAction | CoinAction | StatusAction | AlertAction | ModalStatus | OpenModel;

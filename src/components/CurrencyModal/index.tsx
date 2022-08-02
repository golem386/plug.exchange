import { styled } from '@material-ui/core';
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { list } from '../../contexts/SelectTokenDATA';
import { useDispatch } from 'react-redux';
//import { onModalOpen, onReceiveCoin, onSelectCoin } from '../../store/Actions';
import { useSelector } from 'react-redux';
import ImportToken from '../ImportToken';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const CurrencyCard = styled('div')({
  borderRadius: '24px',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  width: '100%',
  overflow: 'auto',
});
const SelectTokenTitle = styled('p')({
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: 'Inter',
});
const SelectTokenMain = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 10,
});
const CloseIcon = styled(Button)({
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: 'Inter',
});
const TextInputMain = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F7F7F7',
  borderRadius: '16px',
  paddingLeft: '4%',
  marginLeft: 10,
  marginRight: 10,
});

const TextInputActive = styled('input')({
  marginLeft: 10,
  width: '100%',
  border: 'none',
  height: 52,
  backgroundColor: 'transparent',
  '&:focus-visible': {
    border: 'none',
    outline: 'none',
  },
});
const Count = styled('p')({
  fontWeight: 600,
  fontSize: '16px',
  fontFamily: 'Inter',
});
const ListMain = styled(ListItemButton)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
});
const ListItemTextStyle = styled(ListItemText)({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '16px!important',
});
const Type = styled('span')({
  opacity: 0.5,
  marginRight: 10,
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 16,
});
const ListRow = styled(ListItem)({
  height: 53,
});
const SearchIcon = styled('img')({
  opacity: 0.5,
});
const ImportTokenModal = styled(Modal)({
  border: 'none',
  borderRadius: 20,
});

type SelectType = {
  name: string;
  image: string;
  fullName: string;
};
type SelectTypeState = {
  name: String;
  image: String;
  fullName: String;
};
export type Currencys = {};
export type SelecttokenProps = {
  select: String; // Model Pay and Receive Token Design Change
  activeList: Currencys[] | null;
  currencySearchHandler: () => void | null;
  isOpen: boolean | null;
  actionHandler: () => void | null;
  activeTokenId: string | null;
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;
const CurrencyModal = (props: SelecttokenProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch: AppDispatch = useDispatch();
  const onModal = (modal: string | boolean) => {
    dispatch(null);
  };
  const onSelectIcon = (coin: SelectType) => {
    dispatch(null);
  };
  const onReceiveIcon = (coin: SelectType) => {
    dispatch(null);
  };
  const CoinDetail: SelectTypeState = useSelector((state: ArticleState) => state.CoinDetail);
  const receiveCoinDetail: SelectTypeState = useSelector((state: ArticleState) => state.receiveCoinDetail);
  const isMobile = useMediaQuery('(min-width:660px)');
  return (
    <CurrencyCard style={{ height: isMobile ? '50%' : '540px' }}>
      <SelectTokenMain>
        <SelectTokenTitle>Select a Token</SelectTokenTitle>
        <CloseIcon
          onClick={() => {
            onModal('Swap');
          }}
        >
          <img src="/images/cros.png" alt="Cros" />
        </CloseIcon>
      </SelectTokenMain>
      <TextInputMain>
        <SearchIcon
          src="/images/search.png"
          onClick={
            props.select === 'PayToken'
              ? () => {
                  handleOpen();
                }
              : () => {}
          }
          alt="img"
          loading="lazy"
        />
        <TextInputActive placeholder="Search by Name or Paste Address" />
        <ImportTokenModal
          open={open}
          onClose={() => {
            handleClose();
          }}
        >
          <ImportToken
            handleClose={() => {
              handleClose();
            }}
            importedToken={null}
          />
        </ImportTokenModal>
      </TextInputMain>
      {props.select === 'ReceiveToken' ? (
        <List>
          <ListRow disablePadding>
            <ListItem>
              <ListItemIcon>
                <img src="/images/coin3.png" alt="icon" />
              </ListItemIcon>

              <ListItemTextStyle>
                Tether <Type>(USDT)</Type>
              </ListItemTextStyle>

              <Count>0</Count>
            </ListItem>
          </ListRow>
        </List>
      ) : (
        <List>
          {list.map((val, i) => {
            return (
              <ListRow
                disablePadding
                onClick={() => {
                  onModal('Swap');
                  props.select === 'PayToken'
                    ? onSelectIcon({
                        name: val.type,
                        image: val.icon,
                        fullName: val.name,
                      })
                    : onReceiveIcon({
                        name: val.type,
                        image: val.icon,
                        fullName: val.name,
                      });
                }}
              >
                <ListMain>
                  {/*  */}
                  <ListItemIcon>
                    <img src={val.icon} alt="icon" />
                  </ListItemIcon>

                  <ListItemTextStyle>
                    {val.name} <Type>({val.type})</Type>
                    {props.select === 'PayToken' ? (
                      CoinDetail.name === val.type ? (
                        <img src="/images/right.png" alt="right" />
                      ) : (
                        ''
                      )
                    ) : receiveCoinDetail.name === val.type ? (
                      <img src="/images/right.png" alt="right" />
                    ) : (
                      ''
                    )}
                  </ListItemTextStyle>

                  <Count>{val.count}</Count>
                </ListMain>
              </ListRow>
            );
          })}
        </List>
      )}
    </CurrencyCard>
  );
};

export default CurrencyModal;

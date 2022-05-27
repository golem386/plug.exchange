import { styled } from '@material-ui/core';
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal } from '@mui/material';
import React from 'react';
import Cros from '../../assets/icon/Cros.png';
import Serch from '../../assets/icon/Serch.png';
import right from '../../assets/icon/right.png';
import { list } from '../../contexts/SelectTokenDATA';
import { useDispatch } from 'react-redux';
import { onModelOpen, onReceiveCoin, onSelectCoin } from '../../redux/Actions';
import { useSelector } from 'react-redux';
import ImportToken from '../ImportToken/ImportToken';
import { PropsComponent } from './props';

const MainDiv = styled('div')({
  borderRadius: '24px',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  width: '100%',
});
const Token = styled('p')({
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: 'Inter',
});
const Flex = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 10,
});
const CrosIcon = styled(Button)({
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: 'Inter',
});
const InputIcon = styled('div')({
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
const ListItemTextStyle = styled(ListItemText)({});
const Type = styled('span')({
  opacity: 0.5,
  marginRight: 10,
});
const ListItemMain = styled(ListItem)({
  height: 53,
});
const IconImg = styled('img')({
  opacity: 0.5,
});
const ModalCostom = styled(Modal)({
  border: 'none',
  borderRadius: 20,
});

const Selecttoken = (props: PropsComponent) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch: any = useDispatch();
  const onModel = (model: any) => {
    dispatch(onModelOpen(model));
  };
  const onSelectIcon = (coin: any) => {
    dispatch(onSelectCoin(coin));
  };
  const onReceiveIcon = (coin: any) => {
    dispatch(onReceiveCoin(coin));
  };
  const CoinDetail: any = useSelector((state: ArticleState) => state.CoinDetail);
  const receiveCoinDetail: any = useSelector((state: ArticleState) => state.receiveCoinDetail);
  return (
    <MainDiv>
      <Flex>
        <Token>Select a Token</Token>
        <CrosIcon
          onClick={() => {
            onModel('Swep');
          }}
        >
          <img src={Cros} />
        </CrosIcon>
      </Flex>
      <InputIcon>
        <IconImg
          src={Serch}
          srcSet={Serch}
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
        <ModalCostom
          open={open}
          onClose={() => {
            handleClose();
          }}
        >
          <ImportToken
            handleClose={() => {
              handleClose();
            }}
          />
        </ModalCostom>
      </InputIcon>
      <List>
        {list.map((val, i) => {
          return (
            <ListItemMain
              disablePadding
              onClick={() => {
                onModel('Swep');
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
                  <img src={val.icon} />
                </ListItemIcon>

                <ListItemTextStyle>
                  {val.name} <Type>({val.type})</Type>
                  {props.select === 'PayToken' ? (
                    CoinDetail.name === val.type ? (
                      <img src={right} />
                    ) : (
                      ''
                    )
                  ) : receiveCoinDetail.name === val.type ? (
                    <img src={right} />
                  ) : (
                    ''
                  )}
                </ListItemTextStyle>

                <Count>{val.count}</Count>
              </ListMain>
            </ListItemMain>
          );
        })}
      </List>
    </MainDiv>
  );
};

export default Selecttoken;

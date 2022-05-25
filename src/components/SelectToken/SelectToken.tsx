import { styled } from '@material-ui/core';
import {
  Box,
  Button,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Radio,
  TextField,
  Typography,
} from '@mui/material';
import React, { Component } from 'react';
import Cros from '../../assets/icon/Cros.png';
import Serch from '../../assets/icon/Serch.png';
import right from '../../assets/icon/right.png';
import coin from '../../assets/icon/coin6.png';
import { list } from '../../contexts/SelectTokenDATA';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { onModelOpen, onReceiveCoin, onSelectCoin } from '../../redux/actionCreators';
import { useSelector } from 'react-redux';
import info from '../../assets/icon/info.png';

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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  paddingLeft: 4,
  paddingRight: 4,
  paddingBottom: 4,
  paddingTop: 1,
  height: '80%',
  borderRadius: 2,
  overFlow: 'auto',
};
const TitleView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const Title = styled('p')({
  fontFamily: 'Inter',
  fontSize: '20px',
  fontWeight: 600,
});
const ModalCostom = styled(Modal)({
  border: 'none',
  borderRadius: 20,
});
const UserId = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '5%',
  marginBottom: '4%',
});
const TokenImg = styled('img')({
  height: 36,
  width: 36,
  marginRight: 10,
});
const TokenName = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 16,
});
const TokenCode = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 16,
  color: '#dbdbdb',
});
const TokenCodeKey = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 16,
  color: '#dbdbdb',
});
const Warning = styled('div')({
  backgroundColor: '#f0f0f0',
  padding: 20,
  borderRadius: 20,
  marginTop: '10%',
  marginBottom: 15,
  paddingTop:30,
  paddingBottom:30
});
const Info = styled('img')({
  height: 25,
  width: 25,
  marginRight: 10,
});
const WarningText = styled('span')({
  fontFamily: 'Inter',
  fontSize: 18,
  fontWeight: 900,
  color: 'red',
});
const Red = styled('div')({
  alignItems: 'center',
  display: 'flex',
  marginBottom: 15,
});
const Pre = styled('span')({
  fontFamily: 'Inter',
  fontSize: 14,
  fontWeight: 500,
  color: 'black',
  lineHeight: 1.5,
});
const Parmition = styled('span')({
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: 900,
  color: 'black',
});
const ParmitionDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 10,
  marginBottom: 20,
});
const ConnectButton = styled(Button)({
  width: '100%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'initial',
});
const ConnectButtonDisebal = styled(Button)({
  width: '100%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'initial',
  opacity: 0.3,
});
type PropsComponent = {
  select: String;
};
const Selecttoken = (props: PropsComponent) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Check, satCheck] = React.useState<Boolean>(false);
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
          <Box sx={style}>
            <TitleView>
              <Title>Import a Token</Title>
              <img
                src={Cros}
                onClick={() => {
                  handleClose();
                }}
              />
            </TitleView>
            <UserId>
              <TokenImg src={coin} />
              <TokenName>
                Tether <TokenCode>(USDT)</TokenCode>
              </TokenName>
            </UserId>
            <TokenCodeKey>0x1ce0c2827e2ef14d5c4f29a091d735a204794041</TokenCodeKey>
            <Warning>
              <Red>
                <Info src={info} />
                <WarningText>Trade at your own risk!</WarningText>
              </Red>
              <Pre>
                &nbsp;&nbsp;&nbsp;Anyone can create a token, including creating fake versions of existing tokens that
                claim to represent proects.
              </Pre>
              <br />
              <br />
              <Pre>&nbsp;&nbsp;&nbsp;If you purchase this token, you may not be able to sell it back.</Pre>
            </Warning>
            <ParmitionDiv>
              <FormControlLabel
                control={
                  <Radio
                    onClick={(e: any) => {
                      satCheck(!Check);
                    }}
                    checked={Check ? true : false}
                  />
                }
                label=""
              />
              <Parmition>I understand and want to proceed.</Parmition>
            </ParmitionDiv>
            {Check ? (
              <ConnectButton variant="text" onClick={() => {}}>
                Import Token
              </ConnectButton>
            ) : (
              <ConnectButtonDisebal variant="text">Import Token</ConnectButtonDisebal>
            )}
          </Box>
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

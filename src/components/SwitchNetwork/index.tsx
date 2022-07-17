// this is a SwitchNetwork File and Switch Network
import styled from '@emotion/styled';
import { Button, Menu, MenuItem, useMediaQuery } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import DownIconWhite from '../../assets/icon/DownIconWhite.png';
import right from '../../assets/icon/right.png';
import { DropDownData } from '../../contexts/ConnectWalletDATA';

const CustomButtonActiveCoin = styled(Button)({
  borderRadius: 16,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  padding: '0px 15px',
  fontSize: '16px',
  fontWeight: '600',
  color: '#FFFFFF',
  fontStyle: 'Inter',
  textTransform: 'initial',
  marginLeft: '1%',
  marginRight: '1%',
  height: 52,
  width: '100%',
});
const CustomButtonActiveCoin2 = styled(Button)({
  background: "linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)",
  height: 36,
  paddingLeft: '10%',
  paddingRight: '7%',
  paddingTop: '5%',
  paddingBottom: '5%',
  border: 'none',
  borderRadius: '100px',
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: '16px',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  textTransform: 'initial'
});
const ImageIcon = styled('img')({
  height: 35,
  width: 35,
  marginRight: 10,
});
const ImageIcon2 = styled('img')({
  height: '20px',
  width: '20px',
  marginRight: 10
});

const TitleIcon = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
});
const DropDownTitleIcon = styled('span')({
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  opacity: 0.65
});
const DropDownTitleIcon2 = styled('span')({
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: '500',
  opacity: 0.4
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});
const CustomMenu = styled(Menu)({
  marginTop: '5%',
});
const CustomMenu2 = styled("div")({
  position: 'fixed',
  top: '25%',
  borderRadius: 20,
  backgroundColor: 'white',
});
const OverLay = styled(Menu)({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: 2,
  cursor: "pointer",
});
const CustomMenuItem = styled(MenuItem)({
  paddingTop: 7,
  paddingBottom: 7,
  paddingRight: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});
const CustomMenuItem4 = styled(MenuItem)({
  paddingTop: 7,
  paddingBottom: 7,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '340px'
});
const CustomMenuItem3 = styled(MenuItem)({
  paddingTop: 7,
  paddingBottom: 7,
  paddingRight: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: 'white'
  }
});

const CustomMenuItem2 = styled('div')({
  paddingRight: '70px',
  display: 'flex',
  alignItems: 'center',
});
const ImageIconDropDown = styled('img')({
  height: '36px',
  width: '36px',
  paddingRight: '10px',
});
const Right = styled('img')({
  height: '8px',
  width: '11px',
});



const SwitchNetwork = () => {
  const CoinNetwork: any = useSelector((state: ArticleState) => state.ConnectNetwork);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const matches = useMediaQuery('(min-width:660px)');
  const openmenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemenu = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ position: 'relative' }}>
      {
        matches ? <CustomButtonActiveCoin
          onClick={handleClick}
        >
          <ImageIcon src={CoinNetwork.coin} alt="Icon" />
          <TitleIcon>{CoinNetwork.name}</TitleIcon>
          <CoinDropIcon src={DownIconWhite} alt="Download" />
        </CustomButtonActiveCoin> : <CustomButtonActiveCoin2
          onClick={handleClick}
        >
          <ImageIcon2 src={CoinNetwork.coin} alt="Icon" />
          <TitleIcon>{CoinNetwork.name}</TitleIcon>
          <CoinDropIcon src={DownIconWhite} alt="Download" />
        </CustomButtonActiveCoin2>
      }
      {
        matches ? <CustomMenu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={openmenu}
          onClose={handleClosemenu}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <CustomMenuItem3>
            <DropDownTitleIcon2>Select a Network</DropDownTitleIcon2>
          </CustomMenuItem3>
          {DropDownData.map((val, i) => {
            return (
              <CustomMenuItem>
                <CustomMenuItem2>
                  <ImageIconDropDown src={val.coin} alt="Icon" />
                  <DropDownTitleIcon>{val.name}</DropDownTitleIcon>
                </CustomMenuItem2>
                {
                  val.name === CoinNetwork.name ? <Right src={right} /> : null
                }
              </CustomMenuItem>
            );
          })}
        </CustomMenu> : <OverLay
          anchorEl={anchorEl}
          open={openmenu}
          onClose={handleClosemenu}
        >
          <CustomMenu2>
            <CustomMenuItem3>
              <DropDownTitleIcon2>Select a Network</DropDownTitleIcon2>
            </CustomMenuItem3>
            {DropDownData.map((val, i) => {
              return (
                <CustomMenuItem4>
                  <CustomMenuItem2>
                    <ImageIconDropDown src={val.coin} alt="Icon" />
                    <DropDownTitleIcon>{val.name}</DropDownTitleIcon>
                  </CustomMenuItem2>
                  {
                    val.name === CoinNetwork.name ? <Right src={right} /> : null
                  }
                </CustomMenuItem4>
              );
            })}
          </CustomMenu2>
        </OverLay>
      }

    </div>
  );
};

export default SwitchNetwork;

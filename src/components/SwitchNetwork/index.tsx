// this is a SwitchNetwork File and Switch Network
import styled from '@emotion/styled';
import { Button, Menu, MenuItem } from '@mui/material';
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
const ImageIcon = styled('img')({
  height: 35,
  width: 35,
  marginRight: 10,
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
  opacity:0.65
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
const CustomMenuItem = styled(MenuItem)({
  paddingTop: 7,
  paddingBottom: 7,
  paddingRight: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});
const CustomMenuItem3 = styled(MenuItem)({
  paddingTop: 7,
  paddingBottom: 7,
  paddingRight: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:hover':{
    backgroundColor:'white'
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
  const openmenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemenu = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <CustomButtonActiveCoin
        onClick={handleClick}
      >
        <ImageIcon src={CoinNetwork.coin} alt="Icon" />
        <TitleIcon>{CoinNetwork.name}</TitleIcon>
        <CoinDropIcon src={DownIconWhite} alt="Download" />
      </CustomButtonActiveCoin>
      <CustomMenu
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
              <Right src={right} />
            </CustomMenuItem>
          );
        })}
      </CustomMenu>
    </div>
  );
};

export default SwitchNetwork;

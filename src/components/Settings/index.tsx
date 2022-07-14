// this file Provide Setting menu
import styled from '@emotion/styled';
import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import setting from '../../assets/icon/setting.png';
import About from '../../assets/icon/About.svg';
import Question from '../../assets/icon/Question.svg';
import request from '../../assets/icon/Request.svg';
import Language from '../../assets/icon/Language.svg';
import Dark from '../../assets/icon/Dark.svg';
import { useSelector } from 'react-redux';

const DropDownTitleIcon = styled('span')({
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  color:'blak'
});
const CustomMenu = styled(Menu)({
  marginTop: '5%',
});
const CustomMenuItem = styled(MenuItem)({
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: '50px',
  opacity: 0.65,
  '&:hover': {
    background: "linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)",
    color: "transparent",
    backgroundClip: "text",
    opacity: 1,
  },
});
const ImageIconDropDown = styled('img')({
  height: '25px',
  width: '25px',
  paddingRight: '20px',
  opacity: 0.6,
});

const SettingButton = styled('button')({
  borderRadius: 100,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
  height: 52,
  width: 52,
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const SettingButton2 = styled('button')({
  borderRadius: 100,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
  height: 52,
  width: 52,
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '30%'
});
type Setting = {
  name: string
}
type ConnectWalletType = {
  name: String;
  image: String;
  Subname: String;
  Price: String;
};
type ConnectNetworkType = {
  name: String;
  image: String;
};
type SettingsProps = {
  settings: Setting[];
};
const Settings = (props: SettingsProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openmenu = Boolean(anchorEl);
  const CoinDetail: ConnectWalletType = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: ConnectNetworkType = useSelector((state: ArticleState) => state.ConnectNetwork);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemenu = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {
        CoinDetail.name !== "" ? <SettingButton2
          onClick={handleClick}
        >
          <img src={setting} alt="Setting" />
        </SettingButton2> : <SettingButton
          onClick={handleClick}
        >
          <img src={setting} alt="Setting" />
        </SettingButton>
      }
      <CustomMenu
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
        <CustomMenuItem>
          <ImageIconDropDown src={About} alt="About" />
          <DropDownTitleIcon>{props.settings[0].name}</DropDownTitleIcon>
        </CustomMenuItem>
        <CustomMenuItem>
          <ImageIconDropDown src={Question} alt="icon" />
          <DropDownTitleIcon>{props.settings[1].name}</DropDownTitleIcon>
        </CustomMenuItem>
        <CustomMenuItem>
          <ImageIconDropDown src={request} alt="Request" />
          <DropDownTitleIcon>{props.settings[2].name}</DropDownTitleIcon>
        </CustomMenuItem>
        <CustomMenuItem>
          <ImageIconDropDown src={Language} alt="icon" />
          <DropDownTitleIcon>{props.settings[3].name}</DropDownTitleIcon>
        </CustomMenuItem>
        <CustomMenuItem>
          <ImageIconDropDown src={Dark} alt="Dark" />
          <DropDownTitleIcon>{props.settings[4].name}</DropDownTitleIcon>
        </CustomMenuItem>
      </CustomMenu>
    </div>
  );
};

export default Settings;

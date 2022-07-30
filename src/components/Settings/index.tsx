import styled from '@emotion/styled';
import { MenuItem, useMediaQuery } from '@mui/material';
import React from 'react';

const DropDownTitleIcon = styled('span')({
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  color: 'blak',
});
const CustomMenu = styled('div')({
  position: 'absolute',
  top: '12%',
  left: '82%',
  borderRadius: 20,
  backgroundColor: 'white',
  width: '200px',
  padding: 5,
  boxShadow: '2px 2px 14px 0px #9a9a9a',
  '@media (max-width: 660px)': {
    position: 'fixed',
    top: '30%',
    left: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    width: '95%',
    padding: 5,
  },
});
const OverLay = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  right: 0,
  bottom: '0%',
  backgroundColor: 'transparent',
  zIndex: 2,
  cursor: 'pointer',
  '@media (max-width: 660px)': {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2,
    cursor: 'pointer',
  },
});
const CustomMenuItem = styled(MenuItem)({
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: '50px',
  opacity: 0.65,
  '&:hover': {
    background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
    color: 'transparent',
    backgroundClip: 'text',
    opacity: 1,
  },
});
const ImageIconDropDown = styled('img')({
  height: '25px',
  width: '25px',
  paddingRight: '20px',
  opacity: 0.6,
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
  marginLeft: '30%',
  '@media (max-width: 660px)': {
    borderRadius: 100,
    backgroundColor: 'transparent',
    padding: '20px 0px',
    color: '#000000',
    opacity: '0.65',
    height: 52,
    width: 52,
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5%',
  },
});
const NavImg = styled('img')({
  '@media (max-width: 660px)': {
    height: '36px',
    width: '36px',
    marginLeft: 10,
    marginRight: 10,
  },
});
type Setting = {
  name: string;
};
type SettingsProps = {
  settings: Setting[];
};
const Settings = (props: SettingsProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openmenu = Boolean(anchorEl);
  const matches = useMediaQuery('(min-width:660px)');
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemenu = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <SettingButton2 onClick={handleClick}>
        <NavImg src={matches ? '/images/setting.png' : '/images/mSetting.png'} onClick={handleClick} />
      </SettingButton2>
      <OverLay style={{ display: openmenu ? 'block' : 'none' }} onClick={handleClosemenu}>
        <CustomMenu>
          <CustomMenuItem>
            <ImageIconDropDown src="/images/About.svg" alt="About" />
            <DropDownTitleIcon>{props.settings[0].name}</DropDownTitleIcon>
          </CustomMenuItem>
          <CustomMenuItem>
            <ImageIconDropDown src="/images/Question.svg" alt="icon" />
            <DropDownTitleIcon>{props.settings[1].name}</DropDownTitleIcon>
          </CustomMenuItem>
          <CustomMenuItem>
            <ImageIconDropDown src="/images/request.svg" alt="Request" />
            <DropDownTitleIcon>{props.settings[2].name}</DropDownTitleIcon>
          </CustomMenuItem>
          <CustomMenuItem>
            <ImageIconDropDown src="/images/Language.svg" alt="icon" />
            <DropDownTitleIcon>{props.settings[3].name}</DropDownTitleIcon>
          </CustomMenuItem>
          <CustomMenuItem>
            <ImageIconDropDown src="/images/Dark.svg" alt="Dark" />
            <DropDownTitleIcon>{props.settings[4].name}</DropDownTitleIcon>
          </CustomMenuItem>
        </CustomMenu>
      </OverLay>
    </div>
  );
};

export default Settings;

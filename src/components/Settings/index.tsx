import { styled } from '@mui/system';
import { MenuItem, useMediaQuery } from '@mui/material';
import React from 'react';

const DropDownTitleIcon = styled('span')({
  fontSize: '16px',
  fontWeight: '600',
  color: 'blak',
});
const SettingMenu = styled('div')({
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
const SettingMenuItem = styled(MenuItem)((props:string | number | boolean) =>({
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: '50px',
  opacity: 0.65,
  '&:hover': {
    background: props.theme.palette.color.active,
    color: 'transparent',
    backgroundClip: 'text',
    opacity: 1,
  },
}));
const ImageIconDropDown = styled('img')({
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
  marginLeft: '30%',
  cursor:'pointer',
  '@media (max-width: 660px)': {
    backgroundColor: 'transparent',
    marginLeft: '5%',
  },
});
const SettingIcon = styled('img')({
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
  const isMobile = useMediaQuery('(min-width:660px)');
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemenu = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <SettingButton onClick={handleClick}>
        <SettingIcon src={isMobile ? '/images/setting.png' : '/images/mSetting.png'} onClick={handleClick} />
      </SettingButton>
      <OverLay style={{ display: openmenu ? 'block' : 'none' }} onClick={handleClosemenu}>
        <SettingMenu>
          <SettingMenuItem>
            <ImageIconDropDown src="/images/About.svg" alt="About" />
            <DropDownTitleIcon>{props.settings[0].name}</DropDownTitleIcon>
          </SettingMenuItem>
          <SettingMenuItem>
            <ImageIconDropDown src="/images/puestion.svg" alt="icon" />
            <DropDownTitleIcon>{props.settings[1].name}</DropDownTitleIcon>
          </SettingMenuItem>
          <SettingMenuItem>
            <ImageIconDropDown src="/images/request.svg" alt="Request" />
            <DropDownTitleIcon>{props.settings[2].name}</DropDownTitleIcon>
          </SettingMenuItem>
          <SettingMenuItem>
            <ImageIconDropDown src="/images/language.svg" alt="icon" />
            <DropDownTitleIcon>{props.settings[3].name}</DropDownTitleIcon>
          </SettingMenuItem>
          <SettingMenuItem>
            <ImageIconDropDown src="/images/dark.svg" alt="Dark" />
            <DropDownTitleIcon>{props.settings[4].name}</DropDownTitleIcon>
          </SettingMenuItem>
        </SettingMenu>
      </OverLay>
    </div>
  );
};

export default Settings;

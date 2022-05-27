import styled from '@emotion/styled';
import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import setting from '../../assets/icon/setting.png';
import About from '../../assets/icon/About.svg';
import Question from '../../assets/icon/Question.svg';
import request from '../../assets/icon/Request.svg';
import Language from '../../assets/icon/Language.svg';
import Dark from '../../assets/icon/Dark.svg';

const DropDownTitleIcon = styled('span')({
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
});
const CostomMenu = styled(Menu)({
  marginTop: '5%',
});
const CostomMenuItem = styled(MenuItem)({
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: '50px',
  '&:hover': {
    color: '#DC7FB6',
  },
});
const ImageIconDropDown = styled('img')({
  height: '25px',
  width: '25px',
  paddingRight: '20px',
  opacity: 0.6,
});

const SettingButton = styled(Button)({
  borderRadius: 100,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
  height: 60,
});

const Settings = () => {
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
      <SettingButton
        id="demo-positioned-button"
        aria-controls={openmenu ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openmenu ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src={setting} />
      </SettingButton>
      <CostomMenu
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
        <CostomMenuItem>
          <ImageIconDropDown src={About} />
          <DropDownTitleIcon>About</DropDownTitleIcon>
        </CostomMenuItem>
        <CostomMenuItem>
          <ImageIconDropDown src={Question} />
          <DropDownTitleIcon>Help Center</DropDownTitleIcon>
        </CostomMenuItem>
        <CostomMenuItem>
          <ImageIconDropDown src={request} />
          <DropDownTitleIcon>Request Features</DropDownTitleIcon>
        </CostomMenuItem>
        <CostomMenuItem>
          <ImageIconDropDown src={Language} />
          <DropDownTitleIcon>Language</DropDownTitleIcon>
        </CostomMenuItem>
        <CostomMenuItem>
          <ImageIconDropDown src={Dark} />
          <DropDownTitleIcon>Dark Mode</DropDownTitleIcon>
        </CostomMenuItem>
      </CostomMenu>
    </div>
  );
};

export default Settings;

import { styled } from '@mui/system';
import { Button, MenuItem } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { DropDownData } from '../../contexts/ConnectWalletDATA';

const ButtonActive = styled(Button)((props:string | number | boolean) =>({
  borderRadius: 16,
  background: props.theme.palette.color.active,
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
  '@media (max-width: 660px)': {
    background: props.theme.palette.color.active,
    height: 36,
    paddingLeft: '10%',
    paddingRight: '7%',
    paddingTop: '5%',
    paddingBottom: '5%',
    border: 'none',
    borderRadius: '100px',
    fontWeight: '500',
    fontSize: '16px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'initial',
    width: '188px',
  },
}));
const ImageIcon = styled('img')({
  height: 35,
  width: 35,
  marginRight: 10,
  '@media (max-width: 660px)': {
    height: '20px',
    width: '20px',
    marginRight: 10,
  },
});
const Title = styled('p')({
  fontSize: '15px',
  fontWeight: '600',
});
const DropDownTitleIcon = styled('span')({
  fontSize: '16px',
  fontWeight: '600',
  opacity: 0.65,
});
const SelectNetwork = styled('span')({
  fontSize: '14px',
  fontWeight: '500',
  opacity: 0.4,
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});
const CustomMenu = styled('div')({
  position: 'absolute',
  top: '110%',
  left: '0%',
  borderRadius: 20,
  backgroundColor: 'white',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  '@media (max-width: 660px)': {
    position: 'fixed',
    top: '25%',
    borderRadius: 20,
    backgroundColor: 'white',
    marginLeft: '2%',
    width: '96%',
  },
});
const OverLay = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'transparent',
  zIndex: 2,
  cursor: 'pointer',
  paddingLeft: '6%',
  '@media (max-width: 660px)': {
    position: 'fixed',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingLeft: '6%',
  },
});
const CustomMenuItem = styled(MenuItem)({
  paddingTop: 7,
  paddingBottom: 7,
  paddingRight: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const CustomMenuItem3 = styled(MenuItem)({
  paddingTop: 7,
  paddingBottom: 7,
  paddingRight: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: 'white',
  },
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
    <div style={{ position: 'relative' }}>
      <ButtonActive onClick={handleClick}>
        <ImageIcon src={CoinNetwork?.coin} alt="Icon" />
        <Title>{CoinNetwork?.name}</Title>
        <CoinDropIcon src="/images/downIconWhite.png" alt="Download" />
      </ButtonActive>
      <OverLay style={{ display: openmenu ? 'block' : 'none' }} onClick={handleClosemenu}>
        <CustomMenu>
          <CustomMenuItem3>
            <SelectNetwork>Select a Network</SelectNetwork>
          </CustomMenuItem3>
          {DropDownData.map((val, i) => {
            return (
              <CustomMenuItem>
                <CustomMenuItem2>
                  <ImageIconDropDown src={val.coin} alt="Icon" />
                  <DropDownTitleIcon>{val.name}</DropDownTitleIcon>
                </CustomMenuItem2>
                {val.name === CoinNetwork?.name ? <Right src="/images/right.png" /> : null}
              </CustomMenuItem>
            );
          })}
        </CustomMenu>
      </OverLay>
    </div>
  );
};

export default SwitchNetwork;

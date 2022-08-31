import styled from '@emotion/styled';
import { Button, useMediaQuery } from '@mui/material';

const Footer = styled('div')({
  '@media (min-width: 660px)': {
    display: 'flex',
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const IconButtom = styled(Button)((props:string | number | boolean) =>({
  borderRadius: 100,
  margin: 10,
  backgroundColor: props.theme.palette.color.lightText,
  padding: '20px 0px',
  color: props.theme.palette.color.dark,
  opacity: '0.65',
  '&:hover': {
    borderRadius: 100,
    margin: 10,
    background: props.theme.palette.color.active,
    padding: '20px 0px',
    color: props.theme.palette.color.dark,
    opacity: '1',
  },
}))
const MenuItem = styled(Button)((props:string | number | boolean)=>({
  margin: 10,
  backgroundColor: 'transparent',
  padding: '20px 0px',
  color: props.theme.palette.color.dark,
  opacity: '0.65',
  '&:hover': {
    backgroundColor:props.theme.palette.color.lightText
  }
}));
const IconSection = styled('div')({
  '@media (max-width: 660px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '7%',
  },
});
const FooterMenu = styled('div')({
  '@media (max-width: 660px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

type AppfooterProps = {
  type:string
}
const AppFooter = (props:AppfooterProps) => {
  const isMobile = useMediaQuery('(min-width:660px)');
  return (
    ((!isMobile && props.type === 'Mobile') ||
    (props.type === 'Window' && isMobile )) && 
      <Footer>
        <IconSection>
          <IconButtom>
            <img src="/images/teligram.png" alt="teligram" />
          </IconButtom>
          <IconButtom>
            <img src="/images/social.png" alt="social" />
          </IconButtom>
          <IconButtom>
            <img src="/images/twiter.png" alt="twiter" />
          </IconButtom>
          <IconButtom>
            <img src="/images/discord.png" alt="discord" />
          </IconButtom>
        </IconSection>
        <FooterMenu>
          <MenuItem>FAQs</MenuItem>
          <MenuItem>Docs</MenuItem>
          <MenuItem>Careers</MenuItem>
        </FooterMenu>
      </Footer>
    
  );
};

export default AppFooter;

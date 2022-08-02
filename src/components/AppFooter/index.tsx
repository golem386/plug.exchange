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
const IconButtom = styled(Button)({
  borderRadius: 100,
  margin: 10,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
  '&:hover': {
    borderRadius: 100,
    margin: 10,
    background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
    padding: '20px 0px',
    color: '#000000',
    opacity: '1',
  },
});
const MenuItem = styled(Button)({
  margin: 10,
  backgroundColor: 'transparent',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
});
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

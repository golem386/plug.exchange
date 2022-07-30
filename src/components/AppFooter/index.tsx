import styled from '@emotion/styled';
import { Button, useMediaQuery } from '@mui/material';

const MainComponent = styled('div')({
  '@media (min-width: 660px)': {
    display: 'flex',
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
const CustomButtom = styled(Button)({
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
const NameButton = styled(Button)({
  margin: 10,
  backgroundColor: 'transparent',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
});
const Div = styled('div')({
  '@media (max-width: 660px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '7%',
  },
});
const Div2 = styled('div')({
  '@media (max-width: 660px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const AppFooter = () => {
  const matches = useMediaQuery('(min-width:660px)');
  return (
    <>
      <MainComponent>
        <Div>
          <CustomButtom>
            <img src="/images/teligram.png" alt="teligram" />
          </CustomButtom>
          <CustomButtom>
            <img src="/images/social.png" alt="social" />
          </CustomButtom>
          <CustomButtom>
            <img src="/images/twiter.png" alt="twiter" />
          </CustomButtom>
          <CustomButtom>
            <img src="/images/discord.png" alt="discord" />
          </CustomButtom>
        </Div>
        <Div2>
          <NameButton>FAQs</NameButton>
          <NameButton>Docs</NameButton>
          <NameButton>Careers</NameButton>
        </Div2>
      </MainComponent>
    </>
  );
};

export default AppFooter;

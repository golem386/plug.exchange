import { Button, styled } from '@mui/material';
import { ThemeProps } from 'theme';

const ReferralModalMain = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const ShereImage = styled(Button)({
  backgroundColor: '#f2f2f2',
  paddingLeft: 7,
  paddingRight: 7,
  paddingBottom: 14,
  paddingTop: 14,
  borderRadius: 16,
});
const PreText = styled('p')({
  marginLeft: 10,
  fontWeight: '500',
});
const ReadMore = styled('span')((props: { theme?: ThemeProps }) => ({
  background: props.theme && props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
  marginLeft: 2,
  cursor: 'pointer',
}));
const ReferralModal = () => {
  return (
    <ReferralModalMain>
      <ShereImage>
        <img src="/images/shereLogo.png" alt="Shere" />
      </ShereImage>
      <PreText>
        Connect wallet to generate referral link.How it works?
        <ReadMore>Read More</ReadMore>
      </PreText>
    </ReferralModalMain>
  );
};

export default ReferralModal;

import { Button, styled } from '@mui/material';

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
  fontFamily: 'inter',
  fontWeight: '500',
  fontSize: 16,
});
const ReadMore = styled('span')({
  color: '#BB36FF',
  marginLeft: 2,
  cursor:'pointer'
});
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

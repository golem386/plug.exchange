import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Link from 'next/link';

const Div = styled('div')({
  marginLeft: '5%',
  marginTop: '6%',
  marginBottom: '6%',
});
const Img = styled('img')({
  width: '483px',
});
const Form = styled('div')({
  borderRadius: '24px',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#FFFFFF',
  width: 460,
  padding: 40,
  height: '60%',
  marginTop: 20,
});
const Error = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '72px',
});
const Pre = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '400',
  fontSize: '18px',
});
const CustomButtonActive = styled(Link)({
  borderRadius: 16,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  fontSize: '16px',
  fontWeight: '600',
  color: '#FFFFFF',
  fontStyle: 'Inter',
  textTransform: 'initial',
  height: 52,
  width: '25%',
  marginTop: 20,
});

const NotFound = () => {
  return (
    <Div>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Img src="/NotFound.png" />
        </Grid>
        <Grid item xs={6}>
          <Form>
            <Error>404</Error>
            <br />
            <Pre>The page you’re looking for couldn’t be found.</Pre>
            <CustomButtonActive href="/">Go Back</CustomButtonActive>
          </Form>
        </Grid>
      </Grid>
    </Div>
  );
};

export default NotFound;

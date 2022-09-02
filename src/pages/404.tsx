import { styled } from '@mui/system';
import { Grid } from '@mui/material';
import Link from 'next/link';
import { ThemeProps } from 'src/theme';

const Div = styled('div')({
  marginLeft: '5%',
  marginTop: '6%',
  marginBottom: '6%',
  minHeight:'400px'
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
  paddingBottom:'40%'
});
const Error = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '72px',
});
const Pre = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '400',
  fontSize: '16px',
});
const CustomButtonActive = styled('a')((props: { theme: ThemeProps; }) => ({
  borderRadius: 16,
  background: props.theme.palette.color.active,
  fontSize: '16px',
  fontWeight: '600',
  color: '#FFFFFF',
  fontStyle: 'Inter',
  textTransform: 'initial',
  height: 52,
  width: '25%',
  marginTop: 20,
  padding: '15px 15px',
}));

const NotFound = () => {
  return (
    <Div>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Img src="/images/notFound.png" />
        </Grid>
        <Grid item xs={6}>
          <Form>
            <Error>404</Error>
            <br />
            <Pre>The page you’re looking for couldn’t be found.</Pre><br/>
            <br/>
            <br/>
            <CustomButtonActive href="/">Go Back</CustomButtonActive>
          </Form>
        </Grid>
      </Grid>
    </Div>
  );
};

export default NotFound;

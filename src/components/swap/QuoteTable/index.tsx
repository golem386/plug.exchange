// this is a QuoteTable file and Provide a table List and Data
import styled from '@emotion/styled';
import { Button, Grid, List } from '@mui/material';
import React, { useState } from 'react';
import { data } from '../../../contexts/QuoteTableDATA';

const QuoteTableblur = styled('div')({
  borderRadius: 24,
  filter: 'blur(5px)',
});
const CardCustom = styled('div')({
  borderRadius: 24,
});

const PriceDetail = styled('div')({
  backgroundColor: '#f0f0f0',
  display: 'flex',
  alignItems: 'center',
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  justifyContent: 'space-between',
  paddingLeft: '2%',
  paddingRight: '2%',
  marginTop:'2%',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: '#e0e0e0',
  // width: '96%',
});
const MaxPriceDetail = styled('p')({
  color: 'rgba(0, 0, 0, 0.4)',
  fontWeight: '600',
  marginTop:20,
  display:'flex'
});
const ImageSpan = styled('span')({
  color: 'black',
  paddingLeft: 5,
});
const MainSpan = styled('span')((props:any) =>({
  background: props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
  cursor: 'pointer',
  display:'flex'
}));
const DataUpdat = styled('div')({
  backgroundColor: '#f0f0f0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '2%',
  paddingRight: '2%',
  height: 70,
  // width:'96%'
});
const UpdateTitle = styled('p')({
  color: '#FF0000',
  fontWeight: '500',
  fontSize: '16px',
});
const RefresBtn = styled(Button)({
  backgroundColor: 'white',
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  color: '#595959',
  borderRadius: 100,
  fontWeight: '600',
  fontSize: '16px',
  width: '93px',
  height: '36px',
  textTransform: 'inherit',
  '&:hover': {
    backgroundColor: 'white',
  },
});
const ListItem = styled('div')({
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#f0f0f0',
  padding: 10,
  // width: '97%',
  '&:hover': {
    backgroundColor: '#f2f2f2',
  },
});
const CoinHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '7%',
});
const CoinIcon = styled('img')({
  paddingRight: 10,
});
const ShereIcon = styled('img')({
  paddingLeft: 10,
  height: '18px',
  width: '18px',
  opacity: '0.4',
  cursor: 'pointer'
});
const Text = styled('p')({
  textAlign: 'center',
  opacity: 0.4,
  fontSize: '16px',
  fontWeight: '500',
});
const TextDown = styled('p')({
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: '600',
});
const ChangeText = styled('span')((props:any) =>({
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: '600',
  background: props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
}));
const ShortImage = styled('img')({
  paddingLeft: 3,
  height: 18,
  width: 19,
  cursor: 'pointer'
});
const ShowMore = styled('p')((props: any) => ({
  textAlign: 'center',
  background: props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
}));
const DownArrowImg = styled('img')({
  height: 11,
  paddingLeft: 10,
});
const CoinTitle = styled('p')({
  fontWeight: 600,
  fontSize: '16px',
});
const DownArrowImgTop = styled('img')({
  height: 11,
  paddingLeft: 10,
});
const MainTitle = styled('p')({
  fontWeight: '600',
  fontSize: '16px',
});

const QuoteTablesMain = styled('div')({
  display: 'block',
  '@media (max-width: 660px)': {
    display: 'none',
  },
});

type Quotes = {};

type QuoteTableProps = {
  allowedSlippage: number | null;
  lastRefresh: number | null;
  userSelectedGasPrice: number | null;
  quotes: Quotes[] | null;
};
const QuoteTables = (props: QuoteTableProps) => {
  const [loardData, setLoardData] = useState<number>(1);
  const [blur, setBlur] = useState<Boolean>(true);
  return (
    <QuoteTablesMain>
      <>
        {blur ? (
          <QuoteTableblur>
            <PriceDetail>
              <MaxPriceDetail>
                Max Price Slippage:{' '}
                <MainSpan>
                  1%
                  <ImageSpan>
                    <img src="/images/DownArrow.png" alt="DownArrow" />
                  </ImageSpan>
                </MainSpan>
              </MaxPriceDetail>
              <MaxPriceDetail>
                Gas Price:{' '}
                <MainSpan>
                  206 GWEI
                  <ImageSpan>
                    <img src="/images/DownArrow.png" alt="DownArrow" />
                  </ImageSpan>
                </MainSpan>
              </MaxPriceDetail>
            </PriceDetail>
            <DataUpdat>
              <UpdateTitle>Data updated 18m ago. Please refresh:</UpdateTitle>
              <RefresBtn>Refresh</RefresBtn>
            </DataUpdat>
            <List aria-label="main mailbox folders">
              {data.map((val, i) => {
                return (
                  <>
                    {loardData > i ? (
                      <ListItem>
                        <CoinHeader>
                          <CoinIcon src={val.icon} alt="icon" />
                          <CoinTitle>{val.name}</CoinTitle>
                          <ShereIcon src="/images/shere.png" alt="icon" />
                        </CoinHeader>
                        <Grid container spacing={0}>
                          <Grid item xs={4}>
                            <Text>{val.get}</Text>
                            <TextDown>
                              {val.proce} <ChangeText>{val.pr}</ChangeText>
                            </TextDown>
                          </Grid>
                          <Grid item xs={4}>
                            <Text>
                              {val.shortname} <ShortImage src="/images/short.png" alt="icon" />
                            </Text>
                            <TextDown>{val.shortPrice}</TextDown>
                          </Grid>
                          <Grid item xs={4}>
                            <Text>{val.gasfee}</Text>
                            <TextDown>{val.gesprice}</TextDown>
                          </Grid>
                        </Grid>
                      </ListItem>
                    ) : (
                      ''
                    )}
                  </>
                );
              })}
            </List>
          </QuoteTableblur>
        ) : (
          <CardCustom>
            <PriceDetail>
              <MaxPriceDetail>
                Max Price Slippage:{' '}
                <MainSpan>
                  1%
                  <ImageSpan>
                    <img src="/images/DownArrow.png" alt="DownArrow" />
                  </ImageSpan>
                </MainSpan>
              </MaxPriceDetail>
              <MaxPriceDetail>
                Gas Price:{' '}
                <MainSpan>
                  206 GWEI
                  <ImageSpan>
                    <img src="/images/DownArrow.png" alt="DownArrow" />
                  </ImageSpan>
                </MainSpan>
              </MaxPriceDetail>
            </PriceDetail>
            <DataUpdat>
              <UpdateTitle>Data updated 18m ago. Please refresh:</UpdateTitle>
              <RefresBtn>Refresh</RefresBtn>
            </DataUpdat>
            <List aria-label="main mailbox folders">
              {data.map((val, i) => {
                return (
                  <>
                    {loardData > i ? (
                      <ListItem>
                        <CoinHeader>
                          <CoinIcon src={val.icon} alt="icon" />
                          <CoinTitle>{val.name}</CoinTitle>
                          <ShereIcon src="/images/shere.png" alt="shere" />
                        </CoinHeader>
                        <Grid container spacing={0}>
                          <Grid item xs={4}>
                            <Text>{val.get}</Text>
                            <TextDown>
                              {val.proce} <ChangeText>{val.pr}</ChangeText>
                            </TextDown>
                          </Grid>
                          <Grid item xs={4}>
                            <Text>
                              {val.shortname} <ShortImage src="/images/short.png" alt="Short-Icon" />
                            </Text>
                            <TextDown>{val.shortPrice}</TextDown>
                          </Grid>
                          <Grid item xs={4}>
                            <Text>{val.gasfee}</Text>
                            <TextDown>{val.gesprice}</TextDown>
                          </Grid>
                        </Grid>
                      </ListItem>
                    ) : (
                      ''
                    )}
                  </>
                );
              })}
            </List>
          </CardCustom>
        )}
        <ShowMore
          onClick={data.length === loardData || data.length + 1 === loardData ? () => {
            setLoardData(1);
            setBlur(true);
          } : () => {
            setLoardData(data.length > loardData ? loardData + 2 : loardData);
            setBlur(false);
          }}
        >
          {data.length === loardData || data.length + 1 === loardData ? "Hide Details" : "Show More Details"}
          <DownArrowImgTop src={data.length === loardData || data.length + 1 === loardData ? "/images/hideDetail.png" : '/images/showMore.png'} alt="Hide" />
        </ShowMore>
        {/* ) : (
          <ShowMore
            onClick={() => {
              setLoardData(data.length > loardData ? loardData + 2 : loardData);
              setBlur(false);
            }}
          >
            Show More Details
            <DownArrowImg src="/images/showMore.png" alt="Show" />
          </ShowMore>
        )} */}
      </>
    </QuoteTablesMain>
  );
};

export default QuoteTables;

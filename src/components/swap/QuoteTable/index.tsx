// this is a QuoteTable file and Provide a table List and Data
import { styled } from '@mui/system';
import { Button, Grid, List } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { data } from '../../../contexts/QuoteTableDATA';
import { ThemeProps } from 'src/theme';
import IconGlobalStyleComponent from 'src/theme/GlobalComponent/iconGlobalStyleComponent';
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
  marginTop: '2%',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: '#e0e0e0',
  // width: '96%',
});
const MaxPriceDetail = styled('p')({
  color: 'rgba(0, 0, 0, 0.4)',
  fontWeight: '600',
  marginTop: 20,
  display: 'flex',
});
const ImageSpan = styled('span')({
  color: 'black',
  paddingLeft: 5,
  marginTop: 10,
});
const MainSpan = styled('span')((props: { theme?: ThemeProps }) => ({
  background: props.theme && props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
  cursor: 'pointer',
  display: 'flex',
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
});
const RefresBtn = styled(Button)({
  backgroundColor: 'white',
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  color: '#595959',
  borderRadius: 100,
  fontWeight: '600',
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
const Text = styled('p')({
  textAlign: 'center',
  opacity: 0.4,
  fontWeight: '500',
  display: 'flex',
  justifyContent: 'center',
});
const TextDown = styled('p')({
  textAlign: 'center',
  fontWeight: '600',
});
const ChangeText = styled('span')((props: { theme?: ThemeProps }) => ({
  textAlign: 'center',
  fontWeight: '600',
  background: props.theme && props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
}));
const ShowMore = styled('p')((props: { theme?: ThemeProps }) => ({
  textAlign: 'center',
  background: props.theme && props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
  fontWeight: '600',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const CoinTitle = styled('p')({
  fontWeight: 600,
});
const DownArrowImgTop = styled('img')({
  height: 11,
  paddingLeft: 10,
});
const Btn = styled('div')({
  marginTop: 5,
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
const QuoteTables = (_props: QuoteTableProps) => {
  const [loardData, setLoardData] = useState<number>(1);
  const [blur, setBlur] = useState<Boolean>(true);
  useEffect(() => {
    setBlur(true);
  }, []);
  useEffect(() => {
    setLoardData(1);
  }, []);
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
                    <IconGlobalStyleComponent
                      onClick={() => {}}
                      ml={5}
                      mr={0}
                      height={7}
                      width={11}
                      img="/images/downArrow.png"
                      opecity={0.5}
                    />
                  </ImageSpan>
                </MainSpan>
              </MaxPriceDetail>
              <MaxPriceDetail>
                Gas Price:{' '}
                <MainSpan>
                  206 GWEI
                  <ImageSpan>
                    <IconGlobalStyleComponent
                      onClick={() => {}}
                      ml={5}
                      mr={0}
                      height={7}
                      width={11}
                      img="/images/downArrow.png"
                      opecity={0.5}
                    />
                  </ImageSpan>
                </MainSpan>
              </MaxPriceDetail>
            </PriceDetail>
            <DataUpdat>
              <UpdateTitle>Data updated 18m ago. Please refresh:</UpdateTitle>
              <RefresBtn>Refresh</RefresBtn>
            </DataUpdat>
            <List aria-label="main mailbox folders">
              {data?.length > 0 &&
                data.map((val, i) => {
                  return (
                    <>
                      {loardData > i && (
                        <ListItem key={i}>
                          <CoinHeader>
                            <CoinIcon src={val.icon} alt="icon" />
                            <CoinTitle>{val.name}</CoinTitle>
                            <IconGlobalStyleComponent
                              onClick={() => {}}
                              ml={10}
                              mr={10}
                              height={15}
                              width={15}
                              img="/images/shere.png"
                              opecity={0.5}
                            />
                          </CoinHeader>
                          <Grid container key={i} spacing={0}>
                            <Grid item xs={4}>
                              <Text>{val.get}</Text>
                              <TextDown>
                                {val.proce} <ChangeText>{val.pr}</ChangeText>
                              </TextDown>
                            </Grid>
                            <Grid item xs={4}>
                              <Text>
                                {val.shortname}
                                {/* <Btn>
                                  <IconGlobalStyleComponent
                                    onClick={() => {}}
                                    ml={10}
                                    mr={10}
                                    height={15}
                                    width={15}
                                    img="/images/short.png"
                                    opecity={0.5}
                                  />
                                </Btn> */}
                              </Text>
                              <TextDown>{val.shortPrice}</TextDown>
                            </Grid>
                            <Grid item xs={4}>
                              <Text>{val.gasfee}</Text>
                              <TextDown>{val.gesprice}</TextDown>
                            </Grid>
                          </Grid>
                        </ListItem>
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
                    <IconGlobalStyleComponent
                      onClick={() => {}}
                      ml={5}
                      mr={0}
                      height={7}
                      width={11}
                      img="/images/downArrow.png"
                      opecity={0.5}
                    />
                  </ImageSpan>
                </MainSpan>
              </MaxPriceDetail>
              <MaxPriceDetail>
                Gas Price:{' '}
                <MainSpan>
                  206 GWEI
                  <ImageSpan>
                    <IconGlobalStyleComponent
                      onClick={() => {}}
                      ml={5}
                      mr={0}
                      height={7}
                      width={11}
                      img="/images/downArrow.png"
                      opecity={0.5}
                    />
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
                    {loardData > i && (
                      <ListItem>
                        <CoinHeader>
                          <CoinIcon src={val.icon} alt="icon" />
                          <CoinTitle>{val.name}</CoinTitle>
                          <IconGlobalStyleComponent
                            onClick={() => {}}
                            ml={10}
                            mr={10}
                            height={15}
                            width={15}
                            img="/images/shere.png"
                            opecity={0.5}
                          />
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
                              {val.shortname}
                              <Btn>
                                <IconGlobalStyleComponent
                                  onClick={() => {}}
                                  ml={10}
                                  mr={10}
                                  height={15}
                                  width={15}
                                  img="/images/short.png"
                                  opecity={0.5}
                                />
                              </Btn>
                            </Text>
                            <TextDown>{val.shortPrice}</TextDown>
                          </Grid>
                          <Grid item xs={4}>
                            <Text>{val.gasfee}</Text>
                            <TextDown>{val.gesprice}</TextDown>
                          </Grid>
                        </Grid>
                      </ListItem>
                    )}
                  </>
                );
              })}
            </List>
          </CardCustom>
        )}
        <ShowMore
          onClick={
            data.length === loardData || data.length + 1 === loardData
              ? () => {
                  setLoardData(1);
                  setBlur(true);
                }
              : () => {
                  setLoardData(data.length > loardData ? loardData + 2 : loardData);
                  setBlur(false);
                }
          }
        >
          {data.length === loardData || data.length + 1 === loardData ? 'Hide Details' : 'Show More Details'}
          <DownArrowImgTop
            src={
              data.length === loardData || data.length + 1 === loardData
                ? '/images/hideDetail.png'
                : '/images/showMore.png'
            }
            alt="Hide"
          />
        </ShowMore>
      </>
    </QuoteTablesMain>
  );
};

export default QuoteTables;

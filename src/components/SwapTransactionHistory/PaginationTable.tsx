import React, { ChangeEvent, Component, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, FormControl, Grid, NativeSelect, useMediaQuery } from '@mui/material';

const Footer = styled('div')({
  '@media (min-width: 660px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  height: '72px',
  paddingLeft: '4%',
  paddingRight: '4%',
  '@media (max-width: 660px)': {
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    height: '130px',
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
});
const Count = styled('div')({
  '@media (min-width: 660px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paddingLeft: 10,
  paddingRight: 10,
  '@media (max-width: 660px)': {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
const Item = styled('p')({
  fontWeight: 500,
  fontSize: 16,
  fontFamily: 'Inter !important',
  color: '#918f92',
  marginRight: 10,
});
const ImageIcon = styled('img')({
  height: 10,
  width: 8,
  backgroundColor: '#ededed',
  padding: 15,
  borderRadius: 100,
  margin: 3,
  marginLeft: 15,
});
const Body = styled('div')({
  overflow: 'hidden',
  '&:hover': {
    overflowY: 'auto',
  },
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  height: '71%',
  width: '90%',
  paddingLeft: '5%',
  paddingRight: '5%',
});
const Table = styled(Grid)({
  '@media (min-width: 660px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marginBottom: '7px',
  '@media (max-width: 660px)': {
    marginBottom: '7px',
    marginTop: '10%',
  },
});
const TranjectionType = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const StatusImage = styled('img')({
  height: 52,
  width: 52,
});
const TranjectionDetail = styled('div')({
  marginLeft: 5,
});
const StatusText = styled('span')({
  fontWeight: 600,
  fontSize: 16,
  color: 'black',
});
const TextPink = styled('span')({
  fontWeight: 600,
  fontSize: 16,
  color: '#BB36FF',
});
const TimeText = styled('span')({
  fontWeight: 500,
  fontSize: 14,
  color: '#999999',
  marginLeft: 5,
});
const TimeImage = styled('img')({
  height: 15,
  width: 15,
  opacity: 0.3,
  marginTop: 7,
});
const Span = styled('span')({
  fontWaight: 500,
  fontSize: '14px',
  color: '#999999',
  alignItems: 'center',
  display: 'flex',
  marginTop: 15,
  marginBottom: 15,
});
const TranjectionEntry = styled('span')({
  fontWaight: 600,
  fontSize: '16px',
  color: '#595959',
  alignItems: 'center',
  display: 'flex',
  '@media (max-width: 660px)': {
    marginTop: 10,
  },
});
const Span3 = styled('span')({
  fontWaight: 500,
  fontSize: '16px',
  color: '#595959',
  alignItems: 'center',
  display: 'flex',
  '@media (max-width: 660px)': {
    marginTop: 10,
    marginLeft: '16%',
  },
});
const Img = styled('img')({
  opacity: 0.4,
  marginRight: 10,
  marginLeft: 10,
  '@media (max-width: 660px)': {
    marginTop: 15,
  },
});
const CoinImg = styled('img')({
  marginRight: 5,
});
const Status = styled('div')({
  height: 62,
  display: 'flex',
  alignItems: 'center',
});
const Share = styled('div')({
  '@media (min-width: 660px)': {
    display: 'flex',
    alignItems: 'center',
  },
  '@media (max-width: 660px)': {
    marginLeft: '15%',
  },
});

const NativeSelects = styled(NativeSelect)({
  width: '65px',
  backgroundColor: '#e8e5e7',
  paddingLeft: 10,
  borderRadius: '100px',
});

type PaginationTableProps = {
  data: any;
};
const PaginationTable = (props: PaginationTableProps) => {
  const [page, setPage] = React.useState([]);
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [count, setCount] = React.useState('10');
  const a = parseInt(count);
  const isMobile = useMediaQuery('(min-width:660px)');
  useEffect(() => {
    const range = [];
    const num = Math.ceil(props.data.length / a);
    let i = 1;
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    setPage(range);
  }, [count, start, end]);

  const NextPage = () => {
    if (page.length > currentPage) {
      setStart(a * currentPage);
      setCurrentPage(currentPage + 1);
      setEnd(end + a);
    }
  };

  const PriviousPage = () => {
    if (currentPage > 1) {
      setStart(start - a);
      setEnd(end - a);
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <Body>
        {props.data.map((val, i) => {
          return start <= i && i + 1 <= a * currentPage ? (
            <>
              <Span>{val.Date}</Span>
              {val.Transaction.map((data, ind) => {
                return (
                  <Table container columnSpacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item lg={4} xs={isMobile ? 0 : 12}>
                      <Status>
                        <TranjectionType>
                          {data.Status === 'Swap' ? (
                            <StatusImage src="/images/swapIcon.png" />
                          ) : data.Status === 'Pending' ? (
                            <StatusImage src="/images/pending.png" />
                          ) : data.Status === 'Approve' ? (
                            <StatusImage src="/images/approve.png" />
                          ) : data.Status === 'Failed' ? (
                            <StatusImage src="/images/faild.png" />
                          ) : null}

                          <TranjectionDetail>
                            <StatusText>{data.Name}</StatusText>
                            <br />
                            <TextPink>
                              {data.Id}
                              <TimeText>
                                <TimeImage src="/images/time.png" /> {data.Time}
                              </TimeText>
                            </TextPink>
                          </TranjectionDetail>
                        </TranjectionType>
                      </Status>
                    </Grid>
                    <Grid item lg={4} xs={isMobile ? 0 : 12}>
                      <Share>
                        <TranjectionEntry>
                          <CoinImg src={data.PayImg} />
                          {data.PayToken}
                        </TranjectionEntry>
                        {data.ReceiveImg !== '' && data.ReceiveToken !== '' ? (
                          <>
                            <Img src={isMobile ? '/images/leftIcon.png' : '/images/down.png'} height={15} width={16} />
                            <TranjectionEntry>
                              <CoinImg src={data.ReceiveImg} />
                              {data.ReceiveToken}
                            </TranjectionEntry>
                          </>
                        ) : null}
                      </Share>
                    </Grid>
                    <Grid item lg={4} xs={isMobile ? 0 : 12}>
                      <div>
                        <Span3>{data.ETH}</Span3>
                      </div>
                    </Grid>
                  </Table>
                );
              })}
            </>
          ) : null;
        })}
      </Body>
      <Footer>
        <Count>
          <Item>Items Per Page</Item>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <NativeSelects
                onChange={(e: any) => {
                  setCount(e.target.value);
                }}
                value={count}
                inputProps={{
                  name: 'Page',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </NativeSelects>
            </FormControl>
          </Box>
        </Count>
        <Count>
          <Item>
            {currentPage}-{count} of {page.length}
          </Item>
          <ImageIcon
            src="/images/left.png"
            onClick={() => {
              PriviousPage();
            }}
          />
          <ImageIcon
            src="/images/right.png"
            onClick={() => {
              NextPage();
            }}
          />
        </Count>
      </Footer>
    </>
  );
};

export default PaginationTable;

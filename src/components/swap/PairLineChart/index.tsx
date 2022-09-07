// this is a PairLineChart file and Create a PairLineChart Design
import { styled } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import ReactEcharts from 'echarts-for-react';
import { Box, Tab, Tabs } from '@mui/material';
import * as echarts from 'echarts';
import { Theme } from '@emotion/react';
import { ThemeProps } from 'src/theme';
import IconGlobalStyleComponent from 'src/theme/GlobalComponent/iconGlobalStyleComponent';;
const CurrencyTitle = styled('h2')({
  // fontSize: 'calc(0.55em + 1vw)',
  fontWeight: '600',
  display: 'flex',
  marginTop: '12%',
});
const CurrencySubName = styled('h4')({
  fontWeight: '600',
  // fontSize: 'calc(0.55em + 1vw)',
  paddingLeft: 5,
  color: '#999999',
});
const ShortIcon = styled('img')({
  height: '25px',
  width: '25px',
  marginLeft: '20px',
  marginRight: '20px',
});
const CurrencyTotalPrice = styled('h1')(() => ({
  fontSize: '44px',
  fontWeight: '600',
  color: 'black',
}));
const CurrencyPriceChange = styled('h3')((props: { theme: ThemeProps }) => ({
  background: props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
  fontWeight: '600',
  marginLeft: '1.5%',
}));
const Btn = styled('div')({
  marginTop:5
});

const PairLineChartMain = styled('div')({
  display: 'block',
  '@media (max-width: 660px)': {
    display: 'none',
  },
});
const PairLineChartData = styled('div')({
  width: '100%',
  marginTop: '10%',
});
const TabButton = styled(Tab)((props: { isActive: boolean; theme: ThemeProps }) => ({
  borderRadius: '100px',
  fontWeight: '500',
  fontStyle: 'normal',
  textTransform: 'lowercase',
  height: '36px',
  width: '65px',
  background: props.isActive ? props.theme.palette.color.active : '',
  color: props.isActive ? 'white!important' : '',
}));

const TabBar = styled(Tabs)({
  marginLeft: '55%',
  backgroundColor: '#f7f7f7',
  borderRadius: '100px',
  width: '273px',
  '@media (max-width: 660px)': {
    marginLeft: '20%',
  },
});
type SelectType = {
  name: String;
  image: String;
  fullName: String;
};
type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(i: number) {
  return {
    id: `simple-tab-${i}`,
    'aria-controls': `simple-tabpanel-${i}`,
  };
}
type Token = {};
type OHLC = {};
type PairLineChartProps = {
  inputCurrency: Token | null;
  outputCurrency: Token | null;
  switchCurrencyHandler: () => void | null;
  currencyPriceInUSD: string | null;
  currencyPriceChangeInUSD: string | null;
  currencyPriceChangePercentage: string | null;
  pairOhlcData: OHLC[] | null;
  currentInterval: number | null;
  intervalHandler: () => void | null;
};
const PairLineChart = (props: PairLineChartProps) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const CoinDetail: SelectType = useSelector((state: ArticleState) => state.CoinDetail);
  const receiveCoinDetail: SelectType = useSelector((state: ArticleState) => state.receiveCoinDetail);
  return (
    <PairLineChartMain>
      <>
        <CurrencyTitle>
          Ethereum
          <CurrencySubName>(ETH)</CurrencySubName>
          <Btn>
            <IconGlobalStyleComponent
              onClick={() => { }}
              ml={10}
              mr={10}
              height={20}
              width={20}
              img='/images/shortVartical.png'
              opecity={1} />
          </Btn>
          Tether
          <CurrencySubName>(USDT)</CurrencySubName>
        </CurrencyTitle>
        <CurrencyTotalPrice>$3,744.19</CurrencyTotalPrice>
        <br />
        <CurrencyPriceChange>$16.93333 (+0.41%)</CurrencyPriceChange>
        <PairLineChartData>
          <Box sx={{ width: '100%' }}>
            <TabPanel value={value} index={0}>
              <ReactEcharts
                option={{
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      type: 'cross',
                      label: {
                        backgroundColor: '#BB36FF',
                      },
                    },
                  },
                  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                  grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '0%',
                    top: 0,
                    containLabel: false,
                  },
                  xAxis: [
                    {
                      type: 'category',
                      boundaryGap: false,
                      show: false,
                      data: [
                        '1/01/2022',
                        '2/01/2022',
                        '3/01/2022',
                        '4/01/2022',
                        '5/01/2022',
                        '6/01/2022',
                        '7/01/2022',
                        '8/01/2022',
                      ],
                    },
                  ],
                  yAxis: [
                    {
                      type: 'value',
                      show: false,
                    },
                  ],
                  series: [
                    {
                      name: 'Ethereum',
                      type: 'line',
                      stack: 'Total',
                      smooth: true,
                      lineStyle: {
                        width: 2,
                        color: '#BB36FF',
                        shadowBlur: 15,
                        shadowOffsetX: 7,
                      },
                      showSymbol: false,
                      symbolSize: 0,
                      areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 2, 1, [
                          {
                            offset: 0,
                            color: 'rgba(93, 95, 239, 0.05)',
                          },
                          {
                            offset: 1,
                            color: 'rgba(93, 95, 239, 0)',
                          },
                        ]),
                      },
                      emphasis: {
                        focus: 'series',
                      },
                      data: [140, 232, 101, 264, 90, 340, 250, 100],
                    },
                  ],
                }}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ReactEcharts
                option={{
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      type: 'cross',
                      label: {
                        backgroundColor: '#BB36FF',
                      },
                    },
                  },
                  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                  grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '0%',
                    top: 0,
                    containLabel: true,
                  },
                  xAxis: [
                    {
                      type: 'category',
                      boundaryGap: false,
                      show: false,
                      data: [
                        '1/01/2022',
                        '2/01/2022',
                        '3/01/2022',
                        '4/01/2022',
                        '5/01/2022',
                        '6/01/2022',
                        '7/01/2022',
                        '8/01/2022',
                      ],
                    },
                  ],
                  yAxis: [
                    {
                      type: 'value',
                      show: false,
                    },
                  ],
                  series: [
                    {
                      name: 'Ethereum',
                      type: 'line',
                      stack: 'Total',
                      smooth: true,
                      lineStyle: {
                        width: 2,
                        color: '#BB36FF',
                        shadowBlur: 15,
                        shadowOffsetX: 7,
                      },
                      showSymbol: false,
                      symbolSize: 0,
                      areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 2, 1, [
                          {
                            offset: 0,
                            color: 'rgba(93, 95, 239, 0.05)',
                          },
                          {
                            offset: 1,
                            color: 'rgba(93, 95, 239, 0)',
                          },
                        ]),
                      },
                      emphasis: {
                        focus: 'series',
                      },
                      data: [140, 232, 101, 264, 90, 340, 250, 270],
                    },
                  ],
                }}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ReactEcharts
                option={{
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      type: 'cross',
                      label: {
                        backgroundColor: '#BB36FF',
                      },
                    },
                  },
                  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                  grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '0%',
                    top: 0,
                    containLabel: true,
                  },
                  xAxis: [
                    {
                      type: 'category',
                      boundaryGap: false,
                      show: false,
                      data: [
                        '1/01/2022',
                        '2/01/2022',
                        '3/01/2022',
                        '4/01/2022',
                        '5/01/2022',
                        '6/01/2022',
                        '7/01/2022',
                        '8/01/2022',
                      ],
                    },
                  ],
                  yAxis: [
                    {
                      type: 'value',
                      show: false,
                    },
                  ],
                  series: [
                    {
                      name: 'Ethereum',
                      type: 'line',
                      stack: 'Total',
                      smooth: true,
                      lineStyle: {
                        width: 2,
                        color: '#BB36FF',
                        shadowBlur: 15,
                        shadowOffsetX: 7,
                      },
                      showSymbol: false,
                      symbolSize: 0,
                      areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 2, 1, [
                          {
                            offset: 0,
                            color: 'rgba(93, 95, 239, 0.05)',
                          },
                          {
                            offset: 1,
                            color: 'rgba(93, 95, 239, 0)',
                          },
                        ]),
                      },
                      emphasis: {
                        focus: 'series',
                      },
                      data: [140, 232, 101, 264, 90, 340, 250, 500],
                    },
                  ],
                }}
              />
            </TabPanel>
            <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
              <TabBar
                TabIndicatorProps={{
                  style: { display: 'none' },
                }}
                value={value}
                onChange={handleChange}
              >
                <TabButton isActive={value === 0} label="24H" {...a11yProps(0)} />
                <TabButton isActive={value === 1} label="1W" {...a11yProps(1)} />

                <TabButton isActive={value === 2} label="1M" {...a11yProps(2)} />
              </TabBar>
            </Box>
          </Box>
        </PairLineChartData>
      </>
    </PairLineChartMain >
  );
};

export default PairLineChart;

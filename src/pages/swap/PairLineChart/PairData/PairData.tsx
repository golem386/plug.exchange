import styled from '@emotion/styled';
import ReactEcharts from 'echarts-for-react';
import { Box, Tab, Tabs } from '@mui/material';
import * as echarts from 'echarts';
import { useSelector } from 'react-redux';
import React from 'react';
import { TabPanelProps } from './Props';

const ChartDiv = styled('div')({
  width: '100%',
});
const CustomButton = styled(Tab)({
  borderRadius: '100px',
  padding: '7px 20px',
  fontSize: '16px',
  fontWeight: '600',
  fontStyle: 'normal',
  opacity: '0.65',
  textTransform: 'lowercase',
  marginLeft: 5,
  marginRight: 5,
  fontFamily: 'Inter',
});
const CustomButtonActive = styled(Tab)({
  borderRadius: '100px',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  padding: '7px 20px',
  fontSize: '16px',
  fontWeight: '600',
  color: 'white',
  fontStyle: 'normal',
  opacity: '0.65',
  textTransform: 'lowercase',
  marginLeft: 5,
  marginRight: 5,
  fontFamily: 'Inter',
});

const CustomTabsActive = styled(Tabs)({
  marginLeft: '32vw',
});

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
const PairData = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <ChartDiv>
      <Box sx={{ width: '100%' }}>
        <TabPanel value={value} index={0}>
          <ReactEcharts
            option={{
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
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                  name: 'Line 1',
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
                  data: [140, 232, 101, 264, 90, 340, 250],
                },
              ],
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ReactEcharts
            option={{
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
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                  name: 'Line 1',
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
                  data: [140, 232, 101, 264, 90, 340, 250],
                },
              ],
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ReactEcharts
            option={{
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
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                  name: 'Line 1',
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
                  data: [140, 232, 101, 264, 90, 340, 250],
                },
              ],
            }}
          />
        </TabPanel>
        <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
          <CustomTabsActive
            TabIndicatorProps={{
              style: { display: 'none' },
            }}
            value={value}
            onChange={handleChange}
          >
            {value === 0 ? (
              <CustomButtonActive label="24H" {...a11yProps(0)} />
            ) : (
              <CustomButton label="24H" {...a11yProps(0)} />
            )}
            {value === 1 ? (
              <CustomButtonActive label="1W" {...a11yProps(1)} />
            ) : (
              <CustomButton label="1W" {...a11yProps(1)} />
            )}
            {value === 2 ? (
              <CustomButtonActive label="1M" {...a11yProps(2)} />
            ) : (
              <CustomButton label="1M" {...a11yProps(2)} />
            )}
          </CustomTabsActive>
        </Box>
      </Box>
    </ChartDiv>
  );
};

export default PairData;

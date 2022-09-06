import styled from '@emotion/styled';
import { Tab, Tabs } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { Component } from 'react'
import { ThemeProps } from 'src/theme';
import IconGlobalStyleComponent from 'src/theme/iconGlobalStyleComponent';


const Logo = styled('img')({
    margin: 'auto',
    display: 'block',
    marginTop: 30
});
const Div = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '7%'
});
const Text = styled('p')({
    color: '#BB36FF',
    marginLeft: 10,
    marginRight: 10,
    fontWeight: '600'
});
const H1 = styled('h1')({
    textAlign: 'center',
    marginTop: 20,
});

const P = styled('p')({
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
    fontWeight: '400',
    textAlign: 'center',
    opacity: 0.3
});
const PairLineChartData = styled('div')({
    width: '100%',
    marginTop: '3%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});
const TabButton = styled(Tab)((props: { isActive: boolean; theme: ThemeProps }) => ({
    borderRadius: '100px',
    fontWeight: '500',
    fontStyle: 'normal',
    textTransform: 'lowercase',
    height: '36px',
    width: '100px',
    background: props.isActive ? props.theme.palette.color.active : '',
    color: props.isActive ? 'white!important' : '',
}));

const TabBar = styled(Tabs)({
    backgroundColor: '#f7f7f7',
    borderRadius: '100px',
    width: '37%',
    marginLeft: '32%',
});

const Main = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
});

const Entry = styled('div')({
    display: 'flex',
    alignItems: 'center',
    width: '40%'
});


const Information = styled('p')({
    marginLeft: 20
});

const Hr = styled('hr')({
    width: '40%',
    margin: 'auto',
    display: 'block',
    opacity: 0.2
});


const InputType = styled('div')({
    backgroundColor: '#f7f7f7',
    paddingLeft: 20,
    width: '38%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center'
});

const Input = styled('input')({
    width: '90%',
    padding: 10,
    backgroundColor: 'transparent',
    border: 'none'
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

const Started = [
    "My funds are stuck on a Layer-2 network because i can't pay the gas needed for transactions.",
    "Can I access Hop Protocol through other interfaces than Plug.Exchange?",
    "Why can I not access Plug.exchange?",
    "Hop labels my transaction as completed but I can't see my tokens in Metamask!",
    "Do I need to pay transaction costs on the destination chain before I receive my tokens?",
    "What are the fees for transfering tokens with Hop?",
    "What is Plug Protocol?",
    "How safe is Plug?",
    "How long does a Hop transfer take?",
    "I sent a token but it's not arriving at the destination."
]
const protocol = [
    "Can I access Hop Protocol through other interfaces than Plug.Exchange?",
    "Why can I not access Plug.exchange?",
    "Do I need to pay transaction costs on the destination chain before I receive my tokens?",
    "How safe is Plug?",
    "How long does a Hop transfer take?",
    "I sent a token but it's not arriving at the destination."
]

const Exchange = [
    "Do I need to pay transaction costs on the destination chain before I receive my tokens?",
    "What are the fees for transfering tokens with Hop?",
    "What is Plug Protocol?",
    "How safe is Plug?",
    "How long does a Hop transfer take?",
    "I sent a token but it's not arriving at the destination."
]
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

const Faqs = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div>
            <Logo src='/logo.png' />
            <Div>
                <Text>Plug</Text> . <Text>FAQs</Text>
            </Div>
            <H1>Frequently Asked Questions</H1>
            <P>General questions about Plug and how to send tokens.</P>
            <PairLineChartData>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                        <TabBar
                            TabIndicatorProps={{
                                style: { display: 'none' },
                            }}
                            value={value}
                            onChange={handleChange}
                        >
                            <TabButton isActive={value === 0} label="Getting Started" {...a11yProps(0)} />
                            <TabButton isActive={value === 1} label="Plug Protocol" {...a11yProps(1)} />

                            <TabButton isActive={value === 2} label="Plug Exchange" {...a11yProps(2)} />
                        </TabBar>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Main>
                            <InputType>
                                {/* <Search src="./images/search.png" /> */}
                                <IconGlobalStyleComponent
                                    onClick={() => { }}
                                    ml={0}
                                    mr={0}
                                    height={20}
                                    width={20}
                                    img="/images/search.png"
                                    opecity={0.3} />
                                <Input type="text" placeholder='Search' />
                            </InputType>
                        </Main>
                        {
                            Started.map((val, i) => {
                                return (
                                    <>
                                        <Main key={i}>
                                            <Entry>
                                                <IconGlobalStyleComponent
                                                    onClick={() => { }}
                                                    ml={10}
                                                    mr={0}
                                                    height={40}
                                                    width={40}
                                                    img='/images/plus.png'
                                                    opecity={0.3} />
                                                <Information>{val}</Information>
                                            </Entry>
                                        </Main>
                                        <Hr />
                                    </>
                                )
                            })
                        }

                        <Hr />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Main>
                            <InputType>
                                <IconGlobalStyleComponent
                                    onClick={() => { }}
                                    ml={0}
                                    mr={0}
                                    height={20}
                                    width={20}
                                    img="/images/search.png"
                                    opecity={0.3} />
                                <Input type="text" placeholder='Search' />
                            </InputType>
                        </Main>
                        {
                            protocol.map((val, i) => {
                                return (
                                    <>
                                        <Main key={i}>
                                            <Entry>
                                                <IconGlobalStyleComponent
                                                    onClick={() => { }}
                                                    ml={10}
                                                    mr={0}
                                                    height={40}
                                                    width={40}
                                                    img='/images/plus.png'
                                                    opecity={0.3} />
                                                <Information>{val}</Information>
                                            </Entry>
                                        </Main>
                                        <Hr />
                                    </>
                                )
                            })
                        }
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Main>
                            <InputType>
                                <IconGlobalStyleComponent
                                    onClick={() => { }}
                                    ml={0}
                                    mr={0}
                                    height={20}
                                    width={20}
                                    img="/images/search.png"
                                    opecity={0.3} />
                                <Input type="text" placeholder='Search' />
                            </InputType>
                        </Main>
                        {
                            Exchange.map((val, i) => {
                                return (
                                    <>
                                        <Main key={i}>
                                            <Entry>
                                                <IconGlobalStyleComponent
                                                    onClick={() => { }}
                                                    ml={10}
                                                    mr={0}
                                                    height={40}
                                                    width={40}
                                                    img='/images/plus.png'
                                                    opecity={0.3} />
                                                <Information>{val}</Information>
                                            </Entry>
                                        </Main>
                                        <Hr />
                                    </>
                                )
                            })
                        }
                    </TabPanel>
                </Box>
            </PairLineChartData>
        </div>
    )
}

export default Faqs

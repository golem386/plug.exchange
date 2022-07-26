import styled from '@emotion/styled';
import { Grid, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import CurrencyModal from '../../components/CurrencyModal';
import PairLineChart from '../../components/swap/PairLineChart';
import QuoteTables from '../../components/swap/QuoteTable';
import ReferralModal from '../../components/swap/Referral';
import SwapMain from '../../components/swap/Swap';
import TransactionSettings from '../../components/swap/Swap/TransactionSettings';


const MainDiv = styled('div')({
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '4%',
});
const Quotadiv = styled('div')({
    marginTop: '15%',
});
const Resetmorediv = styled('div')({
    marginTop: '15%',
});

const Swap = () => {
    const matches = useMediaQuery('(min-width:660px)');
    const Modal: string | boolean = useSelector((state: ArticleState) => state.modal);
    return (
        <>
            <MainDiv>
                <Grid container spacing={5}>
                    <Grid item sm={7}>
                        <PairLineChart
                            inputCurrency={null}
                            outputCurrency={null}
                            switchCurrencyHandler={null}
                            currencyPriceInUSD={null}
                            currencyPriceChangeInUSD={null}
                            currencyPriceChangePercentage={null}
                            pairOhlcData={null}
                            currentInterval={null}
                            intervalHandler={null}
                        />
                        <Quotadiv>
                            <QuoteTables quotes={null} allowedSlippage={null} lastRefresh={null} userSelectedGasPrice={null} />
                        </Quotadiv>
                    </Grid>
                    <Grid item sm={5}>
                        {Modal === 'Transaction' ? (
                            <TransactionSettings isOpen={null} />
                        ) : Modal === 'SelectToken' ? (
                            <CurrencyModal
                                select="PayToken"
                                activeList={null}
                                currencySearchHandler={null}
                                isOpen={null}
                                actionHandler={null}
                                activeTokenId={null}
                            />
                        ) : Modal === 'ReceiveToken' ? (
                            <CurrencyModal
                                select="ReceiveToken"
                                activeList={null}
                                currencySearchHandler={null}
                                isOpen={null}
                                actionHandler={null}
                                activeTokenId={null}
                            />
                        ) : (
                            <SwapMain btnTitle="Connect Wallet" />
                        )}
                        <Resetmorediv>
                            <ReferralModal />
                        </Resetmorediv>
                    </Grid>
                </Grid>
            </MainDiv>
        </>
    )
}

export default Swap

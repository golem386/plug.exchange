import { styled } from '@mui/system';

const SwapCardHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '5%',
  paddingRight: '5%',
  cursor: 'pointer',
  paddingTop: '5%',
});

const SwapTitle = styled('h2')({
  fontWeight: '600',
  color: 'black',
});
export type SwapHeaderProps = {
  transactionSettingHandler: () => void | null;
};
// type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;

const SwapHeader = (_props: SwapHeaderProps) => {
  // const dispatch: AppDispatch = useDispatch();
  const onModal = (_article: string | boolean) => {
    // dispatch(null);
  };
  return (
    <SwapCardHeader>
      <SwapTitle>Swap</SwapTitle>
      <img
        src="/images/menu.png"
        onClick={() => {
          onModal('Transaction');
        }}
        alt="Menu"
        height={20}
        width={20}
      />
    </SwapCardHeader>
  );
};

export default SwapHeader;

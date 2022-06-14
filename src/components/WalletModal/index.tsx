// this is a WalletModal index file and Export WalletModal Component
export type WalletModalProps = {
    NetworkData: String;
    connetNetworkFunction: any;
    handleOpenError: any;
    handleCloseError: any;
    ErrorStatus: boolean;
    connetWalletFunction: any;
    WalletData: String;
    Check: Boolean;
    Network: any;
    satCheck: any;
    SelectData: any;
  };
  
import WalletModal from './WalletModal';

export { WalletModal };

import { AppConstant } from '@/const';
import { CommonUtils } from '@/utils';
import { SolanaWalletsEnum } from '@/models';

const useAuthHook = () => {
  const handleConnectSolWallet = async (selectedWallet: SolanaWalletsEnum) => {
    const provider = CommonUtils.getSolanaWalletsProvider(selectedWallet);

    if (!provider) return;

    localStorage.setItem(AppConstant.SOLANA_PROVIDER, selectedWallet);

    try {
      const data = await provider.connect();

      if (!Boolean(data)) return '';

      const publicKey = provider?.publicKey;
      if (!publicKey) return;

      const address = publicKey.toString();

      return address;
    } catch (error) {
      console.log(error);
      return '';
    }
  };
  return { handleConnectSolWallet };
};

export default useAuthHook;

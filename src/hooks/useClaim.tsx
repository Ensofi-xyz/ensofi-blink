import { AppConstant } from '@/const';
import { AppService } from '@/services';
import * as web3 from '@solana/web3.js';
import { SolanaWalletsEnum } from '@/models';
import { getSolanaWalletsProvider } from '@/utils/common.utils';

const useClaim = () => {
  const handleGetMintStatus = async (walletAddress: string) => {
    const res = await AppService.getMintStatus(walletAddress);

    return res;
  };

  const handleGetTotalMinted = async () => {
    const res = await AppService.getTotalMinted();

    if (res) {
      return res;
    } else {
      return 0;
    }
  };

  const handleCreateMint = async (walletAddress: string) => {
    const res = await AppService.createMint(walletAddress);
    return res;
  };

  const handleSendEncodedTransaction = async (
    solAddress: string,
    transaction: string,
  ) => {
    const currentWalletProvider = localStorage.getItem(
      AppConstant.SOLANA_PROVIDER,
    ) as SolanaWalletsEnum;

    if (!currentWalletProvider || !solAddress)
      return { txHash: '', messageError: 'Please connect wallet address' };

    try {
      const connection = new web3.Connection(
        process.env.RPC_URL as string,
        'confirmed',
      );

      const provider = getSolanaWalletsProvider(currentWalletProvider);

      const deserializedTx = web3.VersionedTransaction.deserialize(
        Buffer.from(transaction, 'base64'),
      );
      const signatures = await provider?.signTransaction(deserializedTx);

      deserializedTx.addSignature(
        new web3.PublicKey(solAddress),
        signatures.signatures[0],
      );

      const rawTransaction = deserializedTx.serialize();
      const blockhashResponse = await connection.getLatestBlockhash();
      const sig = await connection.sendRawTransaction(rawTransaction);
      const res = await connection.confirmTransaction(
        {
          signature: sig,
          blockhash: blockhashResponse.blockhash,
          lastValidBlockHeight: blockhashResponse.lastValidBlockHeight,
        },
        'confirmed',
      );
      if (res?.value?.err) {
        return {
          txHash: '',
          messageError: res?.value?.err,
        };
      } else {
        return {
          txHash: sig,
          messageError: '',
        };
      }
    } catch (error: any) {
      console.log(error);
      return {
        txHash: '',
        messageError: error.message,
      };
    }
  };

  return {
    handleCreateMint,
    handleGetMintStatus,
    handleGetTotalMinted,
    handleSendEncodedTransaction,
  };
};

export default useClaim;

'use client';

import React from 'react';
import { AppConstant } from '@/const';
import { CommonUtils } from '@/utils';
import { SolanaWalletsEnum } from '@/models';
import { twJoin, twMerge } from 'tailwind-merge';
import { CommonDialog } from '@/components/common';
import Image, { StaticImageData } from 'next/image';
import { useAppContext, useErrorContext } from '@/context';

import useAuthHook from '@/hooks/useAuthHook';

const ConnectWalletDialog: React.FC<ConnectWalletDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const { setErrorData } = useErrorContext();
  const { setWalletAddress } = useAppContext();
  const { handleConnectSolWallet } = useAuthHook();

  const handleConnectWallet = async (selectedWallet: SolanaWalletsEnum) => {
    const provider = CommonUtils.getSolanaWalletsProvider(selectedWallet);

    if (!provider) {
      setErrorData({
        title: '',
        message: `${'No provider was found!'} \n ${'Please install the extension of the required wallet.'}`,
      });

      return;
    }

    localStorage.setItem(AppConstant.SOLANA_PROVIDER, selectedWallet);

    const res = await handleConnectSolWallet(selectedWallet);

    if (!res) return;
    setWalletAddress(res);
    onClose();
  };

  return (
    <CommonDialog
      isOpen={isOpen}
      onClose={onClose}
      dialogTitle={'Connect Wallet'}
      titleClassName={twJoin('font-semibold', 'text-lg text-neutral2')}
    >
      <div className="w-full mt-5 flex flex-col gap-y-2">
        {Object.keys(SolanaWalletsEnum).map((value, index) => {
          return (
            <WalletItem
              key={index}
              title={(SolanaWalletsEnum as any)[value]}
              imgSrc={CommonUtils.getSolWalletImage(
                (SolanaWalletsEnum as any)[value],
              )}
              onClick={() =>
                handleConnectWallet((SolanaWalletsEnum as any)[value])
              }
            />
          );
        })}
      </div>
    </CommonDialog>
  );
};

export default ConnectWalletDialog;

interface ConnectWalletDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletItem: React.FC<WalletItemProps> = ({
  title,
  imgSrc,
  className,
  ...otherProps
}) => {
  return (
    <button
      className={twMerge(
        'px-4 py-2',
        'rounded-lg',
        'flex items-center gap-x-2',
        'border border-neutral2/50',
        'text-sm text-neutral1 font-medium',
        'bg-characterBackground2 hover:bg-characterBackground3',
        className,
      )}
      {...otherProps}
    >
      <Image width={40} height={40} src={imgSrc} alt={title} />
      <span>{title}</span>
    </button>
  );
};

interface WalletItemProps extends React.ComponentPropsWithoutRef<'button'> {
  imgSrc: string | StaticImageData;
  title: string;
}

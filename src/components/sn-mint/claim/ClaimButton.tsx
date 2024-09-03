import React, { ComponentPropsWithoutRef, FC, Fragment, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useAppContext } from '@/context';
import useClaim from '@/hooks/useClaim';
import { LoadingIcon } from '@/components/icons';

const ClaimButton: FC<ClaimButtonProps> = ({ className }) => {
  const { mintStatus, walletAddress, getMintStatus } = useAppContext();
  const { handleSendEncodedTransaction, handleCreateMint } = useClaim();

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClaim = async () => {
    setIsLoading(true);
    const { transaction, totalClaim, totalRemain } =
      await handleCreateMint(walletAddress);
    console.log(transaction, totalClaim, totalRemain);
    if (transaction) {
      const res = await handleSendEncodedTransaction(
        walletAddress,
        transaction,
      );
      if (res.messageError) {
        setErrorMessage(res.messageError);
      } else {
        getMintStatus();
      }
    }
    setIsLoading(false);
  };

  return (
    <div className={twMerge('flex flex-col items-center gap-y-4', className)}>
      {mintStatus.totalClaimed && mintStatus.totalClaimed > 0 ? (
        <p className="text-neutral5 text-sm">
          {` Succesfully claimed ${mintStatus.totalClaimed} passes, ${mintStatus?.totalClaimable && mintStatus?.totalClaimed && mintStatus?.totalClaimable - mintStatus?.totalClaimed} more to claim`}
        </p>
      ) : (
        <Fragment />
      )}
      <ButtonAction onClick={handleClaim} disabled={isLoading}>
        {isLoading ? (
          <LoadingIcon className="animate-spin" />
        ) : mintStatus.totalClaimed === 0 ? (
          'Claim now'
        ) : (
          'Claim more'
        )}
      </ButtonAction>
      {errorMessage ? (
        <p className="text-error2 text-sm">{errorMessage}</p>
      ) : (
        <Fragment />
      )}
    </div>
  );
};

export default ClaimButton;

interface ClaimButtonProps extends ComponentPropsWithoutRef<'button'> {
  wrapperButtonClassName?: string;
}

export const ButtonAction: FC<ComponentPropsWithoutRef<'button'>> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <div
      className={twMerge('bg-[#B848F7] rounded-full p-[1px] w-fit', className)}
    >
      <button
        className={twMerge(
          'w-fit',
          'px-6 py-4',
          'rounded-full',
          'font-semibold',
          'bg-claimButton',
          'hover:shadow-shadowClaimButton',
          className,
        )}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

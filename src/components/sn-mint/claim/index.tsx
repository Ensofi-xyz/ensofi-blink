import React, { ComponentPropsWithoutRef, FC, useMemo, useState } from 'react';
import { isUndefined } from 'lodash';
import { twMerge } from 'tailwind-merge';
import { useAppContext } from '@/context';
import { LoadingIcon } from '@/components/icons';
import ClaimButton, { ButtonAction } from './ClaimButton';
import ConnectWalletDialog from '@/components/common/ConnectWalletDialog';

const Claim: FC<ComponentPropsWithoutRef<'div'>> = ({
  className,
  ...otherProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mintStatus, walletAddress } = useAppContext();

  const action = useMemo(() => {
    const { totalClaimable, totalClaimed } = mintStatus;

    if (!walletAddress) {
      return (
        <ButtonAction onClick={() => setIsOpen(true)}>
          Connect Wallet
        </ButtonAction>
      );
    }

    if (isUndefined(totalClaimable) && isUndefined(totalClaimed)) {
      return <LoadingIcon className="animate-spin" />;
    }

    if (totalClaimable === 0 && totalClaimed === 0) {
      return (
        <p className="text-sm text-error2">
          Oops, looks like you're not part of any communities yet.
        </p>
      );
    }

    if (
      totalClaimable &&
      totalClaimed &&
      totalClaimable > 0 &&
      totalClaimed > 0 &&
      totalClaimable - totalClaimed === 0
    ) {
      return (
        <p className="text-sm text-brandColorTertiary">
          {`Succesfully claimed ${totalClaimed} ${totalClaimed > 1 ? 'passes' : 'pass'}`}
        </p>
      );
    }

    return <ClaimButton />;
  }, [mintStatus, walletAddress]);

  return (
    <>
      <div
        className={twMerge(
          'w-full center-root relative mt-5 pb-10 sm:pb-0',
          className,
        )}
        {...otherProps}
      >
        <div className="h-[2px] bg-dividerBg w-full absolute top-0 left-0 sm:hidden" />
        {action}
      </div>

      <ConnectWalletDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Claim;

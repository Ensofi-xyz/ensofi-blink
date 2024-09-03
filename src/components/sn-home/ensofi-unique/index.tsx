'use client';

import React, { ComponentPropsWithoutRef } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import CrossChainContent from './CrossChainContent';

const EnsofiUnique: React.FC<ComponentPropsWithoutRef<'div'>> = ({
  className,
  ...otherProps
}) => {
  return (
    <div
      className={twMerge(
        'rounded-xl',
        'max-w-[814px] mx-auto',
        'sm:bg-none bg-crossChain',
        'p-[1px] sm:p-0 mt-[64px] sm:mt-[73px]',
        className,
      )}
      {...otherProps}
    >
      <div
        className={twJoin(
          'flex flex-col items-center',
          'p-3 sm:p-0 bg-[#090A11] rounded-xl sm:bg-transparent',
        )}
      >
        <div
          className={twJoin(
            'sm:w-2/3',
            'px-7 pt-6 pb-6',
            'flex flex-col items-center gap-y-4',
            'sm:border border-[#A9A3C233] sm:border-b-0 rounded-t-2xl',
          )}
        >
          <p className="text-xl sm:text-2xl font-semibold">Cross-chain</p>
          <p className="text-sm sm:text-lg text-center">
            Leverage the potential of your on-chain assets regardless of the
            native chains.
          </p>
        </div>
        <CrossChainContent className="w-full" />
      </div>
    </div>
  );
};

export default EnsofiUnique;

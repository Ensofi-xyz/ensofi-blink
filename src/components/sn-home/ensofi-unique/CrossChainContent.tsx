'use client';

import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { ImageAssets } from 'public';
import { useTranslation } from 'react-i18next';
import { twJoin, twMerge } from 'tailwind-merge';
import Image from 'next/image';

const CrossChainContent: React.FC<ComponentPropsWithoutRef<'div'>> = ({
  className,
  ...otherProps
}) => {
  const { t: getLabel } = useTranslation();

  return (
    <div
      className={twMerge('relative', 'center-root', className)}
      {...otherProps}
    >
      <Image
        src={ImageAssets.BgCrossChainImageContent}
        alt=""
        className="w-full h-full"
      />
      <div
        className={twJoin(
          'p-5',
          'w-full h-full',
          'absolute top-0 left-0',
          'flex flex-col justify-center gap-y-3',
        )}
      >
        <CrossChainContentRow
          start={
            <p className="text-[10px] sm:text-[27px] font-semibold text-neutral1/60">
              {getLabel('lCollateralise')}
            </p>
          }
          end={
            <p className="text-[10px] sm:text-[27px] font-semibold text-neutral1/60">
              {getLabel('lBorrow')}
            </p>
          }
        />
        <CrossChainContentRow
          start={
            <div className="flex items-center gap-x-1">
              <Image
                src={ImageAssets.SolTokenImage}
                alt="Sol Token Image"
                className="w-[24px] h-[24px] sm:w-[60px] sm:h-[60px]"
              />

              <p className="text-xs sm:text-[28px]">SOL</p>
            </div>
          }
          end={
            <div className="flex items-center gap-x-1">
              <Image
                src={ImageAssets.UsdcTokenImage}
                alt="Usdc Token Image"
                className="w-[24px] h-[24px] sm:w-[60px] sm:h-[60px]"
              />
              <p className="text-xs sm:text-[28px]">USDC</p>
            </div>
          }
        />
        <CrossChainContentRow
          start={
            <p className="text-[9px] sm:text-[24px] font-semibold text-neutral1/50">
              {getLabel('lOn')}
            </p>
          }
          end={
            <p className="text-[9px] sm:text-[24px] font-semibold text-neutral1/50">
              {getLabel('lOn')}
            </p>
          }
        />
        <CrossChainContentRow
          start={
            <Image
              src={ImageAssets.SolanaLogoImage}
              alt="Solana Logo Image"
              className="h-[12px] sm:h-[30px] w-auto sm:h-auto"
            />
          }
          end={
            <Image
              src={ImageAssets.MonadLogoImage}
              alt="Monad Logo Image"
              className="h-[19px] sm:h-[30px] w-auto sm:h-auto"
            />
          }
        />
      </div>
    </div>
  );
};

export default CrossChainContent;

const CrossChainContentRow: React.FC<CrossChainContentRowProps> = ({
  end,
  start,
  className,
  ...otherProps
}) => {
  return (
    <div className={twMerge('space-between-root', className)} {...otherProps}>
      {start}
      {end}
    </div>
  );
};

interface CrossChainContentRowProps extends ComponentPropsWithoutRef<'div'> {
  start: ReactNode;
  end: ReactNode;
}

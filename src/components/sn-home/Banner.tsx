'use client';

import React, { ComponentPropsWithoutRef } from 'react';
import { ImageAssets } from 'public';
import { PathConstant } from '@/const';
import { ArrowUpLineIcon } from '../icons';
import { twJoin, twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Link from 'next/link';

const Banner: React.FC<ComponentPropsWithoutRef<'div'>> = ({ className }) => {
  return (
    <div
      className={twMerge(
        'relative',
        'max-w-[1300px]',
        'mx-auto px-4 lg:px-0',
        'bg-cover bg-center bg-no-repeat',
        className,
      )}
    >
      <Image
        src={ImageAssets.LogoEnso3DImage}
        alt=""
        className="w-[768px] max-w-[768px] absolute top-[120px] left-1/2 -translate-x-1/2 z-0"
      />

      <div
        className={twJoin(
          'pt-16 sm:pt-[200px] mx-auto',
          'flex flex-col items-center',
        )}
      >
        <div
          className={twMerge(
            ' w-full sm:w-fit',
            'p-[1px] mb-[75px]',
            'bg-[#B848F7] sm:rounded-full',
          )}
        >
          <Link
            href={PathConstant.LAUNCHING_MOVEMENT_LINK}
            className={twJoin(
              'w-full',
              'px-4 py-2',
              'w-fit h-fit',
              'bg-claimButton',
              'sm:rounded-full',
              'flex items-center gap-x-3 justify-between',
              'hover:shadow-shadowClaimButton',
            )}
            target="_blank"
          >
            <Image
              src={ImageAssets.EnsoNoBackgroundLogo}
              alt=""
              width={28}
              height={28}
            />
            <p className="z-10">Launching on Movement Testnet – 23rd August</p>
            <ArrowUpLineIcon className="rotate-90" />
          </Link>
        </div>

        <span
          className={twJoin(
            'sm:text-[64px] sm:w-[453px]',
            'text-[32px] font-bold w-[227px] text-center',
          )}
        >
          Lend & borrow with
          <p className="inline-block gradient-text ml-2.5">certainty</p>
        </span>
        <p className="text-center mt-4 text-neutral4  sm:text-lg">
          Set your own fixed interest rate and keep it stable throughout,
          shielded from market fluctuations.
        </p>

        <div
          className={twMerge(
            'bg-[#B848F7] rounded-full p-[1px] mt-8 mb-[75px]',
          )}
        >
          <Link
            href={PathConstant.LAUNCH_APP_LINK}
            target="_blank"
            className={twMerge(
              'px-4 py-2',
              'rounded-full',
              'w-fit h-fit',
              'font-semibold',
              'bg-claimButton',
              'flex items-center gap-x-2',
              'hover:shadow-shadowClaimButton',
              className,
            )}
          >
            <span className="z-10">Launch App</span>
            <ArrowUpLineIcon className="rotate-90" />
          </Link>
        </div>

        <Image
          src={ImageAssets.BestOfferImage}
          alt=""
          className="hidden sm:block z-10"
        />
      </div>
    </div>
  );
};

export default Banner;

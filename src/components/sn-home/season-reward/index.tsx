import React, { ComponentPropsWithoutRef, FC } from 'react';
import { ImageAssets } from 'public';
import { FormatUtils } from '@/utils';
import { twJoin, twMerge } from 'tailwind-merge';

import CommunityMembers from './CommunityMembers';
import Image from 'next/image';
import Link from 'next/link';

const SeasonReward: FC<ComponentPropsWithoutRef<'div'>> = ({
  className,
  ...otherProps
}) => {
  return (
    <div
      className={twMerge(
        'w-full',
        'mb-20 mt-10 sm:-mt-20',
        'flex flex-col items-center',
        className,
      )}
      {...otherProps}
    >
      <div
        className={twJoin(
          'hidden lg:block',
          'py-1.5 px-4 mb-2',
          'text-white/50 text-sm',
          'rounded-full border border-white/10 bg-white/5',
        )}
      >
        HURRY UP
      </div>
      <p className="text-2xl sm:text-[40px] font-medium">Season 1 Reward</p>
      <Image
        src={ImageAssets.HexaEnsofiLogoImage}
        alt=""
        width={200}
        height={200}
      />

      <p className={twJoin('text-[32px] text-[48px] font-bold gradient-text')}>
        {FormatUtils.formatNumber(Number(process.env.PULL_REWARD))} $ENS
      </p>

      <p className="sm:text-xl text-neutral4 text-center w-2/3 my-5">
        EnsoFi is geared toward bringing new users to the platform, and
        rewarding them for productive product usage.
      </p>

      <Link
        target="_blank"
        href={
          'https://ensofi.gitbook.io/ensofi/ecosystem-incentive/season-1-usdens-reward'
        }
        className={twJoin(
          'px-4 py-2',
          'rounded-full',
          'bg-registerButton',
          'text-sm font-semibold',
          'border border-purple2',
          'flex items-center gap-x-2',
        )}
      >
        <Image src={ImageAssets.StarImage} alt="" width={14} />
        Join season
      </Link>

      <CommunityMembers />
    </div>
  );
};

export default SeasonReward;

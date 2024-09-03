import React, { ComponentPropsWithoutRef, FC } from 'react';
import { ImageAssets } from 'public';
import { FormatUtils } from '@/utils';
import { useAppContext } from '@/context';
import { twJoin, twMerge } from 'tailwind-merge';

import Claim from '../claim';
import Image from 'next/image';
import Community from './Community';

const SeasonReward: FC<ComponentPropsWithoutRef<'div'>> = () => {
  const { totalMinted } = useAppContext();

  return (
    <div
      className={twMerge(
        'bg-cover bg-center bg-no-repeat w-[644px] h-[689px] sm:h-[581px]',
        'flex flex-col items-center',
        'relative backdrop-blur-lg',
      )}
      style={{
        backgroundImage: "url('/images/mint/img-bg-season-reward.svg')",
      }}
    >
      <Image
        src={ImageAssets.HexaEnsofiLogoImage}
        alt=""
        className={twJoin(
          'absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2',
          'w-[160px] h-[160px] sm:w-[200px] sm:h-[200px]',
        )}
      />

      <Image
        src={ImageAssets.TwinkleImage}
        alt=""
        className="absolute top-0 left-0"
      />

      <div
        className={twJoin(
          'px-[167px] sm:px-[100px] ',
          'mt-[72px]',
          'flex flex-col items-center',
        )}
      >
        <p className="text-2xl sm:text-[32px] font-medium">Season 1 Reward</p>
        <p className="gradient-text text-[38px] sm:text-[55px] font-extrabold">
          {FormatUtils.formatNumber(Number(process.env.PULL_REWARD))} $ENS
        </p>
        <Image src={ImageAssets.CardDivider} alt="" className="my-10" />
        <p className="text-2xl sm:text-4xl font-semibold">
          EnsoFi Boosting Pass
        </p>
        <p className="text-neutral4 mt-4 mb-6 text-center">
          We’re partnering with 30+ communities to distribute free EnsoFi
          Boosting Pass to members.
        </p>
      </div>

      <Community />

      <p className="font-semibold mt-6 text-neutral1/50 mb-8">
        Claimed: {FormatUtils.formatNumber(totalMinted)}
      </p>

      <Claim className="sm:hidden" />
    </div>
  );
};

export default SeasonReward;

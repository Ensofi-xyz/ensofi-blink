'use client';

import React from 'react';
import { ImageAssets } from 'public';
import { PathConstant } from '@/const';
import { useTranslation } from 'react-i18next';
import { twJoin, twMerge } from 'tailwind-merge';
import { DiscordIcon, TwitterIcon } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

const MainLayoutFooter = () => {
  const { t: getLabel } = useTranslation();

  return (
    <div
      className={twMerge(
        'relative',
        'w-full h-full',
        'lg:justify-end',
        'flex flex-col gap-y-12 bg-black2',
      )}
    >
      <div
        className={twJoin(
          'bg-neutral1/5',
          'py-4 h-full w-full',
          'flex flex-col gap-y-3 items-center',
        )}
      >
        <p className="text-base font-medium text-neutral1/40">
          {getLabel('lPoweredBy')}
        </p>
        <div
          className={twJoin(
            'sm:flex-row sm:gap-x-14',
            'flex flex-col items-center gap-y-9',
          )}
        >
          <Image
            src={ImageAssets.WormholeLogoImage}
            alt="WormholeLogoImage"
            height={27}
          />
          <Image
            src={ImageAssets.PythLogoImage}
            alt="PythLogoImage"
            height={40}
          />
          <Image
            src={ImageAssets.CircleLogoImage}
            alt="CircleLogoImage"
            height={40}
          />
        </div>

        <p className="text-white/40 mt-5">©2024 EnsoFi. All rights reserved</p>
        <div className="sm:flex items-center gap-x-6 mb-4 hidden">
          <Link href={PathConstant.TWITTER_URL} target="_blank">
            <TwitterIcon width={24} />
          </Link>
          <Link href={PathConstant.DISCORD_LINK} target="_blank">
            <DiscordIcon width={24} />
          </Link>
        </div>
      </div>
      <div className="h-[2px] bg-dividerBg w-full absolute top-0 left-0" />
    </div>
  );
};

export default MainLayoutFooter;

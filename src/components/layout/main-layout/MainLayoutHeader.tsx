'use client';

import React from 'react';
import { ImageAssets } from 'public';
import { PathConstant } from '@/const';
import { twJoin } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';
import Share from './Share';
import Image from 'next/image';

const MainLayoutHeader = () => {
  const { t: getLabel } = useTranslation();

  return (
    <div
      className={twJoin(
        'z-50',
        'sm:rounded-full',
        'space-between-root',
        'shadow-shadowHeader',
        'lg:max-w-[904px] w-full',
        'py-3 px-6 mx-auto sm:mt-6',
        'bg-white/5 backdrop-blur-xl',
      )}
    >
      <Link href={PathConstant.ROOT} className="flex items-center gap-x-3">
        <Image
          priority
          height={40}
          alt="EnsoFi logo"
          className="w-auto h-auto"
          width={40}
          src={ImageAssets.EnsoLogoImage}
        />
        <p className="text-[24px] font-semibold text-purple1">ENSOFI</p>
      </Link>

      <div className="flex items-center gap-x-5">
        <Share />
        <Link
          target="_blank"
          href={'https://beta.ensofi.xyz'}
          className={twJoin(
            'px-4 py-2',
            'rounded-full',
            'bg-registerButton',
            'text-sm font-semibold',
            'border border-purple2',
          )}
        >
          {getLabel('lJoinBeta')}
        </Link>
      </div>
    </div>
  );
};

export default MainLayoutHeader;

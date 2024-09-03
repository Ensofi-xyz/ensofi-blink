'use client';

import React, { FC, ComponentPropsWithoutRef } from 'react';
import { AppConstant } from '@/const';
import { useWindowSize } from '@/hooks';
import { twMerge } from 'tailwind-merge';
import {
  BlogIcon,
  DiscordIcon,
  DocumentIcon,
  TwitterIcon,
} from '@/components/icons';
import Link from 'next/link';

const Share: FC<ShareProps> = ({
  isHeader = true,
  className,
  ...otherProps
}) => {
  const { windowWidth } = useWindowSize();

  return (
    <div
      className={twMerge(
        'text-neutral3/50',
        'items-center gap-x-5',
        windowWidth <= AppConstant.BREAK_POINTS.sm && isHeader
          ? 'hidden'
          : 'flex',
        className,
      )}
      {...otherProps}
    >
      <Link target="_blank" href={'https://twitter.com/Ensofi_xyz'}>
        <TwitterIcon />
      </Link>

      <Link target="_blank" href={'https://discord.com/invite/HXbUK4qfKd'}>
        <DiscordIcon />
      </Link>

      <Link
        target="_blank"
        href={'https://mirror.xyz/0x6c97fDa263bda87dec97d43BCc21356197E011ae'}
      >
        <BlogIcon />
      </Link>

      <Link
        target="_blank"
        href={'https://enso-finance.gitbook.io/enso-finance'}
      >
        <DocumentIcon />
      </Link>
    </div>
  );
};

export default Share;

interface ShareProps extends ComponentPropsWithoutRef<'div'> {
  isHeader?: boolean;
}

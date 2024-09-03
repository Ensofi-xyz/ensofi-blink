'use client';

import React, { ComponentPropsWithoutRef } from 'react';
import { PathConstant } from '@/const';
import { usePathname } from 'next/navigation';
import { CaretIcon } from '@/components/icons';
import { twJoin, twMerge } from 'tailwind-merge';
import Link from 'next/link';
import ResourcesDropdown from './ResourcesDropdown';

const DesktopNavigation = () => {
  return (
    <div className={twJoin('ml-6', 'flex items-center')}>
      <DesktopLink href={PathConstant.ROOT}>Home</DesktopLink>
      <DesktopLink href={PathConstant.DOCS} target="_blank">
        Docs
      </DesktopLink>
      <ResourcesDropdown>
        <DesktopLink className="space-between-root">
          Resources
          <CaretIcon className="ml-2" />
        </DesktopLink>
      </ResourcesDropdown>
    </div>
  );
};

export default DesktopNavigation;

export const DesktopLink: React.FC<ComponentPropsWithoutRef<'a'>> = ({
  href,
  children,
  className,
  ...otherProps
}) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href || '#'}
      className={twMerge(
        'text-sm',
        'py-2 px-6',
        'rounded-lg',
        'font-semibold',
        'hover:text-neutral1',
        'focus-visible:outline-none',
        'hover:bg-characterBackground3',
        isActive ? 'text-neutral1 bg-characterBackground3' : 'text-neutral5',
        className,
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

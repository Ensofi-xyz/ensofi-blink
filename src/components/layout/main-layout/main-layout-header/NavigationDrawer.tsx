'use client';

import React, { ComponentPropsWithoutRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { twJoin, twMerge } from 'tailwind-merge';
import { AppConstant, PathConstant } from '@/const';

import { DiscordIcon, TwitterIcon, HamburgerIcon } from '@/components/icons';
import { useWindowSize } from '@/hooks';
import Drawer from 'react-modern-drawer';
import Link from 'next/link';
import 'react-modern-drawer/dist/index.css';

const NavigationDrawer = () => {
  const { windowWidth } = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggleDrawer}>
        <HamburgerIcon className={twJoin('text-neutral3', 'cursor-pointer')} />
      </button>

      <Drawer
        open={isOpen}
        onClose={handleToggleDrawer}
        duration={200}
        direction="left"
        overlayOpacity={0}
        size={windowWidth <= AppConstant.BREAK_POINTS.sm ? '100vw' : 200}
        className={twJoin(
          '!pb-8',
          '!top-[64px] !bottom-auto',
          '!h-[calc(100svh-64px)]',
          '!bg-characterBackground3',
        )}
      >
        <div className={twJoin('gap-y-1', 'flex flex-col items-center h-full')}>
          <NavigationItem href={PathConstant.ROOT} onClick={handleToggleDrawer}>
            Home
          </NavigationItem>
          <NavigationItem
            href={PathConstant.DOCS}
            onClick={handleToggleDrawer}
            target="_blank"
          >
            Docs
          </NavigationItem>
          <NavigationItem href={''} onClick={handleToggleDrawer}>
            Support
          </NavigationItem>

          <div className="flex item-center gap-x-8 mt-auto">
            <NavigationItem
              href={PathConstant.TWITTER_URL}
              target="_blank"
              className="p-0"
            >
              <TwitterIcon />
            </NavigationItem>
            <NavigationItem
              href={PathConstant.DISCORD_LINK}
              target="_blank"
              className="p-0"
            >
              <DiscordIcon />
            </NavigationItem>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default NavigationDrawer;

export const NavigationItem: React.FC<ComponentPropsWithoutRef<'a'>> = ({
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
        'py-3 px-6',
        'w-full h-11',
        'hover:text-neutral1',
        'text-sm font-semibold',
        'flex items-center justify-center gap-x-1',
        'focus-visible:outline-none',
        'hover:bg-characterBackground2',
        isActive
          ? 'text-neutral1 bg-characterBackground2'
          : 'text-neutral5 bg-transparent',
        className,
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

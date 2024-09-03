'use client';

import React, { ComponentPropsWithoutRef, Fragment, useState } from 'react';
import { usePathname } from 'next/navigation';
import { twJoin, twMerge } from 'tailwind-merge';
import { AppConstant, PathConstant } from '@/const';

import {
  ChatIcon,
  BlogIcon,
  ArrowIcon,
  DiscordIcon,
  TwitterIcon,
  DocumentIcon,
  HamburgerIcon,
} from '@/components/icons';
import Drawer from 'react-modern-drawer';
import Link from 'next/link';
import 'react-modern-drawer/dist/index.css';
import { useWindowSize } from '@/hooks';

const NavigationDrawer = () => {
  const { windowWidth } = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);
  const [isShowResources, setIsShowResources] = useState(true);

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggleDrawer}>
        <HamburgerIcon
          className={twJoin('mr-4 sm:mr-6', 'text-neutral3', 'cursor-pointer')}
        />
      </button>

      <Drawer
        open={isOpen}
        onClose={handleToggleDrawer}
        duration={200}
        direction="left"
        overlayOpacity={0}
        size={windowWidth <= AppConstant.BREAK_POINTS.sm ? '100vw' : 200}
        className={twJoin(
          '!top-auto !bottom-0',
          '!h-[calc(100svh-64px)]',
          '!bg-characterBackground3',
        )}
      >
        <div className={twJoin('gap-y-1', 'flex flex-col items-start')}>
          <NavigationItem href={PathConstant.ROOT} onClick={handleToggleDrawer}>
            Home
          </NavigationItem>
          <NavigationItem
            className="space-between-root"
            onClick={() => setIsShowResources(!isShowResources)}
          >
            <span>Resources</span>
            <ArrowIcon
              className={twJoin(isShowResources ? '-rotate-180' : '')}
            />
          </NavigationItem>

          <>
            {isShowResources ? (
              <>
                <NavigationItem
                  href={PathConstant.DOCUMENT_LINK}
                  target="_blank"
                >
                  <DocumentIcon /> Documents
                </NavigationItem>

                <NavigationItem href={PathConstant.TWITTER_URL} target="_blank">
                  <TwitterIcon /> Twitter
                </NavigationItem>

                <NavigationItem
                  href={PathConstant.DISCORD_LINK}
                  target="_blank"
                >
                  <DiscordIcon /> Discord
                </NavigationItem>

                <NavigationItem
                  href={PathConstant.SUPPORT_LINK}
                  target="_blank"
                >
                  <ChatIcon />
                  lSupport
                </NavigationItem>

                <NavigationItem href={PathConstant.BLOG_LINK} target="_blank">
                  <BlogIcon /> Blog
                </NavigationItem>
              </>
            ) : (
              <Fragment />
            )}
          </>
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
        'flex items-center gap-x-1',
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

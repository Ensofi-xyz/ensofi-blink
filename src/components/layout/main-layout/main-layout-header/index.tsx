'use client';

import { ImageAssets } from 'public';
import { twJoin } from 'tailwind-merge';
import { useWindowSize } from '@/hooks';
import { usePathname } from 'next/navigation';
import { AppConstant, PathConstant } from '@/const';

import Link from 'next/link';
import Image from 'next/image';
import NavigationDrawer from './NavigationDrawer';
import DesktopNavigation from './DesktopNavigation';

const MainLayoutHeader = () => {
  const pathname = usePathname();
  const { windowWidth } = useWindowSize();

  return (
    <div
      className={twJoin(
        pathname !== PathConstant.MINT && 'bg-white/5 backdrop-blur-sm',
        'h-16 w-full ',
        'fixed z-50 top-0 left-1/2 -translate-x-1/2',
      )}
    >
      <div
        className={twJoin(
          'py-3 px-6 mx-auto',
          'center-vertical-root',
          'h-16 sm:max-w-[1300px]',
        )}
      >
        <div className="w-full flex items-center justify-between sm:justify-start">
          <Link href={PathConstant.ROOT} className="flex items-center">
            <Image
              priority
              height={48}
              alt="EnsoFi logo"
              width={48}
              src={ImageAssets.HexaEnsofiLogoImage}
            />
            <Image
              priority
              height={52}
              alt="EnsoFi logo"
              className="hidden sm:block"
              width={105}
              src={ImageAssets.EnsoTextLogoImage}
            />
          </Link>

          <>
            {windowWidth <= AppConstant.BREAK_POINTS.sm ? (
              <NavigationDrawer />
            ) : (
              <DesktopNavigation />
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default MainLayoutHeader;

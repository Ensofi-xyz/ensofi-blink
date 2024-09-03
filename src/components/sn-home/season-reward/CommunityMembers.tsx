import React from 'react';
import { ImageAssets } from 'public';
import { PathConstant } from '@/const';
import { twJoin, twMerge } from 'tailwind-merge';

import Link from 'next/link';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

const CommunityMembers = () => {
  return (
    <div
      className={twMerge(
        'relative mt-11',
        'flex items-center lg:items-start flex-col lg:pr-[100px] ',
      )}
    >
      <span
        className={twJoin(
          'text-[32px] font-medium text-center:text-start',
          'lg:absolute lg:top-10 lg:left-20 lg:w-1/3 ',
        )}
      >
        <p className="inline-block gradient-text font-bold">Free</p> boosting
        pass NFTs to community members.
      </span>

      <div className="relative">
        <Image
          src={ImageAssets.LightImage}
          alt=""
          className="hidden lg:block"
        />
        <Link
          href={PathConstant.MINT}
          className={twJoin(
            'w-full sm:w-[360px] sm:h-[374px] lg:absolute lg:right-0 lg:top-0 ',
          )}
        >
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1400}
            transitionSpeed={1200}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.04}
            className="rounded-xl"
          >
            <Image
              src={ImageAssets.EnsofiBootingImage}
              alt=""
              className="max-w-[360px] rounded-xl"
            />
          </Tilt>
        </Link>
      </div>

      <div
        className={twJoin(
          'sm:w-1/2 ',
          'flex flex-col gap-y-5 items-center',
          'lg:absolute lg:bottom-0 lg:left-20  lg:items-start',
        )}
      >
        <div className="flex items-center w-full justify-center lg:justify-start">
          {LIST_COMMUNITY_MEMBER.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt=""
              width={48}
              height={48}
              className="border border-[#E0B3EF]/40 rounded-full -ml-3"
            />
          ))}
        </div>

        <p className="text-sm text-neutral5 w-2/3 text-center lg:text-start">
          We’re partnering with 30+ communities to distribute free EnsoFi
          Boosting Pass to members.
        </p>
      </div>
    </div>
  );
};

export default CommunityMembers;

const LIST_COMMUNITY_MEMBER = [
  ImageAssets.TensoriansLogoImage,
  ImageAssets.CryptoUndeadsLogoImage,
  ImageAssets.DappieGangLogoImage,
  ImageAssets.ClaynosaurzLogoImage,
  ImageAssets.Y00tsLogoImage,
  ImageAssets.SenseiLogoImage,
  ImageAssets.Wormhole2LogoImage,
  ImageAssets.MadLadsLogoImage,
  ImageAssets.SharxLogoImage,
  ImageAssets.SMBLogoImage,
  ImageAssets.PythNetworkLogoImage,
  ImageAssets.DeGodsLogoImage,
];

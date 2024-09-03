import React from 'react';
import { ImageAssets } from 'public';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

const AuditedBy = () => {
  return (
    <div
      className={twMerge(
        'w-full',
        'mt-[52px] sm:mt-[120px]',
        'flex flex-col items-center',
      )}
    >
      <p className="text-2xl sm:text-[40px] text-white/80 font-medium mb-7 sm:mb-14">
        Audited by
      </p>
      <Image
        src={ImageAssets.BlockApexImage}
        alt=""
        className="w-[257px] sm:w-[500px]"
      />
      <p className="text-2xl sm:text-[40px] text-white/80 font-medium mt-20 sm:mt-[120px]">
        Our Strategic Partners
      </p>
      <div className="w-full flex items-center justify-around lg:justify-between px-5 mt-12 sm:mt-14">
        <Image
          src={ImageAssets.MonkeDowImage}
          alt=""
          className="w-[167px] sm:w-[236px]"
        />
        <div className="flex flex-col gap-y-3 items-end hidden lg:flex">
          <Image src={ImageAssets.SpringXImage} alt="" width={315} />
          <div className="flex items-center">
            <p>Backed by</p>
            <Image src={ImageAssets.SolanaFoundation} alt="" height={50} />
            <Image src={ImageAssets.BuidlerDaoImage} alt="" height={50} />
          </div>
        </div>
        <Image
          src={ImageAssets.SupperTeamImage}
          alt=""
          className="w-[105px] sm:w-[148px]"
        />
      </div>

      <div className="w-full sm:w-[417px] mt-10 flex flex-col gap-y-3 items-center sm:items-end lg:hidden">
        <Image src={ImageAssets.SpringXImage} alt="" width={315} />
        <div className="flex items-center">
          <p className="text-lg">Backed by</p>
          <Image src={ImageAssets.SolanaFoundation} alt="" height={50} />
          <Image src={ImageAssets.BuidlerDaoImage} alt="" height={50} />
        </div>
      </div>
    </div>
  );
};

export default AuditedBy;

'use client';

import React from 'react';
import { SeasonReward, Claim } from '@/components/sn-mint';

const MintPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:pt-[156px] items-center justify-end sm:justify-start">
      <SeasonReward />
      <Claim className="!hidden sm:!flex" />
    </div>
  );
};

export default MintPage;

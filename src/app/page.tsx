'use client';

import React from 'react';
import { MainLayoutFooter } from '@/components/layout/main-layout';
import { twJoin } from 'tailwind-merge';
import { Banner, Blog, EnsofiUnique } from '@/components/sn-home';
import SeasonReward from '@/components/sn-home/season-reward';
import MagicHappens from '@/components/sn-home/MagicHappens';
import AuditedBy from '@/components/sn-home/AuditedBy';

const Home = () => {
  return (
    <div
      id="home"
      className={twJoin('bg-cover bg-center bg-no-repeat', 'w-screen bg-black')}
      style={{ backgroundImage: "url('/images/home/img-noise-background.svg" }}
    >
      <Banner />
      <div
        className={twJoin(
          'mx-auto',
          'px-4 lg:px-0',
          'overflow-x-hidden',
          'w-full max-w-[1300px]',
          'relative flex flex-col',
        )}
      >
        <SeasonReward />
        <MagicHappens />
        <EnsofiUnique />
        <AuditedBy />
        <Blog />
      </div>
      <MainLayoutFooter />
    </div>
  );
};

export default Home;

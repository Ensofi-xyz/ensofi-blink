import React from 'react';
import { ImageAssets } from 'public';
import Image from 'next/image';

import Marquee from 'react-marquee-slider';

const Community = () => {
  return (
    <Marquee
      velocity={12}
      resetAfterTries={200}
      scatterRandomly={false}
      children={LIST_ICON.map((item, index) => (
        <Image
          key={index}
          src={item}
          alt=""
          className="w-[56px] h-[56px] border border-[#E0B3EF]/40 rounded-full mr-1.5"
        />
      ))}
      direction={'rtl'}
      onInit={() => {
        return;
      }}
      onFinish={() => {
        return;
      }}
    />
  );
};

export default Community;

const LIST_ICON = [
  ImageAssets.SuperTeamLogoImage,
  ImageAssets.BoDoggosLogoImage,
  ImageAssets.FoxLogoImage,
  ImageAssets.PikeniansLogoImage,
  ImageAssets.FroganaLogoImage,
  ImageAssets.SagaPhone,
  ImageAssets.AssetdashLogoImage,
  ImageAssets.DegenerateApeAcademyLogoImage,
  ImageAssets.SagaMonkesLogoImage,
  ImageAssets.PortalsLogoImage,
  ImageAssets.TheBackwoodsLogoImage,
  ImageAssets.CyberFrogsLogoImage,
  ImageAssets.CryptoUndeadsLogoImage,
  ImageAssets.GGSGLogoImage,
  ImageAssets.MutantmonLogoImage,
  ImageAssets.GigaBudsLogoImage,
  ImageAssets.Ancient8LogoImage,
  ImageAssets.OvolsLogoImage,
  ImageAssets.NamasteLogoImage,
  ImageAssets.OkayBearsLogoImage,
  ImageAssets.HomeownersLogoImage,
  ImageAssets.MadLadsLogoImage,
  ImageAssets.ClaynosaurzLogoImage,
  ImageAssets.DappieGangLogoImage,
  ImageAssets.SharxLogoImage,
  ImageAssets.PythNetworkLogoImage,
  ImageAssets.DeGodsLogoImage,
  ImageAssets.Y00tsLogoImage,
  ImageAssets.TensoriansLogoImage,
  ImageAssets.SMBLogoImage,
  ImageAssets.SenseiLogoImage,
  ImageAssets.DePioneersLogoImage,
  ImageAssets.Wormhole2LogoImage,
  ImageAssets.HawkSightLogoImage,
];

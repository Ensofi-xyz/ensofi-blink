import React, { ComponentPropsWithoutRef, FC } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

const MagicHappens: FC<ComponentPropsWithoutRef<'div'>> = ({
  className,
  ...otherProps
}) => {
  return (
    <div
      className={twMerge(
        'w-full',
        'flex flex-col items-center gap-y-2',
        className,
      )}
      {...otherProps}
    >
      <div
        className={twJoin(
          'px-4 py-1.5 mb-4',
          'bg-white/10 text-white/50 text-sm',
          'rounded-full border border-white/5',
        )}
      >
        Magic Happens by ENSOFI
      </div>
      <p className="text-2xl sm:text-[40px] text-center">
        Here's more of what's coming
      </p>
    </div>
  );
};

export default MagicHappens;

import React, { ComponentPropsWithoutRef, useMemo } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

const CommonButton: React.FC<CommonButtonProps> = ({
  variant = CommonButtonVariantEnum.Primary,
  children,
  className,
  disabled,
  ...otherProps
}) => {
  const buttonVariantStyle = useMemo(() => {
    switch (variant) {
      case CommonButtonVariantEnum.Primary:
        return twJoin('bg-primary5', 'text-neutral1', 'border-primary5');
      case CommonButtonVariantEnum.Outlined:
        return twJoin('bg-neutral1', 'text-primary5', 'border-neutral3');
      default:
        return '';
    }
  }, [variant]);

  return (
    <button
      className={twMerge(
        'relative',
        'center-root',
        'border rounded',
        'py-2 px-3 md:px-4 md:py-3',
        'text-base font-inter',
        disabled ? 'opacity-80' : '',
        buttonVariantStyle,
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CommonButton;

export interface CommonButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: CommonButtonVariantEnum;
}

export enum CommonButtonVariantEnum {
  Primary = 'primary',
  Outlined = 'outlined',
}

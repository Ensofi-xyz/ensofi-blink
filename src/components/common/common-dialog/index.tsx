import React, { ReactNode } from 'react';
import { CloseIcon } from '@/components/icons';
import { twJoin, twMerge } from 'tailwind-merge';
import { Root, Portal, Overlay, Content } from '@radix-ui/react-dialog';

const CommonDialog: React.FC<CommonDialogProps> = ({
  isOpen,
  onClose,
  children,
  dialogTitle,
  titleClassName,
  overlayClassName,
  contentClassName,
}) => {
  return (
    <Root open={isOpen} onOpenChange={onClose}>
      <Portal>
        <Overlay
          className={twMerge(
            'z-10',
            'fixed top-0 left-0 right-0 bottom-0',
            'overflow-y-auto place-items-center bg-blackBlur',
            overlayClassName,
          )}
        />
        <Content
          className={twMerge(
            'z-20',
            'animate-popUp',
            'fixed top-1/2 left-1/2 p-6',
            'bg-characterBackground3 shadow-2xl',
            '-translate-x-1/2 -translate-y-1/2',
            'w-[90vw] max-w-[360px] max-h-[8-vh]',
            'border	rounded-lg border-slate-700',
            contentClassName,
          )}
        >
          <div className="relative">
            <p className={twMerge('text-black1', titleClassName)}>
              {dialogTitle}
            </p>
            <CloseIcon
              className={twJoin(
                'text-neutral1',
                'absolute right-0 top-0 cursor-pointer',
              )}
              onClick={onClose}
            />
          </div>

          {children}
        </Content>
      </Portal>
    </Root>
  );
};

export default CommonDialog;

export interface CommonDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  dialogTitle: string;

  titleClassName?: string;
  overlayClassName?: string;
  contentClassName?: string;
}

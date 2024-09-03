import { SolanaWalletsEnum } from '@/models';

export const getSolanaWalletsProvider = (solWallet: SolanaWalletsEnum) => {
  if (typeof window === undefined) return undefined;

  switch (solWallet) {
    case SolanaWalletsEnum.Backpack:
      return window.backpack;

    case SolanaWalletsEnum.Phantom:
      if (!window?.phantom) return undefined;
      return window.phantom.solana;

    case SolanaWalletsEnum.Solflare:
      return window.solflare;

    default:
      return undefined;
  }
};

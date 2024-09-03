export interface UserInfoInterface {
  userName?: string;
  address?: string;
  email?: string;
}

export interface ObjectMultiLanguageProps {
  [x: string]: string;
}

export interface BlogDisplayInterface {
  title: string;
  digest: string;
  address: string;
  content: string;
  timePost: number;
  avatarUrl: string;
  imgPostUrl: string;
  posterName: string;
}

export interface HomeContextInterface {}

export enum SolanaWalletsEnum {
  Backpack = 'Backpack',
  Phantom = 'Phantom',
  Solflare = 'Solflare',
}

export interface MintStatusInterface {
  totalClaimable?: number;
  totalClaimed?: number;
}

export interface CreateMintInterface {
  transaction: string;
  totalClaim: number;
  totalRemain: number;
}

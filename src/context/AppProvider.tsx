'use client';

import React, {
  FC,
  useMemo,
  Dispatch,
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
  SetStateAction,
} from 'react';
import { CommonUtils } from '@/utils';
import {
  SolanaWalletsEnum,
  UserInfoInterface,
  BlogDisplayInterface,
  MintStatusInterface,
} from '@/models';
import '@/language';
import { AppConstant } from '@/const';
import useAuthHook from '@/hooks/useAuthHook';
import useClaim from '@/hooks/useClaim';

const INITIAL_STATE = {} as AppContextProps;

const AppContext = createContext(INITIAL_STATE);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: FC<AppProviderProps> = ({
  children,
  listBlogData,
}) => {
  const [userInfo, setUserInfo] = useState<UserInfoInterface>({});
  const [walletAddress, setWalletAddress] = useState('');
  const [totalMinted, setTotalMinted] = useState(0);
  const [mintStatus, setMintStatus] = useState({} as MintStatusInterface);

  const { handleConnectSolWallet } = useAuthHook();
  const { handleGetTotalMinted, handleGetMintStatus } = useClaim();

  const listBlog = useMemo(() => {
    return CommonUtils.refactorListBlog(listBlogData);
  }, [listBlogData]);

  const handleDisconnect = () => {
    setWalletAddress('');
    localStorage.removeItem(AppConstant.SOLANA_PROVIDER);
  };

  const handleConnectWallet = async () => {
    const currentWalletProvider = localStorage.getItem(
      AppConstant.SOLANA_PROVIDER,
    ) as SolanaWalletsEnum;

    if (!currentWalletProvider) return;

    const res = await handleConnectSolWallet(currentWalletProvider);

    setWalletAddress(res);
  };
  const phantomProvider = CommonUtils.getPhantomProvider();
  phantomProvider?.on('accountChanged', () => {
    handleDisconnect();
  });

  const backpackProvider = CommonUtils.getBackpackProvider();
  backpackProvider?.on('accountChanged', () => {
    handleDisconnect();
  });

  const solflareProvider = CommonUtils.getSolflareProvider();
  solflareProvider?.on('disconnect', () => {
    handleDisconnect();
  });

  const handleGetMined = async () => {
    const res = await handleGetTotalMinted();

    setTotalMinted(res);
  };

  const getMintStatus = async () => {
    const res = await handleGetMintStatus(walletAddress);
    setMintStatus(res);
  };

  useEffect(() => {
    handleConnectWallet();
    handleGetMined();
  }, []);

  useEffect(() => {
    if (!walletAddress) return;
    getMintStatus();
  }, [walletAddress]);

  return (
    <AppContext.Provider
      value={{
        userInfo: userInfo,
        setUserInfo: setUserInfo,
        listBlog,
        walletAddress,
        setWalletAddress,

        mintStatus,
        totalMinted,
        getMintStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

interface AppProviderProps {
  children: ReactNode;
  listBlogData: any;
}

interface AppContextProps {
  userInfo: UserInfoInterface;
  setUserInfo: Dispatch<SetStateAction<UserInfoInterface>>;

  listBlog: BlogDisplayInterface[];

  walletAddress: string;
  setWalletAddress: Dispatch<SetStateAction<string>>;

  mintStatus: MintStatusInterface;
  totalMinted: number;
  getMintStatus: () => void;
}

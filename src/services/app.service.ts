import { CommonUtils } from "@/utils";
import { ApiConstant } from "@/const";
import { ApiResponse } from "apisauce";
import { createDappServices } from "./config";
import { BaseResponseData } from "@/utils/common.utils";
import { CreateMintInterface, MintStatusInterface } from "@/models";

export const getMintStatus = async (walletAddress: string) => {
  const apiUrl = `${ApiConstant.GET_MINT_STATUS}/${walletAddress}`;

  const response: ApiResponse<BaseResponseData<MintStatusInterface>> =
    await createDappServices().get(apiUrl);

  const responseData = CommonUtils.getDappServicesResponseData(response);

  if (responseData) {
    return responseData.data as MintStatusInterface;
  } else {
    return {
      totalClaimable: 1,
      totalClaimed: 0,
    } as MintStatusInterface;
  }
};

export const getTotalMinted = async () => {
  const apiUrl = ApiConstant.GET_TOTAL_MINTED;

  const response: ApiResponse<BaseResponseData<{ totalMinted: number }>> =
    await createDappServices().get(apiUrl);

  const responseData = CommonUtils.getDappServicesResponseData(response) as any;

  if (responseData) {
    return responseData.data?.totalMinted;
  } else {
    return 0;
  }
};

export const createMint = async (walletAddress: string) => {
  const apiUrl = ApiConstant.CREATE_MINT;

  const response: ApiResponse<BaseResponseData<CreateMintInterface>> =
    await createDappServices().post(apiUrl, { walletAddress });

  const responseData = CommonUtils.getDappServicesResponseData(response) as any;

  if (responseData) {
    return responseData.data as CreateMintInterface;
  } else {
    return {} as CreateMintInterface;
  }
};

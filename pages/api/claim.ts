import type { NextApiRequest, NextApiResponse } from "next";
import { ActionPostResponse } from "@solana/actions";
import { getOwnerKeypair, prepareMintTransaction } from "@/utils/nft.utils";
import { connection } from "@/utils/connection.utils";
import { PublicKey } from "@solana/web3.js";
import * as nftSample from "@/const/nft_args.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ActionPostResponse>
) {
  console.log(req.body);
  if (req.method == "POST") {
    const ownerWallet = getOwnerKeypair();

    const nftArgs = {
      ...nftSample,
      creators: [
        {
          ...nftSample.creators[0],
          address: new PublicKey(nftSample.creators[0].address),
        },
        {
          ...nftSample.creators[1],
          address: new PublicKey(nftSample.creators[1].address),
        },
      ],
    };
    const transaction = await prepareMintTransaction(
      connection,
      nftArgs,
      ownerWallet,
      new PublicKey(process.env.MERKEL_TREE_ACCOUNT as string),
      new PublicKey(process.env.COLLECTION_MINT as string),
      new PublicKey(process.env.COLLECTION_METADATA as string),
      new PublicKey(process.env.COLLECTION_MASTER_EDITION as string),
      new PublicKey(req.body["account"])
    );

    const response: ActionPostResponse = {
      transaction: Buffer.from(transaction.serialize()).toString("base64"),
    };
    return res.status(200).json(response);
  } else if (req.method == "OPTIONS") {
    return res.status(200).json({ transaction: "ok" });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import { ActionGetResponse } from "@solana/actions";
import { getTotalMinted } from "@/utils/nft.utils";
import { Connection, PublicKey } from "@solana/web3.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ActionGetResponse | null>
) {
  if (req.method == "GET") {
    const totalMinted = await getTotalMinted(
      new Connection(process.env.RPC_URL as string),
      new PublicKey(process.env.MERKEL_TREE_ACCOUNT as string)
    );

    const icon =
      "https://blush-deep-leech-408.mypinata.cloud/ipfs/QmVCqCDQaMxyaRcMD8BPFJcpNLubD7thi4Lo4KiF3zF9e8";
    const response: ActionGetResponse = {
      icon,
      label: `Claim`,
      title: "Ready to Boost 20% with EnsoFi Pass?",
      description: `Claimed ${totalMinted}`,
      links: {
        actions: [
          {
            href: `/api/claim`,
            label: "Claim",
          },
        ],
      },
    };
    res.status(200).json(response);
  } else {
    res.status(200).json(null);
    return;
  }
}

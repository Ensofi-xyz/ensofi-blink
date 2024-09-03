import {
  ConcurrentMerkleTreeAccount,
  SPL_ACCOUNT_COMPRESSION_PROGRAM_ID,
  SPL_NOOP_PROGRAM_ID,
} from "@solana/spl-account-compression";
import {
  Keypair,
  PublicKey,
  Connection,
  VersionedTransaction,
} from "@solana/web3.js";

import {
  createMintToCollectionV1Instruction,
  MetadataArgs,
  PROGRAM_ID as BUBBLEGUM_PROGRAM_ID,
} from "@metaplex-foundation/mpl-bubblegum";
import { PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata";
import { prepareTransaction } from "./transaction.utils";
import base58 from "bs58";

export const prepareMintTransaction = async (
  connection: Connection,
  nftArgs: MetadataArgs,
  ownerKeypair: Keypair,
  merkleTree: PublicKey,
  collectionMint: PublicKey,
  collectionMetadata: PublicKey,
  collectionMasterEditionAccount: PublicKey,
  payer: PublicKey
): Promise<VersionedTransaction> => {
  const [treeAuthority] = await PublicKey.findProgramAddress(
    [merkleTree.toBuffer()],
    BUBBLEGUM_PROGRAM_ID
  );
  const [bgumSigner] = await PublicKey.findProgramAddress(
    [Buffer.from("collection_cpi", "utf8")],
    BUBBLEGUM_PROGRAM_ID
  );
  const mintIx = createMintToCollectionV1Instruction(
    {
      merkleTree: merkleTree,
      treeAuthority,
      treeDelegate: ownerKeypair.publicKey,
      payer: payer,
      leafDelegate: payer,
      leafOwner: payer,
      compressionProgram: SPL_ACCOUNT_COMPRESSION_PROGRAM_ID,
      logWrapper: SPL_NOOP_PROGRAM_ID,
      collectionAuthority: ownerKeypair.publicKey,
      collectionAuthorityRecordPda: BUBBLEGUM_PROGRAM_ID,
      collectionMint: collectionMint,
      collectionMetadata: collectionMetadata,
      editionAccount: collectionMasterEditionAccount,
      bubblegumSigner: bgumSigner,
      tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
    },
    {
      metadataArgs: Object.assign(nftArgs, {
        collection: { key: collectionMint, verified: true },
      }),
    }
  );

  const tx = await prepareTransaction(connection, [mintIx], payer);
  tx.sign([ownerKeypair]);

  return tx;
};

export const getOwnerKeypair = (): Keypair => {
  const secretKey = process.env["SECRET_KEY"];
  if (!secretKey) {
    throw new Error(
      "Wallet secret key must be provided via SECRET_KEY env var"
    );
  }
  let decodedSecretKey;
  try {
    decodedSecretKey = base58.decode(secretKey);
  } catch {
    throw new Error(
      "Invalid secret key provided. Must be a base 58 encoded string."
    );
  }

  const ownerWallet = Keypair.fromSecretKey(decodedSecretKey);
  return ownerWallet;
};

export const getTotalMinted = async (
  connection: Connection,
  treeMint: PublicKey
): Promise<number> => {
  // Get the NFT mint ID from the merkle tree.
  const treeAccount = await ConcurrentMerkleTreeAccount.fromAccountAddress(
    connection,
    treeMint
  );
  if (treeAccount) {
    return treeAccount.tree.rightMostPath.index - 1;
  }
  return 0;
};

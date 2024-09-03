/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    SECRET_KEY: process.env.SECRET_KEY,
    MERKEL_TREE_ACCOUNT: process.env.MERKEL_TREE_ACCOUNT,
    COLLECTION_MINT: process.env.COLLECTION_MINT,
    COLLECTION_METADATA: process.env.COLLECTION_METADATA,
    COLLECTION_MASTER_EDITION: process.env.COLLECTION_MASTER_EDITION,
    DAPP_SERVICE_URL: process.env.DAPP_SERVICE_URL || "",
    PULL_REWARD: process.env.PULL_REWARD || "",
    RPC_URL: process.env.RPC_URL || "",
  },
  api: {
    externalResolver: true,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization, Accept-Encoding, Content-Encoding",
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/dapp-service/:path*",
        destination: `${process.env.DAPP_SERVICE_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;

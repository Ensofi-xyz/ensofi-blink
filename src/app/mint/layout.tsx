import React from 'react';

export const metadata = async () => {
  let totalMinted = 100;
  const statusRes = await fetch(
    `${process.env.DAPP_SERVICE_URL}/mint/statistic`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  if (statusRes.ok) {
    const res = await statusRes.json();
    totalMinted = res.data.totalMinted;
  }

  return {
    twitter: {
      card: 'summary_large_image',
      title: 'Ready to Boost 20% with EnsoFi Pass?',
      description: `Claimed ${totalMinted}`,
      site: '@EnsoFi_xyz',
      creator: '@EnsoFi_xyz',
      images: [
        'https://blush-deep-leech-408.mypinata.cloud/ipfs/QmVCqCDQaMxyaRcMD8BPFJcpNLubD7thi4Lo4KiF3zF9e8',
      ],
    },
    openGraph: {
      images: {
        url: 'https://blush-deep-leech-408.mypinata.cloud/ipfs/QmVCqCDQaMxyaRcMD8BPFJcpNLubD7thi4Lo4KiF3zF9e8',
        width: 400,
        height: 300,
      },
    },
  };
};

const MintLayout = async ({ children }: { children: any }) => {
  return (
    <div
      className="w-screen h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/mint/img-bg-mint.svg')" }}
    >
      <div className="w-full h-full overflow-y-scroll overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default MintLayout;

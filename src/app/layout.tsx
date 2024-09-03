import type { Metadata } from 'next';
import { twJoin } from 'tailwind-merge';
import { Inter } from 'next/font/google';
import { AppProvider, ErrorProvider } from '@/context';

import './globals.css';
import MainLayoutHeader from '@/components/layout/main-layout/main-layout-header';

export const metadata: Metadata = {
  title: 'Ensofi - Cross chain P2P Lending',
  description:
    'Empower individuals to customise interest rate and borrow assets across any chain seamlessly.',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const getListBlog = async () => {
  const myHeaders = new Headers();
  myHeaders.append('content-type', 'application/json');
  myHeaders.append('origin', 'https://mirror.xyz');

  const raw = JSON.stringify({
    operationName: 'ProjectPage',
    query:
      'query ProjectPage($projectAddress: String!, $limit: Int, $cursor: Int) {\n  projectFeed(projectAddress: $projectAddress, limit: $limit, cursor: $cursor) {\n    _id\n    domain\n    ens\n    theme {\n      accent\n      colorMode\n      __typename\n    }\n    displayName\n    ens\n    address\n    writingNFTs {\n      collectedCount\n      __typename\n    }\n    ...projectPage\n    ...publicationLayoutProject\n    __typename\n  }\n}\n\nfragment projectPage on ProjectType {\n  _id\n  address\n  avatarURL\n  description\n  displayName\n  domain\n  ens\n  twitterUsername\n  externalUrl\n  theme {\n    accent\n    colorMode\n    __typename\n  }\n  headerImage {\n    id\n    url\n    __typename\n  }\n  posts {\n    ... on crowdfund {\n      _id\n      id\n      __typename\n    }\n    ... on entry {\n      _id\n      id\n      body\n      digest\n      title\n      publishedAtTimestamp\n      writingNFT {\n        _id\n        optimisticNumSold\n        proxyAddress\n        purchases {\n          numSold\n          __typename\n        }\n        __typename\n      }\n      collectorBubbles {\n        _id\n        address\n        project {\n          ...projectDetails\n          __typename\n        }\n        __typename\n      }\n      featuredImage {\n        mimetype\n        url\n        __typename\n      }\n      publisher {\n        ...publisherDetails\n        __typename\n      }\n      settings {\n        ...entrySettingsDetails\n        __typename\n      }\n      __typename\n    }\n    ... on SubscriberEditionType {\n      _id\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment projectDetails on ProjectType {\n  _id\n  address\n  avatarURL\n  description\n  displayName\n  domain\n  ens\n  gaTrackingID\n  ga4TrackingID\n  mailingListURL\n  twitterUsername\n  wnftChainId\n  externalUrl\n  headerImage {\n    ...mediaAsset\n    __typename\n  }\n  theme {\n    ...themeDetails\n    __typename\n  }\n  __typename\n}\n\nfragment mediaAsset on MediaAssetType {\n  id\n  cid\n  mimetype\n  sizes {\n    ...mediaAssetSizes\n    __typename\n  }\n  url\n  __typename\n}\n\nfragment mediaAssetSizes on MediaAssetSizesType {\n  og {\n    ...mediaAssetSize\n    __typename\n  }\n  lg {\n    ...mediaAssetSize\n    __typename\n  }\n  md {\n    ...mediaAssetSize\n    __typename\n  }\n  sm {\n    ...mediaAssetSize\n    __typename\n  }\n  __typename\n}\n\nfragment mediaAssetSize on MediaAssetSizeType {\n  src\n  height\n  width\n  __typename\n}\n\nfragment themeDetails on UserProfileThemeType {\n  accent\n  colorMode\n  __typename\n}\n\nfragment publisherDetails on PublisherType {\n  project {\n    ...projectDetails\n    __typename\n  }\n  member {\n    ...projectDetails\n    __typename\n  }\n  __typename\n}\n\nfragment entrySettingsDetails on EntrySettingsType {\n  description\n  metaImage {\n    ...mediaAsset\n    __typename\n  }\n  title\n  __typename\n}\n\nfragment publicationLayoutProject on ProjectType {\n  _id\n  avatarURL\n  displayName\n  domain\n  address\n  ens\n  gaTrackingID\n  ga4TrackingID\n  mailingListURL\n  description\n  __typename\n}',
    variables: {
      limit: 10,
      projectAddress: '0x6c97fDa263bda87dec97d43BCc21356197E011ae',
    },
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    cache: 'no-store',
  } as RequestInit;

  try {
    const response = await fetch(
      'https://mirror.xyz/api/graphql',
      requestOptions,
    );
    const result = await response.text();

    return JSON.parse(result);
  } catch (error) {
    console.error(error);
    return {};
  }
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const res = await getListBlog();
  return (
    <html lang="en">
      <body className={twJoin(inter.variable)} suppressHydrationWarning={true}>
        <AppProvider listBlogData={res}>
          <ErrorProvider>
            <MainLayoutHeader />
            {children}
          </ErrorProvider>
        </AppProvider>
      </body>
    </html>
  );
}

interface RootLayoutProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    backpack?: any;
    phantom?: {
      solana: any;
    };
    solflare?: any;
  }
}

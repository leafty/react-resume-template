import Head from 'next/head';
import React from 'react';
import { HomeContent } from '../components/home/home.content';
import { profile } from '../data/profile';
import { fullName } from '../data/profile.utils';

export const Home: React.FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>{fullName(profile)}</title>
      </Head>

      <HomeContent data={{ profile }} />
    </>
  );
};

export default Home;

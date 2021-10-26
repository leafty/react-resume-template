import { AppProps } from 'next/app';
import React from 'react';
import 'typeface-nunito-sans';
import 'typeface-open-sans';
import '../style/theme.scss';

export const MyApp: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}) => <Component {...pageProps} />;

export default MyApp;

//Head code taken from https://github.com/bchiang7/v4

import React from 'react';
import { Helmet } from 'react-helmet';
import config from '@config';
const favicon = '@images/favicons/favicon.ico';
const ogImage = '@images/og.png';
const appleIcon57x57 = '@images/favicons/apple-icon-57x57.png';
const appleIcon60x60 = '@images/favicons/apple-icon-60x60.png';
const appleIcon72x72 = '@images/favicons/apple-icon-72x72.png';
const appleIcon76x76 = '@images/favicons/apple-icon-76x76.png';
const appleIcon114x114 = '@images/favicons/apple-icon-114x114.png';
const appleIcon120x120 = '@images/favicons/apple-icon-120x120.png';
const appleIcon144x144 = '@images/favicons/apple-icon-144x144.png';
const appleIcon152x152 = '@images/favicons/apple-icon-152x152.png';
const appleIcon180x180 = '@images/favicons/apple-icon-180x180.png';
const androidIcon192x192 = '@images/favicons/android-icon-192x192.png';
const favicon32x32 = '@images/favicons/favicon-32x32.png';
const favicon96x96 = '@images/favicons/favicon-96x96.png';
const favicon16x16 = '@images/favicons/favicon-16x16.png';
const msIcon144x144 = '@images/favicons/ms-icon-144x144.png';

const Head = ({ metadata }: { metadata: any }) => (
  <Helmet>
    <html lang='en' prefix='og: http://ogp.me/ns#' />
    <title itemProp='name' lang='en'>
      {metadata.title}
    </title>
    <link rel='shortcut icon' href={favicon} />
    <link rel='canonical' href='https://howardt12345.com' />

    <meta name='description' content={metadata.description} />
    <meta name='keywords' content={config.siteKeywords} />
    <meta name='google-site-verification' content={config.googleVerification} />
    <meta property='og:title' content={metadata.title} />
    <meta property='og:description' content={metadata.description} />
    <meta property='og:type' content='website' />
    <meta property='og:url' content={metadata.siteUrl} />
    <meta property='og:site_name' content={metadata.title} />
    <meta property='og:image' content={`${config.siteUrl}${ogImage}`} />
    <meta property='og:image:width' content='1904' />
    <meta property='og:image:height' content='935' />
    <meta property='og:image:type' content='image/png' />
    <meta property='og:locale' content={config.siteLanguage} />
    <meta itemProp='name' content={metadata.title} />
    <meta itemProp='description' content={metadata.description} />
    <meta itemProp='image' content={`${config.siteUrl}${ogImage}`} />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:url' content={metadata.siteUrl} />
    <meta name='twitter:site' content={config.twitterHandle} />
    <meta name='twitter:creator' content={config.twitterHandle} />
    <meta name='twitter:title' content={metadata.title} />
    <meta name='twitter:description' content={metadata.description} />
    <meta name='twitter:image' content={`${config.siteUrl}${ogImage}`} />
    <meta name='twitter:image:alt' content={metadata.title} />

    <link rel='apple-touch-icon' sizes='57x57' href={appleIcon57x57} />
    <link rel='apple-touch-icon' sizes='60x60' href={appleIcon60x60} />
    <link rel='apple-touch-icon' sizes='72x72' href={appleIcon72x72} />
    <link rel='apple-touch-icon' sizes='76x76' href={appleIcon76x76} />
    <link rel='apple-touch-icon' sizes='114x114' href={appleIcon114x114} />
    <link rel='apple-touch-icon' sizes='120x120' href={appleIcon120x120} />
    <link rel='apple-touch-icon' sizes='144x144' href={appleIcon144x144} />
    <link rel='apple-touch-icon' sizes='152x152' href={appleIcon152x152} />
    <link rel='apple-touch-icon' sizes='180x180' href={appleIcon180x180} />
    <link
      rel='icon'
      type='image/png'
      sizes='192x192'
      href={androidIcon192x192}
    />
    <link rel='icon' type='image/png' sizes='32x32' href={favicon32x32} />
    <link rel='icon' type='image/png' sizes='96x96' href={favicon96x96} />
    <link rel='icon' type='image/png' sizes='16x16' href={favicon16x16} />
    <meta name='msapplication-TileColor' content={config.colors.tile} />
    <meta name='msapplication-TileImage' content={msIcon144x144} />
    <meta name='theme-color' content={config.colors.background} />
  </Helmet>
);

export default Head;

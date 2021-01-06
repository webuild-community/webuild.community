import React from 'react';
import '../styles/main.css';
import App, { AppContext } from 'next/app';
import { DefaultSeo } from 'next-seo';

class MyApp extends App<{
  origin: string;
}> {
  static async getInitialProps(appContext: AppContext) {
    const {
      ctx: { req }
    } = appContext;

    const origin = req?.headers.host;
    const appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
      origin
    };
  }

  render() {
    const { Component, pageProps, origin = 'webuild.community' } = this.props;

    return (
      <>
        <DefaultSeo
          title="WeBuild Community - Vietnam Alliance hub of Developers & Makers"
          openGraph={{
            type: 'website',
            locale: 'vi_VN',
            description:
              'WeBuild Community is a platform that connects developers in Vietnam, where they can share their knowledge and experience, while working, learning, and building cool stuffs together.',
            url: `https://${origin}`,
            site_name: 'WeBuild Community',
            title: 'WeBuild Community'
          }}
          description="WeBuild Community is a platform that connects developers in Vietnam, where they can share their knowledge and experience, while working, learning, and building cool stuffs together."
        />
        <main>
          <Component {...pageProps} />
        </main>
      </>
    );
  }
}

export default MyApp;

import "../styles/index.scss";

import { Analytics } from "@vercel/analytics/react";
import { Layout } from "components";
import { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

import SEO from "../next-seo.config";

const keywords = [
  "Sakin",
  "Tahjib Al Sakin",
  "Software Developer",
  "Full Stack Developer",
  "CS",
  "Computer Science",
  "IIUC",
  "parentheses",
  "prativa",
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);

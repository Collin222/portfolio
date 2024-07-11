import { Noto_Sans } from "next/font/google";
import { type AppType } from "next/app";
import "~/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Head from "next/head";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={notoSans.className}>
      <Head>
        <title>collin22.dev | Web Dev and Design</title>

        <meta
          property="og:title"
          content="Collin Cronin | Web Dev and Design"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://collin22.dev" />
        <meta property="og:description" content="I build and design websites" />
        <meta property="og:image" content="https://collin22.dev/ogimage.png" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;

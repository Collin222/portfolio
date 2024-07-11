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
      </Head>

      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;

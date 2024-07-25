import { Noto_Sans } from "next/font/google";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={notoSans.className}>
      <Head>
        <title>Collin Cronin | Web Design and Development</title>

        <meta
          property="og:title"
          content="Collin Cronin | Web Design and Development"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://collin22.dev" />
        <meta property="og:description" content="Professional and affordable web design and development for the Huntley Illinois and Chicago area." />
        <meta property="og:image" content="https://collin22.dev/ogimage.png" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);

import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider>
      <>{getLayout(<Component {...pageProps} />)}</>
    </SessionProvider>
  );
}

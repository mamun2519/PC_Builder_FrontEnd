import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import RootLayout from "@/components/layout/RootLayout";
import Banner from "@/components/ui/Banner";
import Category from "@/components/ui/Category";
import Products from "@/components/ui/Products";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Banner />
        <Category />
        <Products />
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

//

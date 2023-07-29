import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import RootLayout from "@/components/layout/RootLayout";
import Banner from "@/components/ui/Banner";
import Category from "@/components/ui/Category";
import Products from "@/components/ui/Products";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Banner />
        <Category />
        <Products products={products} />
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

//Static site generation
export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builer-mamun2232.vercel.app/api/v1/product/all"
  );
  const data = await res.json();
  const shuffledArray = data.data?.slice().sort(() => Math.random() - 0.5);

  // Take the first 6 elements from the shuffled array
  const selectedData = shuffledArray.slice(0, 6);
  return {
    props: {
      products: selectedData,
    },
  };
};

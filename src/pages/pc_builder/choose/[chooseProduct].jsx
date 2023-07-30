import RootLayout from "@/components/layout/RootLayout";
import BuildProduct from "@/components/ui/BuildProduct";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const ChooseProduct = ({ products }) => {
  return (
    <div className=" my-20 max-w-7xl mx-auto  px-2">
      <Head>
        <title>Smart Tech -Choose Product</title>
      </Head>
      <BuildProduct products={products} />
    </div>
  );
};

export default ChooseProduct;

ChooseProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builer-mamun2232.vercel.app/api/v1/product/all?category=${params.chooseProduct}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      products: data.data,
    },
  };
};

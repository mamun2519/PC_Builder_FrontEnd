import RootLayout from "@/components/layout/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ChooseProduct = ({ products }) => {
  console.log(products);
  const router = useRouter();
  console.log();
  return (
    <div className=" my-20 max-w-7xl mx-auto border h-screen p-5 rounded">
      {" "}
      {router.query.chooseProduct}
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
    `http://localhost:5000/api/v1/product/all?category=${params.chooseProduct}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      products: data.data,
    },
  };
};

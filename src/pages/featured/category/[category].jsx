import RootLayout from "@/components/layout/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const FeaturedProduct = () => {
  const router = useRouter();
  return <div>{router.query.category}</div>;
};

export default FeaturedProduct;

FeaturedProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

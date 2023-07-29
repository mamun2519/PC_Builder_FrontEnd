import RootLayout from "@/components/layout/RootLayout";
import Prebanner from "@/components/shared/Prebanner";
import ProductCard from "@/components/ui/ProductCard";
import { useRouter } from "next/router";
import React from "react";

const FeaturedProduct = ({ products }) => {
  const router = useRouter();
  console.log(router.query.categoryId);
  return (
    <div>
      <Prebanner />
      <div className=" max-w-7xl mx-auto my-20">
        <div className=" flex gap-10">
          <div className="  w-80 card h-80 border p-5">
            <div>
              <input
                type="text"
                placeholder="Search Product"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="mt-5 px-1">
              <h3 className=" font-medium text-xl">Filter</h3>
              <div className=" w-full h-2 bg-slate-200"></div>
              <p>Filter Option emplement soon</p>

              <h3 className=" font-medium text-xl mt-10">Brand</h3>
              <div className=" w-full h-2 bg-slate-200"></div>
              <p>Brand Option emplement soon</p>
            </div>
          </div>
          <div className=" w-full grid grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;

FeaturedProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builer-mamun2232.vercel.app/api/v1/product/all"
  );
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: {
      categoryId: product.category,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://pc-builer-mamun2232.vercel.app/api/v1/product/all?category=${params.categoryId}`
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
    revalidate: 30,
  };
};

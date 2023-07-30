import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ProductDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState(1);

  const router = useRouter();
  return (
    <div className=" max-w-7xl mx-auto my-20 px-4">
      <Head>
        <title>Smart Tech-ProductDetails</title>
      </Head>
      <div className="">
        <div class="w-full">
          <div class="container mx-auto ">
            <div class="card flex flex-col justify-center p-10 bg-white border rounded-lg shadow-xl h-2/3 ">
              <div className="  grid lg:grid-cols-2 grid-cols-1">
                <div>
                  <div class="prod-title h-16">
                    <p class="text-2xl uppercase text-gray-900 font-bold">
                      {product?.category}
                    </p>
                    <p class="uppercase text-sm text-gray-400">
                      {product?.productName}
                    </p>
                  </div>
                  <div class="prod-img flex mt-">
                    <Image
                      src={product?.image}
                      width={350}
                      height={200}
                      alt="pic"
                    />
                  </div>
                  <div class="prod-info grid gap-10">
                    <div class="flex flex-col md:flex-row justify-between items-center text-gray-900 mt">
                      <p class="font-bold text-xl">{product?.price} BDT</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className=" text-lg mt- font-medium">
                    Brand: {product?.brand}
                  </p>
                  <p className=" text-lg mt-0.5">Status: {product?.status}</p>
                  <p className=" text-lg mt-0.1">Ratings: {product?.rating}</p>
                  <p className=" text-lg mt-0.5">
                    Average Rating: {product?.averageRating}
                  </p>
                  <div className="mt-6">
                    <h3 className=" font-medium text-2xl">Key Features</h3>
                    <p className=" text-lg mt-">
                      Model: {product?.keyFeatures?.model}
                    </p>
                    <p className=" text-lg mt-1">
                      Speed: {product?.keyFeatures?.speed}
                    </p>
                    <p className=" text-lg mt-1">
                      Port: {product?.keyFeatures?.port}
                    </p>
                    <p className=" text-lg mt-1">
                      Type: {product?.keyFeatures?.type}
                    </p>
                    <p className=" text-lg mt-1">
                      Resolution: {product?.keyFeatures?.resolution}
                    </p>
                    <p className=" text-lg mt-1">
                      Warranty: {product?.keyFeatures?.warranty}
                    </p>
                    {product?.keyFeatures?.capacity && (
                      <p className=" text-lg mt-1">
                        Capacity: {product?.keyFeatures?.capacity}
                      </p>
                    )}
                  </div>
                  <div className=" flex  justify-end mt-12">
                    <button
                      onClick={() => router.push(`/`)}
                      class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full  bg-cyan-800 text-white font-medium"
                    >
                      Back To Home
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="tabs">
          <div
            className={`tab tab-lifted ${activeTab == 1 && "tab-active"}`}
            onClick={() => setActiveTab(1)}
          >
            Description
            <div></div>
          </div>
          <a
            className={`tab tab-lifted ${activeTab == 2 && "tab-active"}`}
            onClick={() => setActiveTab(2)}
          >
            Reviews
          </a>
          <a
            className={`tab tab-lifted ${activeTab == 3 && "tab-active"}`}
            onClick={() => setActiveTab(3)}
          >
            Add Review
          </a>
        </div>

        {activeTab == 1 && (
          <div className=" h-96 mt-10">
            <h3 className=" text-2xl">Product Description</h3>
            <p className=" text-lg mt-2">{product?.description}</p>
          </div>
        )}
        {activeTab == 2 && (
          <div className="mt-4 h-24  flex justify-center items-center">
            <p className=" text-red-500">No Reviews Here</p>
          </div>
        )}
        {activeTab == 3 && (
          <div className="mt-4 h-24  flex justify-center items-center">
            <p className=" text-red-500">Implement Soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builer-mamun2232.vercel.app/api/v1/product/all"
  );
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: {
      productId: product._id,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builer-mamun2232.vercel.app/api/v1/product/${params.productId}`
  );
  const data = await res.json();
  return {
    props: { product: data.data },
  };
};

import RootLayout from "@/components/layout/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ProductDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState(1);
  const tab = [
    {
      id: 1,
      name: "Description",
    },
    {
      id: 2,
      name: "Reviews",
    },
    {
      id: 3,
      name: "Add Review",
    },
  ];

  const router = useRouter();
  return (
    <div className=" max-w-7xl mx-auto my-20">
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
                    {/* <div>
            <ul class="flex flex-row justify-center items-center">
              <li class="mr-4 last:mr-0">
                <span class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                  <a
                    href="#blue"
                    class="block w-6 h-6 bg-blue-900 rounded-full"
                  ></a>
                </span>
              </li>
              <li class="mr-4 last:mr-0">
                <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                  <a
                    href="#yellow"
                    class="block w-6 h-6 bg-yellow-500 rounded-full"
                  ></a>
                </span>
              </li>
              <li class="mr-4 last:mr-0">
                <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                  <a
                    href="#red"
                    class="block w-6 h-6 bg-red-500 rounded-full"
                  ></a>
                </span>
              </li>
              <li class="mr-4 last:mr-0">
                <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                  <a
                    href="#green"
                    class="block w-6 h-6 bg-green-500 rounded-full"
                  ></a>
                </span>
              </li>
            </ul>
          </div> */}

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
                      class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
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
        {activeTab == 2 && <div className="mt-4">reviews </div>}
        {activeTab == 3 && <div className="mt-4">add reviews </div>}
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params.productId}`);
  const data = await res.json();
  return {
    props: { product: data },
  };
};

import React from "react";
import BuildProductCard from "./BuildProductCard";
import { useRouter } from "next/router";

const BuildProduct = ({ products }) => {
  const router = useRouter();

  return (
    <div className="   flex   gap-5">
      <div className=" w-72 border h-96 rounded p-5">
        <h3 className=" font-medium text-xl">Filter</h3>
        <div className=" w-full h-2 bg-slate-200"></div>
        <p>Filter Option emplement soon</p>

        <h3 className=" font-medium text-xl mt-10">Brand</h3>
        <div className=" w-full h-2 bg-slate-200"></div>
        <p>Brand Option emplement soon</p>
      </div>
      <div className=" w-full">
        <div className=" w-full h-12 rounded-lg border flex items-center px-4 justify-between">
          <h3 className=" text-xl">
            Category :{" "}
            <span className=" text-blue-600">
              {router?.query?.chooseProduct}
            </span>
          </h3>
          <button
            onClick={() => router.push("/pc_builder")}
            className="px-6 py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
          >
            Back
          </button>
        </div>
        {products?.map((product) => (
          <BuildProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BuildProduct;

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const BuildProductCard = ({ product }) => {
  const router = useRouter();

  const addDataLocalStorage = (product) => {
    const data = JSON.parse(localStorage.getItem("UserPc")) || [];
    data.push(product);
    localStorage.setItem("UserPc", JSON.stringify(data));
    router.push("/pc_builder");
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border  w-full mt-2 flex ">
        <figure className=" rounded-lg">
          <Image src={product?.image} width={130} height={80} alt="pic" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{product?.productName}</h2>
          <div className="mt-2">
            {/* <h3 className=" font-medium text-2xl">Key Features</h3>
            <p className=" text-lg mt-">Model: {product?.keyFeatures?.model}</p>
            <p className=" text-lg mt-1">
              Speed: {product?.keyFeatures?.speed}
            </p>
            <p className=" text-lg mt-1">Port: {product?.keyFeatures?.port}</p> */}
            <p className=" text-lg mt-1">Status: {product?.status}</p>
            <p className=" text-lg mt-1">Rating: {product?.rating}</p>
            <p className=" text-lg mt-1">
              Warranty: {product?.keyFeatures?.warranty}
            </p>
            {product?.keyFeatures?.capacity && (
              <p className=" text-lg mt-1">
                Capacity: {product?.keyFeatures?.capacity}
              </p>
            )}
            <p className=" text-lg mt-1 font-medium">
              Price: {product?.price} BDT
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => addDataLocalStorage(product)}
                className="px-16 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildProductCard;

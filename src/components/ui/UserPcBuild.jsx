import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const UserPcBuild = ({ product, setUserPcBuild }) => {
  const removeUserProductInLocalStorage = (id) => {
    const data = JSON.parse(localStorage.getItem("UserPc"));
    const finalData = data.filter((pro) => pro._id !== id);
    console.log(finalData);
    localStorage.setItem("UserPc", JSON.stringify(finalData));
    //     setUserPcBuild(localStorage.setItem("UserPc", JSON.stringify(finalData)));
  };
  return (
    <div className="card card-side bg-base-100 shadow border  w-full mt-2 flex ">
      <figure className=" rounded-lg">
        <Image src={product?.image} width={80} height={50} alt="pic" />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title">{product?.productName}</h2>
          <p className=" font-medium text-xl mt-1 text-red-500 ">
            {product?.price} BDT
          </p>
          <div className=" flex  justify-end">
            <button
              onClick={() => removeUserProductInLocalStorage(product?._id)}
              className=" px-8 bg-red-600 text-white p-1 rounded"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPcBuild;

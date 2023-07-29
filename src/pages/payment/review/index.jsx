import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const PaymentReview = () => {
  const [userPcBuild, setUserPcBuild] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    // Check if we are running on the client side (in the browser)
    if (typeof window !== "undefined") {
      // Get data from localStorage, or set an empty array if no data exists
      const data = JSON.parse(localStorage.getItem("UserPc")) || [];
      setUserPcBuild(data);
    }

    const totalPrices = userPcBuild?.reduce((accumulator, product) => {
      return accumulator + parseInt(product.price);
    }, 0);
    setTotal(totalPrices);
  }, []);
  console.log(userPcBuild);
  return (
    <div>
      <Head>
        <title>Payment-review</title>
      </Head>

      <div className=" flex justify-center mt-20">
        <ul className="steps">
          <li className="step step-primary">Product Review</li>
          <li className="step">CheckOut</li>
          <li className="step">Complete</li>
        </ul>
      </div>
      <div className=" my-10 max-w-5xl mx-auto border">
        <div className=" p-10">
          <div className=" flex justify-between pb-5 ">
            <h3 className=" text-xl font-medium">Item</h3>
            <h3 className=" text-xl font-medium">Price</h3>
          </div>
          {userPcBuild?.map((product) => (
            <div key={product?._id} className=" flex justify-between mt-2">
              <div className="mt-2">
                <p className=" font-medium">{product?.productName}</p>
                <p className=" text-gray-600">{product?.category}</p>
              </div>
              <div className=" text-gray-950 font-medium">
                {product?.price} BDT
              </div>
            </div>
          ))}

          <div className="h-2 bg-base-200 mt-5"></div>
          <div className="mt-2 flex justify-between">
            <h3 className=" font-medium text-xl">Total</h3>
            <h3 className=" font-medium text-xl">{total} BDT</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentReview;

PaymentReview.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

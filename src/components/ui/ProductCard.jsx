import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full">
        <div className="container mx-auto ">
          <div className="card flex flex-col justify-center p-10 bg-white border rounded-lg shadow-xl h-2/3">
            <div className="prod-title h-16 relative">
              <p className="text-2xl uppercase text-gray-900 font-bold">
                {product?.category}
              </p>
              <p className="uppercase text-sm text-gray-400">
                {product?.productName}
              </p>
            </div>
            <div className="prod-img flex justify-center mt-5">
              <Image src={product?.image} width={200} height={200} alt="pic" />
            </div>
            <div className="prod-info grid gap-10">
              {/* <div>
                <ul className="flex flex-row justify-center items-center">
                  <li className="mr-4 last:mr-0">
                    <span className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#blue"
                        className="block w-6 h-6 bg-blue-900 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li className="mr-4 last:mr-0">
                    <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#yellow"
                        className="block w-6 h-6 bg-yellow-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li className="mr-4 last:mr-0">
                    <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#red"
                        className="block w-6 h-6 bg-red-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li className="mr-4 last:mr-0">
                    <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#green"
                        className="block w-6 h-6 bg-green-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                </ul>
              </div> */}

              <div className="flex flex-col md:flex-row justify-between items-center text-gray-900 mt-6">
                <div>
                  <p className="font-bold text-xl">{product?.price} BDT</p>
                  <p className=" bg-cyan-800 text-white text-center rounded absolute top-3 left-2 px-1">
                    {product?.status}
                  </p>
                  <p className="font-bold text-xl">
                    {/* {product?.rating == 5 && (
                      <div className=" flex gap-1  text-red-500">
                        <span>
                          <FaRegStar/>
                        </span>
                        <span>
                          <FaRegStar/>
                        </span>
                        <span>
                          <FaRegStar/>
                        </span>
                        <span>
                          <FaRegStar/>
                        </span>
                        <span>
                          <FaRegStar/>
                        </span>
                      </div>
                    )}
                    {product?.rating == 4 && (
                      <div className=" flex gap-1  text-red-500">
                        <span>
                          <FaRegStar/>
                        </span>
                        <span>
                          <FaRegStar/>
                        </span>
                        <span>
                          <FaRegStar/>
                        </span>
                        <span>
                          <FaRegStar/>
                        </span>
                      </div>
                    )} */}
                    <div className=" flex gap-1  text-red-500">
                      <p>Rating {product?.rating}</p>
                    </div>
                  </p>
                </div>
                <Link
                  href={`/featured/product/${product?._id}`}
                  className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-cyan-800 text-white font-medium"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

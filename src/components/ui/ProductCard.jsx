import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <div>
      <div class="w-full">
        <div class="container mx-auto ">
          <div class="card flex flex-col justify-center p-10 bg-white border rounded-lg shadow-xl h-2/3">
            <div class="prod-title h-16">
              <p class="text-2xl uppercase text-gray-900 font-bold">
                {product?.category}
              </p>
              <p class="uppercase text-sm text-gray-400">
                {product?.productName}
              </p>
            </div>
            <div class="prod-img flex justify-center mt-5">
              <Image src={product?.image} width={200} height={200} alt="pic" />
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

              <div class="flex flex-col md:flex-row justify-between items-center text-gray-900 mt-6">
                <p class="font-bold text-xl">{product?.price} BDT</p>
                <button
                  onClick={() =>
                    router.push(`/featured/product/${product?._id}`)
                  }
                  class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

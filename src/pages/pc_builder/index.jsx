import RootLayout from "@/components/layout/RootLayout";
import UserPcBuild from "@/components/ui/UserPcBuild";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import {
  BsFillCpuFill,
  BsFillDiagram2Fill,
  BsFillMotherboardFill,
} from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { FiMonitor } from "react-icons/fi";
import { MdSdStorage } from "react-icons/md";

const PcBuilder = () => {
  const [userPcBuild, setUserPcBuild] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [render, setRender] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Check if we are running on the client side (in the browser)
    if (typeof window !== "undefined") {
      // Get data from localStorage, or set an empty array if no data exists
      const data = JSON.parse(localStorage.getItem("UserPc")) || [];
      setUserPcBuild(data);
    }
  }, [render]);
  const categories = [
    {
      id: "1",
      name: "Processor",
      icons: <BsFillCpuFill />,
      color: "#F50057",
    },
    {
      id: "2",
      name: "Motherboard",

      icons: <BsFillMotherboardFill />,
      color: "#6A1B9A",
    },
    {
      id: "3",
      name: "RAM",
      icons: <BsFillDiagram2Fill />,
      color: "#4527A0",
    },
    {
      id: "4",
      name: "Power Supply Unit",

      icons: <AiOutlinePoweroff />,
      color: "283593",
    },
    {
      id: "5",
      name: "Storage",

      icons: <MdSdStorage />,
      color: "#4527A0",
    },
    {
      id: "6",
      name: "Monitor",

      icons: <FiMonitor />,
      color: "#F50057",
    },
    {
      id: "7",
      name: "Others",
      icons: <CgDetailsMore />,
      color: "#F50057",
    },
  ];

  console.log(userPcBuild.length);
  return (
    <div className="my-20 card border   max-w-5xl mx-auto shadow-lg bg-base-100 ">
      <div className=" p-5">
        <div className=" grid lg:grid-cols-2  grid-cols-1">
          <div className=" flex  items-center">
            <h3 className="   font-medium">
              PC Builder - Build Your Own Computer - Star Tech
            </h3>
          </div>
          <div className=" flex gap-5   justify-end">
            <div className=" w-36 border h-14 rounded-lg flex justify-center items-center">
              <span className="  font-medium text-2xl">{totalPrice}</span>
              <span className="px-1">BD</span>
            </div>
            <div className=" w-36 border h-14 rounded-lg flex justify-center items-center">
              <span className="  font-medium text-2xl">
                {userPcBuild?.length}
              </span>
              <span className="px-1">Items</span>
            </div>
          </div>
        </div>
        <div className=" h-4 bg-base-200 mt-5"></div>
        <p className="mt-2">Core Components</p>

        {categories.map((category) => (
          <div key={category.name}>
            <div className=" h-20  border-b mt-5 ">
              <div className=" lg:flex gap-10">
                <div className="  text-white bg-cyan-800 rounded p-1">
                  <span className="text-5xl">{category.icons}</span>
                </div>
                <div className="  lg:flex items-center">
                  <div className="w-full">
                    <span>{category.name}</span>
                    <div className=" h-4 bg-base-200 mt-1 w-96"></div>
                  </div>
                </div>
                <div className=" flex items-center justify-end w-full mt-5 lg:mt-0">
                  <button
                    onClick={() =>
                      router.push(`/pc_builder/choose/${category.name}`)
                    }
                    className="px-12 font-medium py-2 rounded border  bg-cyan-800 text-white"
                  >
                    Choose
                  </button>
                </div>
              </div>
            </div>

            {userPcBuild?.map(
              (product) =>
                product.category == category.name && (
                  <UserPcBuild
                    key={product?._id}
                    product={product}
                    render={render}
                    setRender={setRender}
                  />
                )
            )}
          </div>
        ))}

        <div className=" mt-5  flex justify-center">
          <button
            disabled={userPcBuild?.length <= 5}
            onClick={() => router.push("/payment/review")}
            className="px-16 py-2 transition ease-in duration-200 uppercase rounded-full  bg-cyan-800 text-white font-medium"
          >
            Build Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

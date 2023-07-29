import React from "react";
import { BsFillCpuFill } from "react-icons/bs";
import { BsFillMotherboardFill } from "react-icons/bs";
import { BsFillDiagram2Fill } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";
import { MdSdStorage } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";
import { useRouter } from "next/router";
const Category = () => {
  const router = useRouter();
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
  return (
    <div className="my-20   max-w-7xl mx-auto">
      <div className="  text-center">
        <h3 className=" font-medium text-3xl ">Featured Category</h3>
        <p className=" mt-2">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <div className=" mt-5 grid lg:grid-cols-5 gap-5 grid-cols-2    ">
        {categories?.map((category) => (
          <div
            onClick={() => router.push(`/featured/category/${category?.name}`)}
            className="  w-full border p-3 h-32 bg-cyan-800 text-white shadow text-center rounded-lg cursor-pointer flex justify-center items-center"
            key={category._id}
          >
            <div>
              <h3 className="text-xl mt-2"> {category.name}</h3>
              <div className=" text-4xl flex justify-center mt-2  ">
                <span className={"text-[`${category.color}]"}>
                  {category.icons}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

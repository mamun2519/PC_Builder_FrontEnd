import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const categories = [
    {
      id: "1",
      name: "CPU & Processor",

      color: "#F50057",
    },
    {
      id: "2",
      name: "Motherboard",

      color: "#6A1B9A",
    },
    {
      id: "3",
      name: "RAM",

      color: "#4527A0",
    },
    {
      id: "4",
      name: "Power Supply Unit",
      color: "283593",
    },
    {
      id: "5",
      name: "Storage Device",

      color: "#4527A0",
    },
    {
      id: "6",
      name: "Monitor",

      color: "#F50057",
    },
    {
      id: "7",
      name: "Others",
      color: "#F50057",
    },
  ];
  return (
    <div className="bg-red-200">
      <div className="navbar   max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Product Features</a>
              </li>
              <li>
                <a>Categories</a>
                {categories.map((category) => (
                  <ul key={category.id} className="p-2 w-96  grid grid-cols-2">
                    <li>
                      <Link href={`/featured/category/${category.name}`}>
                        {category.name}
                      </Link>
                    </li>
                  </ul>
                ))}
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Smart Builder
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Product Features</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>

                <ul className="p-2 w-96  grid grid-cols-2">
                  {categories.map((category) => (
                    <li key={category?.id}>
                      <Link href={`/featured/category/${category?.name}`}>
                        {category?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

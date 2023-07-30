import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/images/logo.png";
import Image from "next/image";
import avatar from "../../../public/images/avatar.png";
const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);

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
    <div className="bg-base-200">
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
              {/* <li>
                <a>Product Features</a>
              </li> */}
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
            </ul>
          </div>
          <Link
            href="/"
            className="btn btn-ghost normal- text-xl text-cyan-800 uppercase"
          >
            <Image
              className="  rounded-lg"
              width={50}
              height={50}
              src={Logo}
              alt="logo"
            />
            Smart-Tech
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <a>Product Features</a>
            </li> */}
            <li tabIndex={0}>
              <details>
                <summary className=" text-lg  font-medium text-cyan-800">
                  Categories
                </summary>

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
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/pc_builder"
            className=" px-8 rounded bg-cyan-800 py-2 text-white font-medium"
          >
            Pc Build
          </Link>
          <div className="dropdown dropdown-end pl-3">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {session?.user ? (
                  <Image
                    src={session?.user?.image}
                    alt="profile"
                    width={50}
                    height={50}
                  />
                ) : (
                  <Image src={avatar} alt="profile" width={50} height={50} />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  {session?.user?.name ?? "no name"}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              {session?.user ? (
                <li
                  className="text-cyan-800  font-medium px-3"
                  onClick={() => signOut()}
                >
                  LogOut
                </li>
              ) : (
                <li className=" text-lg text-cyan-800  font-medium">
                  <Link href="/auth/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

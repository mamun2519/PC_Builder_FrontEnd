import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className=" max-w-7xl mx-auto px-4 py-20">
      <div className="  text-center">
        <h3 className=" font-medium text-3xl ">Featured Products</h3>
        <p className=" mt-2">Check & Get Your Desired Product!</p>
      </div>
      <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-5">
        {products?.map((product) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;

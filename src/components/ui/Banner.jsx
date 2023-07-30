import React from "react";

const Banner = () => {
  return (
    <div className=" ">
      <div
        className="hero   h-[65vh]"
        style={{
          backgroundImage:
            "url(https://imgs.gvm.com.tw/upload/gallery/20221004/118269.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-cyan-100 w-full">
              ADM ALTON PROCESSOR
            </h1>
            <div className="mb-4 text-white bg-cyan-900 rounded-lg p-2">
              <p>
                AMD ATHLON 200GE AM4 SOCKET DESKTOP PROCESSOR WITH RADEON VEGA 3
                GRAPHICS
              </p>
              <div className="mt-2">
                <button className=" px-8 rounded bg-cyan-800 py-2 text-white font-medium ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

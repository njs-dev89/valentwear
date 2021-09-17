import React from "react";
import Image from "next/image";

function HomeBanner() {
  return (
    <div className="text-center home-banner z-50 text-white">
      <h3 className="text-center sm:text-xl text-base">
        Choice is at the heart of life
      </h3>
      <h1 className="text-center md:text-6xl sm:text-4xl text-3xl font-semibold mb-8 mt-2 uppercase">
        Choose Greatness
      </h1>
      <button className="px-12 py-3 bg-gold font-medium">Shop Now</button>
    </div>
  );
}

export default HomeBanner;

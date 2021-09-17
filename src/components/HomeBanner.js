import React from "react";
import Image from "next/image";

function HomeBanner() {
  return (
    <div className="text-center home-banner z-50 text-white">
      <h3 className="text-center text-xl">Choice is at the heart of life</h3>
      <h1 className="text-center text-6xl font-semibold mb-8 mt-2 uppercase">
        Choose Greatness
      </h1>
      <button className="px-12 py-3 bg-gold font-medium">Shop Now</button>
    </div>
  );
}

export default HomeBanner;

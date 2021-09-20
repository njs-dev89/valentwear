import React from "react";
import Link from "next/link";

function HomeBanner() {
  return (
    <div className="text-center home-banner z-50 text-white">
      <h3 className="text-center sm:text-xl text-base">
        Choice is at the heart of life
      </h3>
      <h1 className="text-center md:text-6xl sm:text-4xl text-3xl font-semibold mb-8 mt-2 uppercase">
        Choose Greatness
      </h1>
      <Link href="/collections/all">
        <a className="px-12 py-3 bg-gold font-medium text-black">Shop Now</a>
      </Link>
    </div>
  );
}

export default HomeBanner;

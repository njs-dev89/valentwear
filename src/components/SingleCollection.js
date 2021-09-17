import React from "react";
import Image from "next/image";
import Link from "next/link";

function SingleCollection({ name, description, imgSrc, link }) {
  return (
    <div className="relative overflow-hidden">
      <div className="h-72 md:h-96 w-96 md:w-72">
        <Image src={imgSrc} alt={name} layout="fill" width="400" height="280" />
      </div>
      <div className="absolute -bottom-14 hover:bottom-0 bg-white w-full">
        <div className="py-2">
          <h2 className="text-3xl mt-2">{name}</h2>
          <p className="">{description}</p>
        </div>
        <Link href={link}>
          <a className="px-8 py-4 bg-black text-white mt-4 inline-block">
            View Collection
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SingleCollection;

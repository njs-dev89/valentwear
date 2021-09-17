import React from "react";
import Image from "next/image";
import Link from "next/link";

function SingleProductCard({ title, price, imgSrc, handle }) {
  return (
    <div className="">
      <Link href={`/products/${handle}`}>
        <a>
          <div className="relative h-96">
            <Image
              src={imgSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <h3 className="mt-6 font-semibold">{title}</h3>
          <p className="font-semibold">${price}</p>
        </a>
      </Link>
    </div>
  );
}

export default SingleProductCard;

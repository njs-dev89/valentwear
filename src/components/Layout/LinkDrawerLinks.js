import React from "react";
import Link from "next/link";

function LinkDrawerLinks() {
  return (
    <>
      <ul className=" border-b pb-4 mx-8 border-gray-300">
        <li className="mb-3">
          <Link href="/">
            <a className="uppercase">Best Sellers</a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/">
            <a className="uppercase">Neckwear</a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/">
            <a className="uppercase">Wristwear</a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/">
            <a className="uppercase">Ringwear</a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/">
            <a className="uppercase">Collections</a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/">
            <a className="uppercase">Men</a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/">
            <a className="uppercase">Women</a>
          </Link>
        </li>
      </ul>
      <ul className="mx-8 mt-8 pb-4 border-b border-gray-300">
        <li className="mb-3">
          <Link href="/">
            <a className="uppercase">Brand</a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/">
            <a className="uppercase">Stories of greatness</a>
          </Link>
        </li>
      </ul>
      <ul className="mx-8 mt-8">
        <li className="mb-3">
          <Link href="/">
            <a className="capitalize text-sm text-gray-300">Contact us</a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/">
            <a className="capitalize text-sm text-gray-300">My account</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default LinkDrawerLinks;

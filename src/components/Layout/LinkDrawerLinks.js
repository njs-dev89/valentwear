import React from "react";
import Link from "next/link";

function LinkDrawerLinks({ closeLinkDrawer }) {
  return (
    <>
      <ul className=" border-b pb-4 mx-8 border-gray-300">
        <li className="mb-3">
          <Link href="/collections/best-sellers">
            <a className="uppercase" onClick={closeLinkDrawer}>
              Best Sellers
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/collections/all?category=neckwear">
            <a className="uppercase" onClick={closeLinkDrawer}>
              Neckwear
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/collections/all?category=wristwear">
            <a className="uppercase" onClick={closeLinkDrawer}>
              Wristwear
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="//collections/all?category=ringwear">
            <a className="uppercase" onClick={closeLinkDrawer}>
              Ringwear
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/collections">
            <a className="uppercase" onClick={closeLinkDrawer}>
              Collections
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/collections/all?category=men">
            <a className="uppercase" onClick={closeLinkDrawer}>
              Men
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/collections/all?category=women">
            <a className="uppercase" onClick={closeLinkDrawer}>
              Women
            </a>
          </Link>
        </li>
      </ul>
      <ul className="mx-8 mt-8 pb-4 border-b border-gray-300">
        <li className="mb-3">
          <Link href="/about-us">
            <a className="uppercase" onClick={closeLinkDrawer}>
              Brand
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/blogs/news">
            <a className="uppercase" onClick={closeLinkDrawer}>
              Stories of greatness
            </a>
          </Link>
        </li>
      </ul>
      <ul className="mx-8 mt-8">
        <li className="mb-3">
          <Link href="/">
            <a
              className="capitalize text-sm text-gray-300"
              onClick={closeLinkDrawer}
            >
              Contact us
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/">
            <a
              className="capitalize text-sm text-gray-300"
              onClick={closeLinkDrawer}
            >
              My account
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default LinkDrawerLinks;

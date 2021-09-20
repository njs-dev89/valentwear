import React, { useState } from "react";
import Link from "next/link";

function CategoryDropdown() {
  const [dropOpen, setDropOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="sm:text-base text-sm"
        onClick={() => setDropOpen(!dropOpen)}
      >
        Categories
      </button>
      <div
        className={`absolute top-10 bg-black text-white pl-4 pr-16 py-4 z-50 ${
          dropOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <Link href="/collections/all?category=neckwear">
          <a className="py-1" onClick={() => setDropOpen(false)}>
            Neckwear
          </a>
        </Link>
        <Link href="/collections/all?category=wristwear">
          <a className="py-1" onClick={() => setDropOpen(false)}>
            Wristwear
          </a>
        </Link>
        <Link href="/collections/all?category=ringwear">
          <a className="py-1" onClick={() => setDropOpen(false)}>
            Ringwear
          </a>
        </Link>
        <Link href="/collections/all?category=men">
          <a className="py-1" onClick={() => setDropOpen(false)}>
            Men
          </a>
        </Link>
        <Link href="/collections/all?category=women">
          <a className="py-1" onClick={() => setDropOpen(false)}>
            Women
          </a>
        </Link>
      </div>
    </div>
  );
}

export default CategoryDropdown;

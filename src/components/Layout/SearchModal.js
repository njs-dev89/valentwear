import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { ExpandModal } from "react-spring-modal";
import { Context } from "../../context/cartContext";
import { FiSearch } from "react-icons/fi";

function SearchModal({ isOpen, setSearchOpen }) {
  return (
    <div>
      <ExpandModal
        transitionConfig={{}}
        contentTransition={{}}
        overlayProps={{
          style: {
            width: "80vw",
            maxWidth: 1280,
            height: "80vh",
            maxHeight: "80vh",
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "auto",
            background: "white",
            boxShadow: "0px 0px 5px 3px rgba(0, 0, 0, 0.2)",
            top: 80,
          },
        }}
        isOpen={isOpen}
      >
        <SearchModalContent setSearchOpen={setSearchOpen} />
      </ExpandModal>
    </div>
  );
}

export default SearchModal;

const SearchModalContent = ({ setSearchOpen }) => {
  const { client } = useContext(Context);
  async function searchProducts(searchTerm) {
    if (searchTerm === "") {
      return [];
    }
    try {
      const result = await client.product.fetchQuery({
        first: 20,
        sortKey: "RELEVANCE",
        query: `${searchTerm}`,
      });
      console.log(result);
      return JSON.parse(JSON.stringify(result));
    } catch (err) {
      console.log(err);
    }
  }
  const [search, setSearch] = useState();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async (searchTerm) => {
    setLoading(true);
    const results = await searchProducts(searchTerm);
    setProducts(results);
    setLoading(false);
  };

  useEffect(() => {
    if (!search || search === "") {
      return setProducts([]);
    }
    if (search) {
      getProducts(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  console.log(products);
  return (
    <div className="">
      <div className="sm:px-16 px-4 bg-gray-100 flex">
        <div className="relative w-full">
          <FiSearch className="absolute top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            className="w-full px-6 py-4 bg-gray-100 focus:outline-none my-4  mr-4"
            value={search}
            placeholder="Search for products..."
            onBlur={() => setSearchOpen(false)}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <button
          onClick={() => setSearchOpen(false)}
          className="hover:text-red-600"
        >
          <FaTimes />
        </button>
      </div>
      {loading ? (
        <div className="sm:px-16 px-4 font-medium mt-4">Loading...</div>
      ) : products?.length ? (
        <div className="sm:px-16 px-4  mx-auto">
          <h3 className="mt-4 font-medium">
            Search Results for &quot;<strong>{search}</strong>&quot;
          </h3>
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-2">
            {products.map((product) => (
              <div key={product.id}>
                .
                <Link href={`/products/${product.handle}`}>
                  <a>
                    <div className="relative h-44 w-44">
                      <Image src={product.images[0].src} alt="" layout="fill" />
                    </div>
                    <h3 className="text-sm">{product.title}</h3>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <span>
          {search ? (
            <div className="sm:px-16 px-4">
              There are no products that match &quot;<strong>{search}</strong>
              &quot;
            </div>
          ) : (
            <> </>
          )}
        </span>
      )}
    </div>
  );
};

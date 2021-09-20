import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import SingleProductCard from "../../components/SingleProductCard";
import { getAllProducts, getCollectionByHandle } from "../../utils/operations";

function SingleCollection({ products, query }) {
  const router = useRouter();
  const [category, setCategory] = useState(query.category);
  const [collection, setCollection] = useState(query.handle);
  const [color, setColor] = useState(query.color);
  const [sort, setSort] = useState(query.sort_by);
  const [filteredProducts, setFilteredProducts] = useState(products);

  console.log({ query, products });
  const handleCategoryChange = (e) => {
    category === "" || category !== e.target.value
      ? setCategory(e.target.value)
      : setCategory("");
  };

  const handleCollectionChange = (e) => {
    collection === "all" || collection !== e.target.value
      ? setCollection(e.target.value)
      : setCollection("all");
  };

  const handleColorChange = (e) => {
    color === "" || color !== e.target.value
      ? setColor(e.target.value)
      : setColor("");
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    if (sort === "" || sort === undefined) {
      if (
        (category === "" || category === undefined) &&
        (color === "" || color === undefined)
      ) {
        router.push(`/collections/${collection}`, undefined, {
          shallow: false,
        });
      } else if (
        (category !== undefined || category !== "") &&
        (color === "" || color === undefined)
      ) {
        router.push(
          `/collections/${collection}?category=${category}`,
          undefined,
          { shallow: false }
        );
      } else if (
        (category === undefined || category === "") &&
        (color !== "" || color !== undefined)
      ) {
        router.push(`/collections/${collection}?color=${color}`, undefined, {
          shallow: false,
        });
      } else if (
        (category !== undefined || category !== "") &&
        (color !== "" || color !== undefined)
      ) {
        router.push(
          `/collections/${collection}?category=${category}&color=${color}`,
          undefined,
          { shallow: false }
        );
      }
    } else {
      if (
        (category === "" || category === undefined) &&
        (color === "" || color === undefined)
      ) {
        router.push(`/collections/${collection}?sort_by=${sort}`, undefined, {
          shallow: false,
        });
      } else if (
        (category !== undefined || category !== "") &&
        (color === "" || color === undefined)
      ) {
        router.push(
          `/collections/${collection}?category=${category}&sort_by=${sort}`,
          undefined,
          { shallow: false }
        );
      } else if (
        (category === undefined || category === "") &&
        (color !== "" || color !== undefined)
      ) {
        router.push(
          `/collections/${collection}?color=${color}&sort_by=${sort}`,
          undefined,
          { shallow: false }
        );
      } else if (
        (category !== undefined || category !== "") &&
        (color !== "" || color !== undefined)
      ) {
        router.push(
          `/collections/${collection}?category=${category}&color=${color}&sort_by=${sort}`,
          undefined,
          { shallow: false }
        );
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, collection, color, sort]);

  useEffect(() => {
    let sortedProducts;
    switch (sort) {
      case "price_low_to_high":
        sortedProducts = products.slice().sort((producta, productb) => {
          return (
            Number(producta.variants[0].price) -
            Number(productb.variants[0].price)
          );
        });
        return setFilteredProducts(sortedProducts);
      case "price_high_to_low":
        sortedProducts = products.slice().sort((producta, productb) => {
          return (
            Number(productb.variants[0].price) -
            Number(producta.variants[0].price)
          );
        });
        return setFilteredProducts(sortedProducts);

      case "title_desc":
        sortedProducts = products.slice().sort((producta, productb) => {
          return producta.title.localeCompare(productb.title);
        });
        console.log("sort by title ran");
        return setFilteredProducts(sortedProducts);
      case "title_asc":
        sortedProducts = products.slice().sort((producta, productb) => {
          return productb.title.localeCompare(producta.title);
        });
        console.log("sort by title ran");
        return setFilteredProducts(sortedProducts);
      default:
        setFilteredProducts(products);
    }
  }, [products, sort]);

  return (
    <div className="md:grid md:grid-cols-9 md:gap-4">
      <div className="col-span-2">
        <div className="flex gap-4 pb-8">
          <h3 className="font-semibold">
            Filters(
            {
              Object.keys(query).filter(
                (key) => key !== "sort_by" && query[key] !== "all"
              ).length
            }
            )
          </h3>

          <button
            className="text-gray-400 underline font-medium"
            onClick={() => {
              setCollection("all");
              setColor("");
              setCategory("");
              router.push("/collections/all");
            }}
          >
            CLEAR
          </button>
        </div>
        <div className="border-t py-6">
          <h3 className=" font-semibold mb-4">Categories</h3>
          <div className="mb-2">
            <input
              type="checkbox"
              value="neckwear"
              name="neckwear"
              className="form-checkbox h-5 w-5 text-gold border-2 border-black checked:border-0 mr-2 filter-checkbox"
              checked={query.category === "neckwear"}
              onChange={handleCategoryChange}
            />
            <label htmlFor="neckwear">Neckwear</label>
          </div>

          <div className="mb-2">
            <input
              type="checkbox"
              value="wristwear"
              name="wristwear"
              className="form-checkbox h-5 w-5 text-gold border-2 border-black checked:border-0 mr-2 filter-checkbox"
              checked={query.category === "wristwear"}
              onChange={handleCategoryChange}
            />
            <label htmlFor="wristwear">Wristwear</label>
          </div>

          <div className="mb-2">
            <input
              type="checkbox"
              value="ringwear"
              name="ringwear"
              className="form-checkbox h-5 w-5 text-gold border-2 border-black checked:border-0 mr-2 filter-checkbox"
              checked={query.category === "wringwear"}
              onChange={handleCategoryChange}
            />
            <label htmlFor="wristwear">Ringwear</label>
          </div>

          <div className="mb-2">
            <input
              type="checkbox"
              value="men"
              name="men"
              className="form-checkbox h-5 w-5 text-gold border-2 border-black checked:border-0 mr-2 filter-checkbox"
              checked={query.category === "men"}
              onChange={handleCategoryChange}
            />
            <label htmlFor="wristwear">Men</label>
          </div>

          <div className="mb-2">
            <input
              type="checkbox"
              value="women"
              name="women"
              className="form-checkbox h-5 w-5 text-gold border-2 border-black checked:border-0 mr-2 filter-checkbox"
              checked={query.category === "women"}
              onChange={handleCategoryChange}
            />
            <label htmlFor="wristwear">Women</label>
          </div>
        </div>

        <div className="border-t py-6">
          <h3 className=" font-semibold mb-4">Collections</h3>
          <div className="mb-2">
            <input
              type="checkbox"
              value="best-sellers"
              name="bestsellers"
              className="form-checkbox h-5 w-5 text-gold border-2 border-black checked:border-0 mr-2 filter-checkbox"
              checked={query.handle === "best-sellers"}
              onChange={handleCollectionChange}
            />
            <label htmlFor="bestsellers">Bestsellers</label>
          </div>

          <div className="mb-2">
            <input
              type="checkbox"
              value="the-bulletproof-collection"
              name="bulletproof"
              className="form-checkbox h-5 w-5 text-gold border-2 border-black checked:border-0 mr-2 filter-checkbox"
              checked={query.handle === "the-bulletproof-collection"}
              onChange={handleCollectionChange}
            />
            <label htmlFor="bulletproof">Bulletproof</label>
          </div>

          <div className="mb-2">
            <input
              type="checkbox"
              value="the-greatness-collection"
              name="greatness"
              className="form-checkbox h-5 w-5 text-gold border-2 border-black checked:border-0 mr-2 filter-checkbox"
              checked={query.handle === "the-greatness-collection"}
              onChange={handleCollectionChange}
            />
            <label htmlFor="greatness">Greatness</label>
          </div>
        </div>

        <div className="border-t py-6">
          <h3 className=" font-semibold mb-4">Color</h3>
          <div className="mb-2">
            <input
              type="checkbox"
              value="gold"
              name="gold"
              className="form-checkbox h-5 w-5 text-gold border-2 border-black checked:border-0 mr-2 filter-checkbox"
              checked={query.color === "gold"}
              onChange={handleColorChange}
            />
            <label htmlFor="gold">Gold</label>
          </div>

          <div className="mb-2">
            <input
              type="checkbox"
              value="silver"
              name="silver"
              className="form-checkbox h-5 w-5 text-gold border-2 border-black checked:border-0 mr-2 filter-checkbox"
              checked={query.color === "silver"}
              onChange={handleColorChange}
            />
            <label htmlFor="silver">Silver</label>
          </div>
        </div>
      </div>
      <div className="col-span-7 mb-2">
        <div className="flex justify-between items-center">
          <h3>{products.length} Results</h3>
          <div className="">
            <label htmlFor="sort_by" className="font-semibold">
              Sort by:
            </label>
            <select
              name="sort_by"
              id=""
              value={sort}
              className="form-select"
              onChange={handleSortChange}
            >
              <option value="" className="py-4">
                Best Match
              </option>
              <option value="price_low_to_high">Price Low to High</option>
              <option value="price_high_to_low">Price High to Low</option>
              <option value="title_asc">Ascending Z to A</option>
              <option value="title_desc">Descending A to Z</option>
            </select>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {filteredProducts.map((product) => (
            <SingleProductCard
              key={product.id}
              title={product.title}
              imgSrc={product.images[0].src}
              price={product.variants[0].price}
              handle={product.handle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleCollection;

export const getServerSideProps = async (context) => {
  let products;
  const category = context.query.category;
  const handle = context.query.handle;
  const color = context.query.color;

  if (handle === "all") {
    products = await getAllProducts();
  } else {
    const collections = await getCollectionByHandle(handle);
    if (!collections) {
      products = [];
    } else {
      products = collections.products;
    }
  }
  if (category) {
    products = products.filter((product) => {
      return product.tags?.includes(category);
    });
  }

  if (color) {
    products = products.filter((product) => {
      const colorOptions = product.options.filter(
        (option) => option.name === "color"
      );
      const optionValues = colorOptions.map((option) => option.values);
      const matchValue = optionValues.find((value) => value.value === color);
      return !!matchValue;
    });
  }

  return {
    props: {
      products,
      query: context.query,
    },
  };
};

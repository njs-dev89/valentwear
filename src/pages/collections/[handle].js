import SingleProductCard from "../../components/SingleProductCard";
import { getCollectionByHandle } from "../../utils/operations";

function SingleCollection({ collection }) {
  console.log(collection);
  return (
    <div className="md:grid md:grid-cols-9 md:gap-4">
      <div className="col-span-2">
        This is the filter area. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eaque, repudiandae?
      </div>
      <div className="col-span-7">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {collection.products.map((product) => (
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
  const collection = await getCollectionByHandle(context.query.handle);
  return {
    props: {
      collection,
    },
  };
};

import Head from "next/head";
import HomeBanner from "../components/HomeBanner";
import SectionHeading from "../components/SectionHeading";
import SingleProductCard from "../components/SingleProductCard";
import SingleCollection from "../components/SingleCollection";
import { getAllCollections, getCollectionByHandle } from "../utils/operations";
import Link from "next/link";

export default function Home({ bestSeller, featureCollections }) {
  return (
    <div>
      <Head>
        <title>Valent Wear</title>
        <meta
          name="description"
          content="Valent was created to serve as a reminder that choice is at the heart of life. We can’t control the circumstances around us, but we can control how we respond in the face of adversity."
        />
      </Head>
      <HomeBanner />
      {bestSeller !== null ? (
        <div>
          <SectionHeading hashTag="#MoreThanJewelry">
            Best Sellers
          </SectionHeading>
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <SingleProductCard
              title={bestSeller.products[0].title}
              price={bestSeller.products[0].variants[0].price}
              imgSrc={bestSeller.products[0].images[0].src}
              handle={bestSeller.products[0].handle}
            />
            <SingleProductCard
              title={bestSeller.products[1].title}
              price={bestSeller.products[1].variants[0].price}
              imgSrc={bestSeller.products[1].images[0].src}
              handle={bestSeller.products[1].handle}
            />
            <SingleProductCard
              title={bestSeller.products[2].title}
              price={bestSeller.products[2].variants[0].price}
              imgSrc={bestSeller.products[2].images[0].src}
              handle={bestSeller.products[2].handle}
            />
          </div>
          <p className="text-center text-gold mt-16 font-semibold">
            <Link href={`/collections/${bestSeller.handle}`}>
              <a className="underline">View all</a>
            </Link>
          </p>
        </div>
      ) : (
        ""
      )}

      {featureCollections !== null ? (
        <div className="my-32">
          <h1 className="text-center uppercase text-3xl font-semibold mb-12">
            Featured Collections
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <SingleCollection
              name={featureCollections[0].title}
              description={featureCollections[0].description}
              imgSrc={featureCollections[0].image?.src || "/default2.jpg"}
              link={featureCollections[0].handle}
            />
            <SingleCollection
              name={featureCollections[1].title}
              description={featureCollections[1].description}
              imgSrc={featureCollections[1].image?.src || "/default2.jpg"}
              link={featureCollections[1].handle}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const bestSeller = await getCollectionByHandle("the-bulletproof-collection");
  const featureCollections = await getAllCollections();

  return {
    props: {
      bestSeller,
      featureCollections,
    },
  };
};

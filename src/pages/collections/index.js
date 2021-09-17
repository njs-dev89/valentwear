import SectionHeading from "../../components/SectionHeading";
import Image from "next/image";
import { getAllCollections } from "../../utils/operations";
import SingleCollection from "../../components/SingleCollection";

function CollectionsPage({ collections }) {
  console.log(collections);
  return (
    <div className="collections relative">
      <div
        className="v-image absolute -top-24"
        style={{ width: "100%", height: "1000px" }}
      >
        <Image
          src="/v.png"
          alt=""
          width="1000px"
          height="1000px"
          layout="fill"
          className=""
        />
      </div>
      <SectionHeading hashTag="#ChooseGreatness">
        THE COLLECTIONS
      </SectionHeading>
      <p className="text-center mx-auto tagline w-3/5 mt-2 md:text-base text-sm">
        Valent was created to serve as a reminder that choice is at the heart of
        life. We can’t control the circumstances around us, but we can control
        how we respond in the face of adversity.
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-16 mt-24">
        {collections.map((collection) => {
          return (
            <SingleCollection
              key={collection.id}
              name={collection.title}
              description={
                collection.description ||
                "The founding collection. Be a victim victor of life’s circumstances."
              }
              link={`/collections/${collection.handle}`}
              imgSrc={collection.image?.src || "/default2.jpg"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CollectionsPage;

export const getServerSideProps = async (context) => {
  const collections = await getAllCollections();

  return {
    props: {
      collections,
    },
  };
};

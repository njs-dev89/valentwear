import SectionHeading from "../components/SectionHeading";
import Image from "next/image";

function AboutPage({ about }) {
  return (
    <div>
      <div className="">
        <SectionHeading hashTag="#ChooseGreatness">
          Victors <del className="mx-2 hidden lg:inline">Victoms</del> of
          Circumstance
        </SectionHeading>
        <p className="text-center mx-auto tagline w-3/5 mt-2 md:text-base text-sm">
          Valent was created to serve as a reminder that choice is at the heart
          of life. We can’t control the circumstances around us, but we can
          control how we respond in the face of adversity.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div className="col-span-1">
          <div className="relative" style={{ height: "700px", width: "100%" }}>
            <Image src="/about.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-medium mb-6">About us</h2>
          <p className="mb-2 font-medium">
            <span className="font-semibold">
              Choice is at the heart of life.
            </span>{" "}
            So much so that every decision determines your destiny. And though
            we cannot always control the circumstances around us, we can control
            how we choose to respond in the face of the adversity.
          </p>
          <p className="mb-2 font-medium">
            At Valent, we believe that there are times when we need an extra
            force to remind us that we have the ultimate choice every day of who
            we are to become, what we are to do and where we are to go no matter
            the circumstances.{" "}
          </p>{" "}
          <p className="mb-2 font-medium">
            And that is where we come in. As a luxury jewelry brand that focuses
            on creating powerful symbolic reminders through their collections,
            each Valent collection is connected with a symbolic message of
            choosing the harder right than the easier wrong.
          </p>
          <p className="mb-2 font-medium">
            Designed in the fashion capital of the world, New York City, each
            piece is hand-crafted locally one by one with the finest materials
            to create an aesthetic that is perfect for whom it was designed-
            you.
          </p>
          <p className="mb-2 font-medium">
            Valent pieces are powerful emblems for internal change. Adversity is
            inevitable in life. Whether you are a victor or a victim of
            life&apos;s circumstances is a matter of choice. Valent pieces
            embolden you to choose the greater through powerful, symbolic
            reminders personal to you. The choice is yours.{" "}
            <span className="font-semibold">Choose greatness.</span>
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-16 gap-12">
        <div className="col-span-1">
          <h2 className="text-2xl font-medium mb-6">Thank you</h2>
          <p className="mb-2 font-medium">
            On a personal note, we&apos;d like to thank everyonewho has
            supported the brand, its mission and joined in the movement in
            making more victors in the world. Our customers are integral to what
            we are building and inspire us everyday with the stories
            they&apos;ve shared about their Valent piece.
          </p>
          <p className="mb-2 font-medium">
            If there is ever anything you would like to discuss, please email us
            on team@valentwear.com
          </p>
          <p>Colby & Canyon</p>
          <p>VALENT | Co-Founders</p>
        </div>
        <div className="col-span-1">
          <div className="relative" style={{ height: "400px", width: "100%" }}>
            <Image src="/thank.png" alt="" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

export const getStaticProps = async () => {
  return {
    props: {
      about: "About",
    },
  };
};

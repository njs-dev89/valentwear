import SectionHeading from "../components/SectionHeading";
import { useRouter } from "next/router";
import Head from "next/head";
function ContactUs() {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Head>
        <title>Contact us</title>
        <meta
          name="description"
          content="Valent was created to serve as a reminder that choice is at the heart of life. We can’t control the circumstances around us, but we can control how we respond in the face of adversity."
        />
      </Head>
      <SectionHeading>Contact us</SectionHeading>
      <p className="text-center mx-auto tagline w-3/5 mt-4 md:text-base text-sm">
        Please fill out the form below for general contact inquiries or
        questions about ordering. We strive to respond within 2-3 business days.
      </p>
      <div className="mt-12">
        <form className="text-center">
          <div className="grid grid-cols-5">
            <div className="md:col-span-1"></div>
            <div className="grid grid-cols-2 md:col-span-3 col-span-5 gap-4">
              <div className="">
                <input
                  type="text"
                  placeholder="First name"
                  className="form-input border-2 border-black mr-4 w-full"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  className="form-input border-2 border-black w-full"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input border-2 border-black w-full"
                />
              </div>
              <div className="col-span-2">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="form-textarea border-2 border-black w-full"
                >
                  Write your message here...
                </textarea>
              </div>
            </div>
            <div className="md:col-span-1"></div>
          </div>
          <button className="px-8 py-2 mt-4 bg-black text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

export async function getServerSideProps() {
  console.log("contact page");
  return {
    props: {
      about: "About",
    },
  };
}

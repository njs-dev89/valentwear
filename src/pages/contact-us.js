import SectionHeading from "../components/SectionHeading";
import { useRouter } from "next/router";

function ContactUs() {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
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

export const getStaticProps = () => {
  return {
    props: {},
  };
};

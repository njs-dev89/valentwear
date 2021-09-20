import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import FooterLinks from "./FooterLinks";
function Footer() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-20 xl:px-0 px-8">
        <div className="grid lg:grid-cols-7 md:grid-cols-5 md:gap-8 lg:gap-16 xl:gap-32">
          <div className="lg:col-span-5 md:col-span-3 mx-auto">
            <div className="grid md:cols-2 lg:grid-cols-4 gap-8">
              <div className="">
                <Image
                  src="/valentLogo.png"
                  width="140px"
                  height="70px"
                  alt=""
                  unoptimized
                />
                <p className="text-base mt-6 font-medium">(555) 555 5555</p>
                <p className="text-base font-medium">email@example.com</p>

                <div className="flex justify-start pt-6">
                  <FaFacebookF className="text-xl mr-4" />
                  <FaInstagram className="text-xl mr-4" />
                  <FaTwitter className="text-xl mr-4" />
                  <FaPinterestP className="text-xl mr-4" />
                </div>
              </div>
              <FooterLinks
                title="Shop"
                links={[
                  {
                    text: "Neckwear",
                    link: "/collections/all?category=neckwear",
                  },
                  {
                    text: "Wristwear",
                    link: "/collections/all?category=wristwear",
                  },
                  {
                    text: "Ringwear",
                    link: "/collections/all?category=ringwear",
                  },
                  { text: "Collections", link: "/collections" },
                  { text: "Men", link: "/collections/all?category=men" },
                  { text: "Women", link: "/collections/all?category=women" },
                ]}
              />
              <FooterLinks
                title="Community"
                links={[
                  { text: "Brand", link: "/anout-us" },
                  { text: "Stories of Greatness", link: "/blogs/news" },
                  { text: "Contact us", link: "/contact-us" },
                ]}
              />
              <FooterLinks
                title="Company"
                links={[
                  { text: "Shipping", link: "/" },
                  { text: "Returns and exchange", link: "/" },
                  { text: "Track your Order", link: "/" },
                ]}
              />
            </div>
          </div>
          <div className="md:col-span-2 w-3/4 mx-auto md:w-full mt-12 md:mt-0">
            <div className="border-t">
              <p className="my-4">
                Join our community of victors choosing to live a life of
                greatness
              </p>
              <div>
                <label className="hidden">Enter Email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="form-input border-2 border-black w-full"
                />
              </div>
              <button className="px-12 py-2 mt-4 bg-black text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t mt-16 ">
        <div className="flex justify-between py-6 max-w-screen-xl mx-auto">
          <p className="text-sm font-medium">Valent Wear &#174; 2021</p>
          <div className="">
            <span className="text-sm font-medium mr-8">Terms</span>
            <span className="text-sm font-medium">Privacy</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

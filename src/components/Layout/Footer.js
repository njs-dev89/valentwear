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
    <div className="max-w-screen-xl mx-auto mt-20 xl:px-0 px-8">
      <div className="grid grid-cols-7 gap-32">
        <div className="col-span-5">
          <div className="grid grid-cols-4 gap-8">
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
                { text: "Neckwear", link: "/" },
                { text: "Wristwear", link: "/" },
                { text: "Ringwear", link: "/" },
                { text: "Collections", link: "/collections" },
                { text: "Men", link: "/" },
                { text: "Women", link: "/" },
              ]}
            />
            <FooterLinks
              title="Community"
              links={[
                { text: "Brand", link: "/" },
                { text: "Stories of Greatness", link: "/" },
                { text: "Contact us", link: "/" },
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
        <div className="col-span-2 ">
          <div className="border-t">
            <p className="my-4">
              Join our community of victors choosing to live a life of greatness
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
  );
}

export default Footer;

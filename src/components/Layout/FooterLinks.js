import React from "react";
import Link from "next/link";

function FooterLinks({ title, links }) {
  return (
    <div className="border-t">
      <h3 className="font-semibold text-sm my-4">{title}</h3>
      <ul>
        {links.map((linkItem) => {
          return (
            <li key={linkItem.text} className="my-1">
              <Link href={linkItem.link}>
                <a className="text-sm">{linkItem.text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterLinks;

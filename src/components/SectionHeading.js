import React from "react";

function SectionHeading({ hashTag, children }) {
  return (
    <div className="">
      <div className="flex flex-col items-center text-2xl sm:text-4.5xl font-bold tracking-widest ">
        <span className="text-base font-normal tracking-wider mb-2">
          {hashTag}
        </span>
        <h1 className="headline text-center w-full flex items-center justify-center uppercase">
          {children}
        </h1>
      </div>
    </div>
  );
}

export default SectionHeading;

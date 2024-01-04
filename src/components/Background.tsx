import React, { ReactNode } from "react";

type BackgroundType = {
  className?: string,
  children?: ReactNode
}

const Background = ({className, children}: BackgroundType) => {
  return (
    <>
      <div>
        <div className="z-10">
        {children}
        </div>
        <div className="z-0 absolute flex h-screen w-screen px-5">
          <div className=" h-full w-1/2 border-x-2 border-dotted border-black/5" />
          <div className=" h-full w-1/2 border-r-2 border-dotted border-bla" />
        </div>
      </div>
    </>
  );
};

export default Background;

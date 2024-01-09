import React, { Children } from "react";
import Image from "next/image";
import cn from "@/app/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

interface BoxTextIconeProps extends VariantProps<typeof BoxTextImageVariants> {
  src: string;
  width: number;
  height: number;
  alt: string;
  classIcone?: string;

  children: React.ReactNode;
}

const BoxTextIcone = ({
  src,
  width,
  height,
  alt,
  classIcone,
  children,
  align,
  detalhe,
}: BoxTextIconeProps) => {
  return (
    <div className="my-auto flex flex-col md:w-2/3 font-brandon">
      <h2 className={cn(BoxTextImageVariants({ align, detalhe }))}>
        {children}
      </h2>
      <Image
        src={src} //"/images/icon_1.svg"
        width={width}
        height={height}
        quality={100}
        alt={alt}
        className={
          "w-20 self-center md:mt-10 md:w-32" + " " + classIcone
        }
      />
    </div>
  );
};

export default BoxTextIcone;

const BoxTextImageVariants = cva("", {
  variants: {
    align: {
      right: "border-r-2 my-8 px-5 text-justify text-base font-brandon md:text-right md:text-lg lg:text-xl text-gray-800 md:pl-5 ",
      left:
        "border-l-2 my-8 px-5 text-justify text-base  md:text-left md:text-lg lg:text-xl text-gray-800 md:pr-5",
      center:
        "border-l-2 my-8 px-5 text-justify text-base  md:text-lg lg:text-xl text-gray-800 md:px-2",
    },
    detalhe: {
      brand_Azul: "border-blue-500",
      brand_Cinza: "border-gray-400",
    },
  },
  defaultVariants: {
    align: "right",
    detalhe: "brand_Azul",
  },
});

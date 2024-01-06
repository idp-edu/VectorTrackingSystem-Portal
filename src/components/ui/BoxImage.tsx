import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { cva, VariantProps } from "class-variance-authority";
import cn from "../../app/lib/utils";

interface BoxImageProps extends VariantProps<typeof imageVariants> {
  src: string | StaticImport;
  width: number | `${number}` | undefined;
  height: number | `${number}` | undefined;
  alt: string;
  classImg?: string;
}

const BoxImage = ({ src, width, height, alt, classImg, model, color }: BoxImageProps) => {
  return (
    <div className="my-auto flex flex-col md:w-2/3">
      {/* Box color + Imagem  */}
      <div className={cn(imageVariants({model, color}))}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          quality={100}
          className={"absolute"+ " " + classImg}
        />
      </div>
    </div>
  );
};

export default BoxImage;

const imageVariants = cva("relative  drop-shadow", {
  variants: {
    model: {
      primary: "mx-auto h-80 w-48 rounded-[40px] md:h-96 md:w-60",
      secuncary: "mt-5 h-80 w-48 rounded-[40px] md:h-96 md:w-60",
    },
    color: {
      brand_Azul: "bg-blue-400",
      brand_Cinza: "bg-gray-400",
    },
  },
  defaultVariants: {
    model: "primary",
    color: "brand_Azul",
  },
});

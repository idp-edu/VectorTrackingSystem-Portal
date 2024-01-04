import Link from "next/link";
import Image from "next/image";

interface Props {
  title?: string;
  className?: string;
}

const Logo = ({ title, className }: Props) => {
  return (
    <Link href={"/"} className="flex">
      <Image
        src="/images/logo/Logo_Variação_7.svg"
        width={1}
        height={1}
        alt="Foto de Caixas de coleta."
        className="w-[50px]"
      />
      <h1 className={`text-1xl font-extrabold ${className}`}>
        {title || "VectorTrackingSystem"}
      </h1>
    </Link>
  );
};

export default Logo;

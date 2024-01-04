import Image from "next/image";

function SectionHome2({ className }: { className?: string }) {
  return (
    <>
      {/* Background  */}
      <div>
        <div className="absolute z-0 flex h-screen w-screen px-5">
          <div className=" h-full w-1/2 border-x-2 border-dotted border-black/10" />
          <div className=" h-full w-1/2 border-r-2 border-dotted border-black/10" />
        </div>
      </div>
      {/* Pagina  */}
      <section className="z-1 m-5 flex flex-col bg-transparent md:flex-row md:justify-end">
        {/* Box color + Imagem  */}
        <div className="relative mx-auto h-80 w-48 rounded-[40px] bg-blue-400 drop-shadow md:h-96 md:w-60">
          <Image
            src="/images/Foto_Caixa.png"
            width={250}
            height={300}
            alt="Foto de Caixas de coleta."
            className="absolute top-20 scale-150"
          />
        </div>

        {/* Box text + Icon */}
        <div className="my-auto flex flex-col md:w-2/3 ">
          <div className="my-8 border-r-2 border-blue-500 px-5 text-right text-base font-[390] text-gray-800 md:text-lg  lg:text-xl">
            Nosso inovador módulo de captura, equipado com câmera e inteligência
            artificial, diferencia mosquitos Aedes de outras espécies. Os
            insetos capturados são segregados em duas camadas: uma para
            mosquitos Aedes, permitindo análise detalhada, e outra para outros
            insetos, otimizando a eficiência do mapeamento e estratégias de
            controle.
          </div>
          <Image
            src="/images/icon_1.svg"
            width={300}
            height={300}
            quality={100}
            alt="Foto de Caixas de coleta."
            className="w-20 max-w-full self-center md:mt-10 md:w-32"
          />
        </div>
      </section>
    </>
  );
}

export default SectionHome2;

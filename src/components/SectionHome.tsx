import Image from "next/image";

function SectionHome() {
  return (
    <>
      <section className="flex h-60 w-auto flex-row place-content-around gap-11  bg-cyan-500">
        <div className="basis-1/4">
          <div className="h-12 w-10 rounded-lg bg-black"></div>
        </div>
        <div className="place-content-evely basis-1/2">
          <div className="">
            <p>
              Nosso inovador módulo de captura, equipado com câmera e
              inteligência artificial, diferencia mosquitos Aedes de outras
              espécies. Os insetos capturados são segregados em duas camadas:
              uma para mosquitos Aedes, permitindo análise detalhada, e outra
              para outros insetos, otimizando a eficiência do mapeamento e
              estratégias de controle.
            </p>
          </div>
        </div>
      </section>

      <section className="m-9 flex flex-col gap-5 bg-slate-400 max-md:items-stretch max-md:gap-0 md:flex-row">
        {/* Box color + Imagem  */}
        <div>
          <div className="size-full rounded-[40px] bg-blue-400" />
          <div className="relative w-full">
            <Image
              src="/images/Foto_Caixa.png"
              width={300}
              height={300}
              alt="Foto de Caixas de coleta."
              className="absolute inset-0"
            />
          </div>
        </div>
        {/* Box text + Icon */}
        <div className="ml-5 w-[55%] items-stretch max-md:ml-0 max-md:w-full">
          <div className="my-auto md:flex-row items-stretch px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-1xl leading-1 justify-center text-right font-[390] text-gray-800 max-md:max-w-full">
              Nosso inovador módulo de captura, equipado com câmera e
              inteligência artificial, diferencia mosquitos Aedes de outras
              espécies. Os insetos capturados são segregados em duas camadas:
              uma para mosquitos Aedes, permitindo análise detalhada, e outra
              para outros insetos, otimizando a eficiência do mapeamento e
              estratégias de controle.
            </div>
            <Image
              src="/images/icon_1.svg"
              width={300}
              height={300}
              alt="Foto de Caixas de coleta."
              className="ml-6 mt-20 aspect-[4.77] w-[166px] max-w-full self-center overflow-hidden object-contain object-center md:mt-10"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionHome;

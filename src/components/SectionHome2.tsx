import Image from "next/image";
import BoxImage from "./ui/BoxImage";
import BoxTextIcone from "./ui/BoxTextIcone";

function SectionHome2() {
  return (
    <div className="bg-white bg-[url('/images/bg-site.svg')]">
      {/* Background  */}
      <div>
        <div className="absolute z-0 flex h-screen w-screen px-5">
          <div className=" h-full w-1/2 border-x-2 border-dotted border-black/10" />
          <div className=" h-full w-1/2 border-r-2 border-dotted border-black/10" />
        </div>
      </div>

      {/*                           Pagina                           */}
      <section className=" z-1 mx-5 my-36 flex flex-col bg-transparent md:flex-row md:justify-end">
        <BoxImage
          src="/images/Foto_Caixa.png"
          width={442}
          height={590}
          alt="Mapa de calor"
          color={"brand_Azul"}
          classImg=" top-20 scale-150"
        />

        <BoxTextIcone
          align={"right"}
          src="/images/icon_1.svg"
          width={300}
          height={300}
          alt="Icone de duas esferas se fundindo"
        >
          Nosso inovador módulo de captura, equipado com câmera e inteligência
          artificial, diferencia mosquitos Aedes de outras espécies. Os insetos
          capturados são segregados em duas camadas: uma para mosquitos Aedes,
          permitindo análise detalhada, e outra para outros insetos, otimizando
          a eficiência do mapeamento e estratégias de controle.
        </BoxTextIcone>
      </section>

      <section className="z-1 mx-5 my-36 flex flex-col bg-transparent md:flex-row-reverse md:justify-end">
        <BoxImage
          src="/images/Mapa_Calor.png"
          width={442}
          height={590}
          alt="Mapa de calor"
          color={"brand_Azul"}
          classImg=" top-16 scale-[1.15] right-2"
        />

        <BoxTextIcone
          align={"left"}
          src="/images/icon_2.svg"
          width={300}
          height={300}
          alt="Icone de três esferas se fundindo"
        >
          O mapa de calor integrado ao Vector Tracking System oferece uma visualização abrangente dos focos do Aedes aegypti em Brasília. Combinando dados de localização, sexo, data, clima e temperatura média, proporcionamos uma ferramenta eficaz para identificação de áreas críticas, impulsionando estratégias de controle e prevenção direcionadas
        </BoxTextIcone>
      </section>

      <section className="z-1 mx-5 my-36 flex flex-col bg-transparent md:flex-row md:justify-end">
        <BoxImage
          src="/images/Rectangle.png"
          width={535}
          height={452}
          alt="Mapa de calor"
          color={"brand_Azul"}
          classImg="top-24 left-1 scale-[1.2]"
        />

        <BoxTextIcone
          align={"right"}
          src="/images/icon_3.svg"
          width={400}
          height={300}
          alt="Icone de três esferas se fundindo"
          classIcone="scale-[1.5]"
        >
          Nosso drone é concebido para escalabilidade eficiente, apresentando um compartimento inferior para alojar módulos de captura. Essa abordagem permite que um único drone, operando de forma semi-autônoma, abranja várias áreas de coleta, otimizando a eficácia do Vector Tracking System no monitoramento do Aedes aegypti em Brasília.
        </BoxTextIcone>
      </section>
    </div>
  );
}

export default SectionHome2;

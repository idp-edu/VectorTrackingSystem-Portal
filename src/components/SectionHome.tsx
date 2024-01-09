"use client";

import Image from "next/image";
import BoxImage from "./ui/BoxImage";
import BoxTextIcone from "./ui/BoxTextIcone";
import Card from "./ui/Card";
import NewButton from "./ui/Button";
import Hero from "./Hero";

function SectionHome() {
  return (
    <div>
      {/*                           Pagina                           */}
      <Hero />
      <div className=" z-1 mx-5 my-36 flex flex-col bg-transparent md:flex-row md:justify-end">
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
      </div>

      <div className="z-1 mx-5 my-36 flex flex-col bg-transparent md:flex-row-reverse md:justify-end">
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
          O mapa de calor integrado ao Vector Tracking System oferece uma
          visualização abrangente dos focos do Aedes aegypti em Brasília.
          Combinando dados de localização, sexo, data, clima e temperatura
          média, proporcionamos uma ferramenta eficaz para identificação de
          áreas críticas, impulsionando estratégias de controle e prevenção
          direcionadas
        </BoxTextIcone>
      </div>

      <div className="mx-5 flex flex-col bg-transparent md:flex-row md:justify-end">
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
          Nosso drone é concebido para escalabilidade eficiente, apresentando um
          compartimento inferior para alojar módulos de captura. Essa abordagem
          permite que um único drone, operando de forma semi-autônoma, abranja
          várias áreas de coleta, otimizando a eficácia do Vector Tracking
          System no monitoramento do Aedes aegypti em Brasília.
        </BoxTextIcone>
      </div>

      <div className="flex flex-row content-evenly justify-center p-10">
        <NewButton
          onClick={() => alert("usa porra!")}
          intent={"primary"}
          className="h-12 w-36"
        >
          Saiba mais
        </NewButton>
      </div>

      <section className="bg-blue-950">
        <p className="pl-16 pt-3 text-white">Apoiadores:</p>
        <div className="flex flex-col items-center justify-around pb-5 md:flex-row">
          <Image
            src="/images/logo/FAPDF.png"
            width={800}
            height={1}
            alt="Logo-IDP"
            className="w-96 md:w-1/2 lg:w-1/3"
          />
          <Image
            src="/images/logo/logo-idp-branco.svg"
            width={250}
            height={250}
            alt="Logo-IDP"
            className="w-28  lg:w-[10%]"
          />
        </div>
      </section>

      <section>
        <div className="flex flex-row place-content-center items-center gap-4 p-5">
          <div className="size-3 rounded-full bg-vtsBrand-blue_heavy"></div>
          <h2 className="font-brandon text-lg">Ultimas Atualizações</h2>
          <div className="size-3 rounded-full bg-vtsBrand-blue_heavy"></div>
        </div>
        <div>
          <Card />
        </div>
      </section>
    </div>
  );
}

export default SectionHome;

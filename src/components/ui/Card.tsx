import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="relative">
      <div className=" m-10 flex flex-col place-content-center">
        <div className="flex h-full w-full flex-row place-content-center rounded-[20px] bg-white p-3 drop-shadow-vts">
          <div className="relative h-full w-full">
            <Image
              src="/images/blog/aii.png"
              width={300}
              height={300}
              sizes="fill"
              alt="Blog Image"
              placeholder="data:image/PCB.png" // imagem substituta padrão
              className="absolute left-0 top-0 rounded-l-2xl rounded-br-[90%] "
            />
          </div>
          <div className="flex-auto w-3/5 p-2">
            <p className="text-lg">Sistemas Embarcados</p>
            <h2 className="text-lg">
              Desenvolvimento de um Drone de Baixo Custo para Captura Eficiente
              de Vetores: Inovações Tecnológicas na Monitorização de Populações
              de Insetos Transmissores de Doenças.
            </h2>
            <p className="text-base">
              Este artigo apresenta o projeto e construção de um drone
              economicamente viável para a captura de vetores. Explora avanços
              tecnológicos para monitorar e mitigar a propagação de doenças
              transmitidas por insetos.
            </p>
          </div>
        </div>
        {/* <div className="relative z-20 rounded-full">
          Hello modafoca!
          <Image
            src="/images/blog/aii.png"
            width={2000}
            height={500}
            sizes="fill"
            alt="Blog Image"
            placeholder="data:image/PCB.png" // imagem substituta padrão
            className="rounded-r-full rounded-t-none"
          />
          <div className="absolute left-0 top-0 z-30 h-auto w-auto bg-black/10"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Card;

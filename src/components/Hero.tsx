import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="tiltedHero -top-14 z-0">
        <div className="relative">
          <Image
            src="/images/Drone_01.png"
            width={800}
            height={500}
            alt="Hero"
            className="z-1 absolute md:top-48 md:-bottom-[5%] md:right-[0%]"
          />
        </div>

        <div className="absolute mx-5 mt-72 sm:mt-52 md:ml-10 md:mt-28 md:w-2/5 ">
          <h1 className="z-10 w-full text-3xl text-gray-200 md:text-6xl">
            Alçando voos contra o Aedes: Drones e IA no controle eficaz.
          </h1>
          <h2 className="mt-5 w-full pr-5 lg:pr-10 text-gray-300 md:mt-10 md:text-xl lg:mr-5">
            Descubra como nosso Vector Tracking System, equipado com drones e
            IA, revoluciona o combate ao Aedes aegypti, oferecendo insights
            precisos para ações preventivas.
          </h2>
        </div>
      </div>
    </>
  );
}

export default Hero;

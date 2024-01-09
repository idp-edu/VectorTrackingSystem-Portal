import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="tiltedHero">
      <Image 
        src="/images/Drone_01.png"
        width={500}
        height={500}
        alt="Hero"
      />
    </div>
  );
}

export default Hero;

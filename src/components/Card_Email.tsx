import React from "react";
import { FormEvent } from "react";
import Button from "./ui/Button";


const Card_Email = () => {
  return (
    <section className="flex h-full p-3 md:p-10 w-full flex-col items-center justify-center bg-gradient-to-r from-vtsBrand-blue_medium to-vtsBrand-blue_light text-gray-500 gap-5">
      <p className="md:text-3xl text-2xl lg:text-4xl uppercase text-center text-white m-3">
        Siga todas nossas atualizações e publicações
      </p>
      <form className="w-full flex flex-col items-center justify-center">
        <input className="w-4/5 md:w-2/3 mx-44 rounded-xl h-9 p-5 text-center" type="text" name="name" />
        <Button intent={"solid"} type="submit">Enviar</Button>
      </form>
    </section>
  );
};

export default Card_Email;

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import NewButton from "./ui/Button";

function Navbar() {
  const navigation = [
    { title: "Home", href: "/" },
    { title: "Sobre", href: "/about" },
    { title: "Publicações", href: "/blog" },
    // { title: "Mapa de calor", href: "/heatmap"},
    // { title: "Login", href: "/login"},
  ];

  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-white bg-white/0 backdrop-blur-lg transition-all">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-evenly px-4 lg:px-0">
        <Logo title="Vector Tracking System" className="text-black" />
        <div className="hidden items-center gap-7 text-gray-900 duration-200 hover:text-black md:inline-flex ">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="group relative overflow-hidden text-sm font-semibold uppercase"
            >
              {item?.title}
              <span className="botton-0 group-houver:translate-x-0 absolute left-0 inline-block h-[1px] w-full -translate-x-[100%] bg-blue-700 transition-transform duration-200" />
            </Link>
          ))}
        </div>
        <div className="hidden md:flex md:flex-row md:gap-5">
          <NewButton intent={"primary"}>Mapa de calor</NewButton>
          <NewButton intent={"secondary"}>Entrar</NewButton>
        </div>
        <div className="md:hidden">
          <FiMenu className="text-2xl" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

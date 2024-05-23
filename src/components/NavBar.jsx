import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="self-stretch h-[100px] relative max-w-full text-left text-lg text-black font-paragraph">
      <div className="absolute top-[0px] left-[0px] bg-white box-border w-full overflow-hidden flex flex-col items-center justify-center py-0 px-16 max-w-full h-full border-b-[1px] border-solid border-black mq800:pl-8 mq800:pr-8 mq800:box-border">
        <div className="self-stretch flex flex-row items-center justify-center py-[52px] px-0 box-border gap-[32px] max-w-full mq800:gap-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[32px] mq450:gap-[16px]">
              <div className="relative inline-block min-w-[70px] whitespace-nowrap">
                <Link href="sobre-mi">Sobre mi</Link>
              </div>
              <div className="relative inline-block min-w-[70px] whitespace-nowrap">
                <Link href="habilidades">Habilidades</Link>
              </div>
              <div className="relative inline-block min-w-[70px] whitespace-nowrap">
                <Link href="proyectos">Proyectos</Link>
              </div>
              <div className="relative inline-block min-w-[70px] whitespace-nowrap">
                <Link href="contacto">Contacto</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <Link href="/">
              <img
                className="h-[150px] w-auto relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/media/logo.png"
              />
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-end justify-center max-w-full">
            <button className="cursor-pointer py-1.5 px-[19px] bg-gold-2 flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-darkolivegreen-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="relative text-base font-btn text-white text-left inline-block min-w-[99px]">
                Descargar CV
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

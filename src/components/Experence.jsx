import React from "react";
import Column from "./Column";
import Link from "next/link";

export default function Experence() {
  return (
    <div className="self-stretch bg-gold-3 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border gap-[80px] max-w-full z-[1] mt-[-52px] text-center text-base text-black font-text-small-link mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:pb-[73px] mq800:box-border mq450:gap-[20px]">
      <div className="w-[768px] flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="w-0 h-6 relative leading-[150%] font-semibold inline-block" />
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-[24px] max-w-full text-left text-29xl font-h3">
          <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-[121%] shrink-0 mq800:text-19xl mq450:text-10xl">
            habilidades y conocimientos
          </h1>
          <div className="self-stretch h-[21px] relative text-lg font-paragraph inline-block" />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[48px] text-xl font-h3 mq800:gap-[24px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] mq800:gap-[16px]">
          <Column
            mediumLengthSectionHeadin="Backend"
            loremIpsumDolorSitAmetCon="He creado sitios con Node y ExpressJS, además de la API de NextJS."
          />
          <Column
            mediumLengthSectionHeadin="Frontend"
            loremIpsumDolorSitAmetCon="Conozco de React junto con NextJS. "
          />
          <Column
            mediumLengthSectionHeadin="bases de datos"
            loremIpsumDolorSitAmetCon="Sé de Modelado y he trabajado con PostgresSQL, Supabase y conozco poco de MongoBD."
          />
          <Column
            mediumLengthSectionHeadin="Estilos Css"
            loremIpsumDolorSitAmetCon="Estilos con CSS, Style Componets, Tailwind y un poco de Bootsrap"
          />
        </div>
        <div className="flex flex-row items-center justify-start pt-4 px-0 pb-0 gap-[24px] text-left text-lg font-paragraph">
          <button className="cursor-pointer py-2.5 px-[23px] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-lg font-paragraph text-black text-left inline-block min-w-[54px]">
              Ver CV
            </div>
          </button>
          <div className="flex flex-row items-center justify-center gap-[5px]">
            <Link href="/habilidades">
              <div className="relative inline-block min-w-[120px]">Ver más</div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/svg/icon--chevron-right.svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

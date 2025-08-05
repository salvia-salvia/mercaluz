"use client";

import { fishCategories } from "@/constants";

import { MultiLangText } from "@/types";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CategoriesContent() {
  const t = useTranslations("category");
  const tLinkTitle = useTranslations("linkTitle");
  const localeRaw = useLocale();

  const locale = localeRaw as keyof MultiLangText;

  const [selected, setSelected] = useState(0);
  return (
    <div className="w-full min-h-screen font-open-sans flex flex-col items-center">
      <div className="w-full max-w-7xl px-8 pb-20  mx-auto">
        <h2 className="text-xl max-w-3xl  font-semibold tracking-widest md:leading-20 sm:text-3xl 2xl:text-5xl  mb-2">
          {t("title")}
        </h2>
        <p className="text-gray-800 md:text-lg leading-relaxed ">
          {t("subTitle")}
        </p>
      </div>
      <div className=" relative flex flex-col-reverse lg:flex-row items-center justify-center w-full mx-auto  my-10 gap-12 p-6 ">
        <div className=" relative flex flex-col justify-center items-center gap-0">
          <Image
            width={500}
            height={400}
            src={fishCategories[selected].image}
            alt={fishCategories[selected].name[locale]}
            className="object-cover w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
          />
          <div className="absolute -bottom-8   ">
            {" "}
            <Link
              href={`/${localeRaw}/products/${fishCategories[selected].id} `}
              title={`${tLinkTitle("viewProductscategory")} ${
                fishCategories[selected].name[locale]
              }`}
              aria-label={`${tLinkTitle("viewProductscategory")} ${
                fishCategories[selected].name[locale]
              }`}
            >
              <button className="relative mt-8 inline-block px-10 py-2 border border-[#34699a] cursor-pointer text-[#34699a] font-medium overflow-hidden group">
                <span className="absolute left-0 top-1/2 w-full h-0 bg-[#34699a] z-0 transition-all duration-300 ease-out group-hover:h-full transform -translate-y-1/2"></span>
                <span className="relative uppercase z-10 group-hover:text-white transition-colors duration-300">
                  {t("btn1")}
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center lg:gap-26">
          <div className="absolute  ml-[10px] bg-gray-400 w-[1px] h-full max-h-[360px]"></div>

          <ul className="flex flex-col gap-8">
            {fishCategories.map((cat, idx) => (
              <li
                key={cat.name.en}
                onClick={() => setSelected(idx)}
                className="flex items-center   cursor-pointer group"
              >
                <span
                  className={`w-5 h-5 rounded-full mr-4 
                ${selected === idx ? "border-1  border-gray-400" : "bg-white"}
                transition-colors duration-300`}
                ></span>

                <span
                  className={`text-lg font-medium transition-colors whitespace-nowrap duration-300
                ${selected === idx ? "text-[#34699a]" : "text-gray-800 ml-8"}`}
                >
                  {cat.name[locale]}
                </span>
              </li>
            ))}
          </ul>
          {/* all products btn */}
          <div className="relative hidden sm:flex justify-center">
            <div className="absolute  z-20 bottom-20 mx-auto ml-12">
              <div className="text-center text-xl  mb-3">
                <span className="">80+</span>
                <p> {t("FishTypes")}</p>
              </div>
              <Link href={`/products`}>
                {" "}
                <button className="relative mt-8 inline-block px-10 py-2 border border-[#34699a] cursor-pointer text-[#34699a] font-medium overflow-hidden group">
                  <span className="absolute left-0 top-1/2 w-full h-0 bg-[#34699a] z-0 transition-all duration-300 ease-out group-hover:h-full transform -translate-y-1/2"></span>
                  <span className="relative uppercase z-10 group-hover:text-white transition-colors duration-300">
                    {t("SeeAll")}
                  </span>
                </button>
              </Link>
            </div>
            <Image
              width={500}
              height={400}
              src={"/img/proBg.png"}
              alt="fish"
              className="object-cover w-[300px] 2xl:w-[350px] h-[400px] 2xl:h-[450px]"
            />
          </div>
        </div>
      </div>
      {/* all products btn */}
      <div className="relative mt-20 flex sm:hidden justify-center">
        <div className="absolute  z-20 bottom-20 mx-auto">
          <div className="text-center text-xl mb-3">
            <span className="">80+</span>
            <p> {t("FishTypes")}</p>
          </div>
          <Link href={`/products`}>
            <button className="relative mt-8 inline-block px-10 py-2 border border-white cursor-pointer text-white font-medium overflow-hidden group">
              <span className="absolute left-0 top-1/2 w-full h-0 bg-white z-0 transition-all duration-300 ease-out group-hover:h-full transform -translate-y-1/2"></span>
              <span className="relative uppercase z-10 group-hover:text-[#34699a] transition-colors duration-300">
                {t("SeeAll")}
              </span>
            </button>
          </Link>
        </div>
        <Image
          width={500}
          height={400}
          src={"/img/proBgSm.png"}
          alt="fish"
          className="object-cover w-[300px] 2xl:w-[350px] h-[400px] 2xl:h-[450px]"
        />
      </div>
    </div>
  );
}

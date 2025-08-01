import { fishCategories, products } from "@/constants";
import { Categories, MultiLangText } from "@/types";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactContent from "./ContactContent";

export default function FishContent({
  category,
  fish,
}: {
  category: Categories;
  fish: string;
}) {
  const localeRaw = useLocale();
  const t = useTranslations("contact_us");
  const tProd = useTranslations("category");
  const locale = localeRaw as keyof MultiLangText;
  const categoryInfo = fishCategories.find((cat) => cat.id == category);
  const productsInfo = products[category];
  const fishInfo = productsInfo.find((fishI) => fishI.id == fish);

  return (
    <div className="flex  flex-col xl:flex-row items-center justify-around mt-52">
      <div>
        <Image
          className="xl:fixed top-44 left-14 "
          src={fishInfo?.image || ""}
          width={500}
          height={500}
          alt="fish"
        />
      </div>
      <main className=" z-10 w-3xl bg-gray-50 p-8">
        <div className="uppercase  text-gray-400 text-sm">
          <Link className="hover:underline" href={`/${locale}/products`}>
            {tProd("title")}
          </Link>
          /
          <Link
            href={`/${locale}/products/${categoryInfo?.name[locale]}`}
            className=" hover:underline"
          >
            {categoryInfo?.name[locale]}
          </Link>
          /
          <span className="font-semibold text-gray-500">
            {fishInfo?.name[locale]}
          </span>
        </div>
        <h2 className="text-xl sm:text-3xl 2xl:text-4xl capitalize  font-semibold tracking-widest md:leading-20 px-8 lg:px-0 mb-6  text-gray-800">
          {fishInfo?.name[locale]}
        </h2>
        <div className="flex flex-col gap-8 p-3 justify-between ">
          <div>
            <h3 className="uppercase text-gray-400">descrition :</h3>
            <p className="lg:text-xl font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              earum ipsum dicta doloremque atque necessitatibus doloribus
              perferendis expedita repellat accusantium temporibus maxime
              deleniti alias a porro, eaque illo beatae et.
            </p>
          </div>
          <hr />
          <div>
            <h3 className="uppercase text-gray-400">specification :</h3>
            <ul className="lg:text-xl font-light">
              <li>Block Quick Freezing (BQF)</li>
              <li>Individual Quick Freezing (IQF)</li>
              <li>Individually wrapped packaging (IWP)</li>
            </ul>
          </div>
          <hr />
          <div>
            <h3 className="uppercase text-gray-400">scientifc name:</h3>
            <p className="lg:text-xl font-light">{fishInfo?.name[locale]}</p>
          </div>

          <hr />
          <div>
            <h3 className="uppercase text-gray-400">fishing zone:</h3>
            <p className="lg:text-xl font-light uppercase">fao 34</p>
          </div>
          <hr />
          <div>
            <h3 className="uppercase text-gray-400">shelf life:</h3>
            <p className="lg:text-xl font-light">18 month</p>
          </div>
        </div>
        <div className="w-full  flex justify-center items-center mt-20 p-8 bg-white">
          {" "}
          <form className="w-full flex flex-col items-center lg:items-start gap-10 px-8 lg:px-0 mt-7">
            <div className="w-[310px] sm:w-[400px] md:w-[600px]   flex flex-col md:flex-row gap-10 items-center justify-center">
              <input
                placeholder={`${t("form.placeholder_name")} *`}
                type="text"
                name="name"
                className="border-b-2 focus:outline-none w-full  py-3 focus:border-[#34699a] placeholder:font-semibold placeholder:text-black  placeholder:uppercase focus:placeholder:text-white"
                required
              />
              <input
                placeholder={`${t("form.placeholder_email")} *`}
                type="email"
                name="email"
                className="border-b-2 focus:outline-none w-full py-3 focus:border-[#34699a] placeholder:font-semibold placeholder:text-black  placeholder:uppercase focus:placeholder:text-white"
                required
              />
            </div>
            <div className="w-[310px] sm:w-[400px] md:w-[600px]   flex flex-col md:flex-row gap-10 items-center justify-center">
              <input
                placeholder={`${t("form.placeholder_phone")} *`}
                type="text"
                name="phone"
                className="border-b-2 focus:outline-none w-[310px] sm:w-[400px] md:w-[600px]  py-3 focus:border-[#34699a] placeholder:font-semibold placeholder:text-black  placeholder:uppercase focus:placeholder:text-white"
                required
              />
              <input
                placeholder={`company *`}
                type="email"
                name="email"
                className="border-b-2 focus:outline-none w-full py-3 focus:border-[#34699a] placeholder:font-semibold placeholder:text-black  placeholder:uppercase focus:placeholder:text-white"
                required
              />
            </div>

            <textarea
              placeholder={`${t("form.placeholder_msg")} *`}
              className="border-b-2 focus:outline-none w-[310px] sm:w-[400px] md:w-[600px]  placeholder:font-semibold placeholder:text-black  placeholder:uppercase py-3 focus:border-[#34699a] focus:placeholder:text-white"
              required
              name="message"
            ></textarea>
            <button
              type="submit"
              className=" text-sm w-[200px]  py-3 md:py-4 px-4 font-medium  uppercase bg-[#34699a] text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

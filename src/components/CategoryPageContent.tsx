import { fishCategories, products } from "@/constants";
import { Categories, MultiLangText } from "@/types";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryPageContent({
  category,
}: {
  category: Categories;
}) {
   const t = useTranslations("category");
  const localeRaw = useLocale();

  const locale = localeRaw as keyof MultiLangText;
  const categoryInfo = fishCategories.find((cat) => cat.id == category);
  const productsInfo = products[category];
  return (
    <section className="mt-50 flex flex-col justify-center max-w-[1500px] min-h-screen mx-auto">
      <div className="uppercase  text-gray-400 text-sm">
        <Link className="hover:underline" href={`/${locale}/products`}>
          {t("title")}
        </Link>/
        <span className="font-semibold text-gray-500">
          {categoryInfo?.name[locale]}
        </span>
      </div>
      <h2 className="text-xl sm:text-3xl 2xl:text-4xl capitalize  font-semibold tracking-widest md:leading-20 px-8 lg:px-0 mb-6  text-gray-800">
        {categoryInfo?.name[locale]}
      </h2>
      <div>
        <ul className=" flex  justify-center  gap-3 flex-wrap">
          {productsInfo.map((pro, idx) => {
            return (
              <li
                key={idx}
                className=" max-w-[400px]  h-[500px] flex flex-col items-center p-8 gap-6 w-fit text-center hover:bg-zinc-100 duration-200 cursor-pointer"
              >
                <Image src={pro.image} width={300} height={300} alt="fish" />
                <h3 className="text-3xl  font-semibold tracking-widest">
                  {pro.name[locale]}
                </h3>
                <Link href={`/${locale}/products/${category}/${pro.id}`}>
                  <button className="relative  inline-block px-6 py-2 border border-[#34699a] text-[#34699a] font-medium overflow-hidden group">
                    <span className="absolute left-0 top-1/2 w-full h-0 bg-[#34699a] z-0 transition-all duration-300 ease-out group-hover:h-full transform -translate-y-1/2"></span>
                    <span className="relative uppercase z-10 group-hover:text-white transition-colors duration-300">
                      details
                    </span>
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
